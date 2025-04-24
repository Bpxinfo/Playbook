# Checkbox State Persistence

This document describes the implementation of checkbox state persistence across user sessions.

## Overview

The checkbox state persistence feature allows users to maintain their progress across sessions when working with checklists in the onboarding section. This is implemented by:

1. Storing checkbox states in Supabase with Row Level Security
2. Implementing a React context and hook architecture for state management
3. Supporting both authenticated and guest users

## Database Structure

The feature uses a `checkbox_states` table in Supabase with the following schema:

```sql
CREATE TABLE IF NOT EXISTS public.checkbox_states (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  checkbox_key TEXT NOT NULL,
  checked BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, checkbox_key)
);
```

## Row Level Security

Security is implemented through Row Level Security policies:

- **SELECT**: Users can only read their own checkbox states
- **INSERT**: Users can only insert their own checkbox states 
- **UPDATE**: Users can only update their own checkbox states

## Component Architecture

### 1. Custom Hook: `useCheckboxState`

This hook handles:
- Fetching checkbox states for the current user
- Providing functions to get and update checkbox states
- Implementing optimistic UI updates

### 2. Context Provider: `CheckboxContext`

This context provider:
- Makes checkbox state available throughout the component tree
- Prevents unnecessary re-renders
- Provides a clean API for components

### 3. Checkbox Component: `CheckboxItem`

The component:
- Renders a checkbox with the proper state
- Handles both authenticated and guest users
- Updates the database when toggled (for authenticated users)
- Uses localStorage as a fallback for guest users

## Usage

To use this feature in a component:

```jsx
import { useCheckbox } from '../contexts/CheckboxContext';

function MyComponent() {
  const { getCheckboxState, updateCheckboxState } = useCheckbox();
  
  // Get a checkbox state
  const isChecked = getCheckboxState('my-checkbox-key');
  
  // Update a checkbox state
  const handleToggle = () => {
    updateCheckboxState('my-checkbox-key', !isChecked);
  };
  
  return (
    <button onClick={handleToggle}>
      {isChecked ? 'Checked' : 'Unchecked'}
    </button>
  );
}
```

## Limitations

- Guest users' checkbox states are stored in localStorage and are not persisted across devices
- Changes made while offline will not be saved for authenticated users

## Future Improvements

Potential enhancements include:
- Offline support with sync when connection is restored
- Batch updates for improved performance
- User progress analytics 