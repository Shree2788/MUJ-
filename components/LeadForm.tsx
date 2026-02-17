import React, { useState } from 'react';
import Button from './Button';
import { submitLeadForm } from '../services/api';

// Add global declaration for dataLayer to extend Window interface
declare global {
  interface Window {
    dataLayer: any[];
  }
}

interface LeadFormProps {
  onSuccess: () => void;
  source: string;
}

const BROCHURE_URL = "https://marvelleducation.com/wp-content/uploads/MUJ-MBA-Brochure.pdf";

const LeadForm: React.FC<LeadFormProps> = ({ onSuccess, source }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '',
    specialization: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const validatePhone = (phone: string) => {
    const regex = /^[7-9]\d{9}$/;
    return regex.test(phone);
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!validatePhone(formData.phone)) {
      setError('Please enter a valid 10-digit phone number starting with 7, 8, or 9');
      return;
    }
    
    // Trigger custom event
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'form_submit1' });
    }
    
    setStep(2);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!formData.specialization) {
      setError('Please select a specialization');
      return;
    }
    if (!formData.experience) {
      setError('Please select your experience level');
      return;
    }

    setIsSubmitting(true);
    
    const success = await submitLeadForm({
      ...formData,
      stage: 'Complete',
      source
    });

    if (success) {
      if (window.dataLayer) {
        window.dataLayer.push({ event: 'success_formsubmit' });
      }
      
      // Open the brochure in a new tab
      window.open(BROCHURE_URL, '_blank');
      
      alert('Thank you for your interest! The brochure is opening in a new tab. Our counselors will contact you shortly.');
      onSuccess();
    } else {
      setError('Submission failed. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-4">
      {step === 1 ? (
        <form onSubmit={handleStep1Submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-muj-orange focus:border-transparent outline-none transition-colors"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                +91
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                   const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                   setFormData({ ...formData, phone: val });
                }}
                className="w-full px-4 py-3 rounded-r border border-gray-300 focus:ring-2 focus:ring-muj-orange focus:border-transparent outline-none transition-colors"
                placeholder="10-digit mobile number"
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" fullWidth>Next</Button>
          <p className="text-xs text-center text-gray-500">
            By clicking Next, you agree to receive counseling calls/messages.
          </p>
        </form>
      ) : (
        <form onSubmit={handleFinalSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-muj-orange focus:border-transparent outline-none transition-colors"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Work Experience</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-muj-orange focus:border-transparent outline-none bg-white transition-colors"
            >
              <option value="">Select Experience</option>
              <option value="Fresher">Fresher (0 years)</option>
              <option value="1-3 Years">1-3 Years</option>
              <option value="3-5 Years">3-5 Years</option>
              <option value="5+ Years">5+ Years</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Specialization</label>
            <select
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-muj-orange focus:border-transparent outline-none bg-white transition-colors"
            >
              <option value="">Select Specialization</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              <option value="HR">HR</option>
              <option value="IT & Fintech">IT & Fintech</option>
              <option value="Analytics and Data Science">Analytics and Data Science</option>
              <option value="Operations Management">Operations Management</option>
              <option value="International Business">International Business</option>
              <option value="Information System Management">Information System Management</option>
              <option value="Project Management">Project Management</option>
              <option value="BFSI">Banking, Financial Services & Insurance</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Retail Management">Retail Management</option>
              <option value="Supply Chain Management">Supply Chain Management</option>
            </select>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex gap-2">
            <button 
                type="button" 
                onClick={() => setStep(1)}
                className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50"
            >
                Back
            </button>
            <Button type="submit" fullWidth disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LeadForm;