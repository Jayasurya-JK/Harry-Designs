import { useState } from 'react';

/**
 * Hook to manage contact form state and submission
 */
export function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission
    setShowSuccess(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return {
    formData,
    showSuccess,
    handleSubmit,
    handleChange,
  };
}
