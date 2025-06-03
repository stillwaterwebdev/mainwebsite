'use client';

import { useState } from 'react';

// FormField component
const FormField = ({ 
  label, id, type = "text", placeholder, required = false, textarea = false,
  value, onChange, error
}: { 
  label: string; 
  id: string; 
  type?: string; 
  placeholder: string;
  required?: boolean;
  textarea?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
}) => (
  <div className="mb-5">
    <label 
      htmlFor={id} 
      className="block text-white font-medium mb-1.5"
    >
      {label} {required && <span className="text-royalbyte-300">*</span>}
    </label>
    {textarea ? (
      <textarea
        id={id}
        name={id}
        rows={4}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={`w-full bg-royalbyte-800/30 border ${error ? 'border-red-500' : 'border-royalbyte-800/60'} rounded-lg px-4 py-2.5 text-white placeholder-royalbyte-300/70 focus:outline-none focus:ring-2 focus:ring-royalbyte-600/50 focus:border-transparent transition-colors`}
      ></textarea>
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={`w-full bg-royalbyte-800/30 border ${error ? 'border-red-500' : 'border-royalbyte-800/60'} rounded-lg px-4 py-2.5 text-white placeholder-royalbyte-300/70 focus:outline-none focus:ring-2 focus:ring-royalbyte-600/50 focus:border-transparent transition-colors`}
      />
    )}
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// ServiceOption component
const ServiceOption = ({ 
  id, 
  label, 
  checked, 
  onChange 
}: { 
  id: string; 
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="flex items-center mb-3">
    <input
      type="checkbox"
      id={id}
      name="services"
      value={id}
      checked={checked}
      onChange={onChange}
      className="h-5 w-5 rounded border-royalbyte-800/60 bg-royalbyte-800/30 text-royalbyte-600 focus:ring-0 focus:ring-offset-0 checked:bg-royalbyte-600"
    />
    <label htmlFor={id} className="ml-3 text-royalbyte-100">
      {label}
    </label>
  </div>
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    services: [] as string[],
    message: '',
    referral: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, value]
        : prev.services.filter(service => service !== value)
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.services.length === 0) newErrors.services = 'Please select at least one service';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', services: [], message: '', referral: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-royalbyte-800/20 backdrop-blur-sm border border-royalbyte-800/40 rounded-xl p-6 md:p-8">
      <h2 className="text-2xl font-bold text-white mb-4">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <FormField 
            label="Full Name" 
            id="name" 
            placeholder="Your name" 
            required 
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
          />
          <FormField 
            label="Email" 
            id="email" 
            type="email" 
            placeholder="your@email.com" 
            required 
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
          />
        </div>
        <FormField 
          label="Company" 
          id="company" 
          placeholder="Your company name (optional)" 
          value={formData.company}
          onChange={handleInputChange}
        />
        <div className="mb-5">
          <label className="block text-white font-medium mb-2">
            What services are you interested in? <span className="text-royalbyte-300">*</span>
          </label>
          <div className="grid md:grid-cols-2 gap-2">
            <ServiceOption 
              id="web-development" 
              label="Web Development" 
              checked={formData.services.includes('web-development')}
              onChange={handleServiceChange}
            />
            <ServiceOption 
              id="ecommerce" 
              label="E-commerce Solutions" 
              checked={formData.services.includes('ecommerce')}
              onChange={handleServiceChange}
            />
            <ServiceOption 
              id="seo" 
              label="SEO Optimization" 
              checked={formData.services.includes('seo')}
              onChange={handleServiceChange}
            />
            <ServiceOption 
              id="other" 
              label="Other Services" 
              checked={formData.services.includes('other')}
              onChange={handleServiceChange}
            />
          </div>
          {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
        </div>
        <FormField 
          label="Project Details" 
          id="message" 
          placeholder="Tell us about your project goals, timeline, and any specific requirements..." 
          required 
          textarea 
          value={formData.message}
          onChange={handleInputChange}
          error={errors.message}
        />
        <div className="mb-5">
          <label className="block text-white font-medium mb-2">
            How did you hear about us?
          </label>
          <select 
            id="referral" 
            name="referral" 
            value={formData.referral}
            onChange={handleInputChange}
            className="w-full bg-royalbyte-800/30 border border-royalbyte-800/60 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-royalbyte-600/50 focus:border-transparent transition-colors"
          >
            <option value="">Please select an option</option>
            <option value="search">Search Engine</option>
            <option value="referral">Referral</option>
            <option value="social">Social Media</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="pt-2">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full bg-royalbyte-600 text-white py-4 rounded-lg font-semibold transform transition-all duration-200 
              ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {submitStatus === 'success' && (
            <p className="text-green-500 text-center mt-3">
              Thank you for your message! We&apos;ll get back to you within 24-48 hours.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-500 text-center mt-3">
              There was an error sending your message. Please try again or contact us directly.
            </p>
          )}
          {submitStatus === 'idle' && !isSubmitting && (
            <p className="text-center text-royalbyte-300 text-sm mt-3">
              We&apos;ll get back to you within 24-48 hours.
            </p>
          )}
        </div>
      </form>
    </div>
  );
} 