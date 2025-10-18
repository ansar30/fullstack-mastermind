/**
 * Form with Validation Component
 * Demonstrates: Form handling, validation, controlled components, error states
 */

import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    termsAccepted: false
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validation rules
  const validate = (name, value) => {
    switch (name) {
      case 'username':
        if (!value) return 'Username is required';
        if (value.length < 3) return 'Username must be at least 3 characters';
        if (value.length > 20) return 'Username must be less than 20 characters';
        if (!/^[a-zA-Z0-9_]+$/.test(value)) return 'Username can only contain letters, numbers, and underscores';
        return '';

      case 'email':
        if (!value) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email is invalid';
        return '';

      case 'password':
        if (!value) return 'Password is required';
        if (value.length < 8) return 'Password must be at least 8 characters';
        if (!/(?=.*[a-z])/.test(value)) return 'Password must contain at least one lowercase letter';
        if (!/(?=.*[A-Z])/.test(value)) return 'Password must contain at least one uppercase letter';
        if (!/(?=.*\d)/.test(value)) return 'Password must contain at least one number';
        if (!/(?=.*[@$!%*?&])/.test(value)) return 'Password must contain at least one special character';
        return '';

      case 'confirmPassword':
        if (!value) return 'Please confirm your password';
        if (value !== formData.password) return 'Passwords do not match';
        return '';

      case 'age':
        if (!value) return 'Age is required';
        const ageNum = parseInt(value);
        if (isNaN(ageNum)) return 'Age must be a number';
        if (ageNum < 18) return 'You must be at least 18 years old';
        if (ageNum > 120) return 'Please enter a valid age';
        return '';

      case 'termsAccepted':
        if (!value) return 'You must accept the terms and conditions';
        return '';

      default:
        return '';
    }
  };

  // Validate all fields
  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach(name => {
      const error = validate(name, formData[name]);
      if (error) newErrors[name] = error;
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: fieldValue
    }));

    // Validate field on change if it's been touched
    if (touched[name]) {
      const error = validate(name, fieldValue);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validate(name, fieldValue);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    // Validate all fields
    const newErrors = validateAll();
    setErrors(newErrors);

    // If no errors, submit form
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log('Form submitted:', formData);
        setSubmitSuccess(true);
        
        // Reset form
        setTimeout(() => {
          setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            age: '',
            termsAccepted: false
          });
          setTouched({});
          setSubmitSuccess(false);
        }, 3000);
        
      } catch (error) {
        setErrors({ submit: 'An error occurred. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const getPasswordStrength = (password) => {
    if (!password) return '';
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[@$!%*?&]/.test(password)) strength++;
    
    if (strength <= 1) return 'weak';
    if (strength <= 3) return 'medium';
    return 'strong';
  };

  const passwordStrength = getPasswordStrength(formData.password);

  if (submitSuccess) {
    return (
      <div className="success-message">
        <h2>✓ Registration Successful!</h2>
        <p>Thank you for registering, {formData.username}!</p>
      </div>
    );
  }

  return (
    <div className="registration-form-container">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit} noValidate>
        
        {/* Username */}
        <div className="form-group">
          <label htmlFor="username">Username *</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.username && touched.username ? 'error' : ''}
          />
          {errors.username && touched.username && (
            <span className="error-message">{errors.username}</span>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? 'error' : ''}
          />
          {errors.email && touched.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? 'error' : ''}
          />
          {formData.password && (
            <div className={`password-strength ${passwordStrength}`}>
              Password strength: {passwordStrength}
            </div>
          )}
          {errors.password && touched.password && (
            <span className="error-message">{errors.password}</span>
          )}
          <small className="help-text">
            Must be at least 8 characters with uppercase, lowercase, number, and special character
          </small>
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password *</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.confirmPassword && touched.confirmPassword ? 'error' : ''}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span className="error-message">{errors.confirmPassword}</span>
          )}
        </div>

        {/* Age */}
        <div className="form-group">
          <label htmlFor="age">Age *</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.age && touched.age ? 'error' : ''}
          />
          {errors.age && touched.age && (
            <span className="error-message">{errors.age}</span>
          )}
        </div>

        {/* Terms */}
        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            I accept the terms and conditions *
          </label>
          {errors.termsAccepted && touched.termsAccepted && (
            <span className="error-message">{errors.termsAccepted}</span>
          )}
        </div>

        {/* Submit Error */}
        {errors.submit && (
          <div className="submit-error">{errors.submit}</div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="submit-button"
        >
          {isSubmitting ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>

      <p className="form-footer">
        Already have an account? <a href="/login">Log in</a>
      </p>
    </div>
  );
}

export default RegistrationForm;

