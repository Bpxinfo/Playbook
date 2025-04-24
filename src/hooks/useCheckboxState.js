import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../contexts/AuthContext';

/**
 * Custom hook to manage persisted checkbox states for authenticated users
 * @returns {Object} Object containing checkboxes and management functions
 */
export function useCheckboxState() {
  const { user } = useAuth();
  const [checkboxStates, setCheckboxStates] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch checkbox states when user changes (on login/logout)
  useEffect(() => {
    if (!user) {
      // Clear states when no user is logged in
      setCheckboxStates({});
      setIsLoading(false);
      return;
    }

    const fetchCheckboxStates = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { data, error } = await supabase
          .from('checkbox_states')
          .select('checkbox_key, checked')
          .eq('user_id', user.id);

        if (error) {
          throw error;
        }

        // Convert array to map for easy access
        const statesMap = {};
        data.forEach(item => {
          statesMap[item.checkbox_key] = item.checked;
        });

        setCheckboxStates(statesMap);
      } catch (err) {
        console.error('Error fetching checkbox states:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCheckboxStates();
  }, [user]);

  /**
   * Update a checkbox state both locally and in the database
   * @param {string} checkboxKey - Unique identifier for the checkbox
   * @param {boolean} checked - New checked state
   * @returns {Promise<void>}
   */
  const updateCheckboxState = async (checkboxKey, checked) => {
    if (!user) {
      console.warn('Cannot update checkbox state: User not authenticated');
      return;
    }

    // Optimistic update for UI
    setCheckboxStates(prev => ({
      ...prev,
      [checkboxKey]: checked
    }));

    console.log('useCheckboxState: Preparing to upsert', { userId: user.id, checkboxKey, checked });

    try {
      const { data, error } = await supabase
        .from('checkbox_states')
        .upsert({
          user_id: user.id,
          checkbox_key: checkboxKey,
          checked: checked,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'user_id,checkbox_key'
        })
        .select();

      console.log('Supabase upsert result:', { data, error });

      if (error) {
        throw error;
      }
    } catch (err) {
      console.error('Error updating checkbox state:', err);
      setError(err.message);
      
      // Revert optimistic update in case of error
      setCheckboxStates(prev => ({
        ...prev,
        [checkboxKey]: !checked
      }));
    }
  };

  /**
   * Get the current state of a checkbox
   * @param {string} checkboxKey - Unique identifier for the checkbox
   * @returns {boolean} - Current checked state (false if not found)
   */
  const getCheckboxState = (checkboxKey) => {
    return checkboxStates[checkboxKey] || false;
  };

  return {
    checkboxStates,
    isLoading,
    error,
    updateCheckboxState,
    getCheckboxState
  };
} 