import React, { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      setError('Please fill in all required fields');
      return;
    }
    console.log('Feedback submitted:', formData);
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
    <div className="p-8 max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-5xl font-light text-red-800 mb-8 text-center">Submit Feedback</h1>
        
        {submitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
              <h3 className="text-green-800 font-medium">Success</h3>
            </div>
            <p className="text-green-700 mt-1">
              Your feedback has been submitted successfully. Thank you for helping improve the playbook!
            </p>
          </div>
        )}
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <div className="flex items-center">
              <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
              <h3 className="text-red-800 font-medium">Error</h3>
            </div>
            <p className="text-red-700 mt-1">{error}</p>
          </div>
        )}

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
              className="w-full p-2 border rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-red-800 focus:border-red-800 focus:outline-none"
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
              className="w-full p-2 border rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-red-800 focus:border-red-800 focus:outline-none"
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
              className="w-full p-2 border rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-red-800 focus:border-red-800 focus:outline-none"
            >
              <option value="">Select a section</option>
              <option value="playbook-overview">Playbook Overview</option>
              <option value="ccc-initiative">CCC Initiative</option>
              <option value="communication-plan">Communication Plan</option>
              <option value="internal-onboarding">Internal Onboarding</option>
              <option value="processes">Processes & Governance</option>
              <option value="systems">Systems</option>
              <option value="other">Other</option>
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
              className="w-full p-2 border rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-red-800 focus:border-red-800 focus:outline-none"
            >
              <option value="revision">Content Revision</option>
              <option value="update">Content Update</option>
              <option value="bug">Technical Issue</option>
              <option value="suggestion">Suggestion</option>
              <option value="other">Other</option>
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
              className="w-full p-2 border rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-red-800 focus:border-red-800 focus:outline-none"
              required
              placeholder="Please describe your request in detail..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors focus:ring-2 focus:ring-red-800 focus:ring-offset-2 focus:outline-none"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;