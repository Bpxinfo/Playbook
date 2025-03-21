import React, { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    section: '',
    requestType: 'revision',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      setError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const { error: supabaseError } = await supabase
        .from('feedback')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            section: formData.section,
            request_type: formData.requestType,
            description: formData.description,
            submitted_at: new Date().toISOString(),
          }
        ]);

      if (supabaseError) throw supabaseError;

      setSubmitted(true);
      setError('');
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          section: '',
          requestType: 'revision',
          description: ''
        });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError('Failed to submit feedback. Please try again later.');
      console.error('Error submitting feedback:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Submit Feedback</h1>
        
        <div className="space-y-6">
          {submitted && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="text-gray-800 font-medium">Success</h3>
                </div>
                <p className="text-gray-700 mt-2">
                  Your feedback has been submitted successfully. Thank you for helping improve the playbook!
                </p>
              </div>
            </div>
          )}
          
          {error && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                  <h3 className="text-gray-800 font-medium">Error</h3>
                </div>
                <p className="text-gray-700 mt-2">{error}</p>
              </div>
            </div>
          )}

          <section className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-lg font-medium text-gray-700">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-lg font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-lg font-medium text-gray-700">
                  Section
                </label>
                <select
                  name="section"
                  value={formData.section}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-red-800 focus:border-transparent"
                >
                  <option value="">Select a section</option>
                  <option value="playbook-overview">Playbook Overview</option>
                  <option value="ccc-initiative">CCC Initiative</option>
                  <option value="processes">Processes & Governance</option>
                  <option value="systems">Systems</option>
                  <option value="communications">Communications</option>
                  <option value="internal-onboarding">Internal Onboarding</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-lg font-medium text-gray-700">
                  Request Type
                </label>
                <select
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-red-800 focus:border-transparent"
                >
                  <option value="revision">Content Revision</option>
                  <option value="addition">Content Addition</option>
                  <option value="bug">Bug Report</option>
                  <option value="suggestion">General Suggestion</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-lg font-medium text-gray-700">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-2 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors disabled:bg-red-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;