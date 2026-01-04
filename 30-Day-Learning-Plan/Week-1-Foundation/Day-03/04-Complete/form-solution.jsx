/**
 * Form Component with Validation - Complete Solution
 */

import { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
        setSuccess(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validate()) {
            console.log('Form submitted:', formData);
            setSuccess(true);
            // Reset form
            setFormData({ name: '', email: '', password: '' });
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
            <h2>Registration Form</h2>
            
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '8px',
                                marginTop: '5px',
                                border: errors.name ? '2px solid red' : '1px solid #ccc'
                            }}
                        />
                    </label>
                    {errors.name && (
                        <p style={{ color: 'red', margin: '5px 0', fontSize: '14px' }}>
                            {errors.name}
                        </p>
                    )}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '8px',
                                marginTop: '5px',
                                border: errors.email ? '2px solid red' : '1px solid #ccc'
                            }}
                        />
                    </label>
                    {errors.email && (
                        <p style={{ color: 'red', margin: '5px 0', fontSize: '14px' }}>
                            {errors.email}
                        </p>
                    )}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '8px',
                                marginTop: '5px',
                                border: errors.password ? '2px solid red' : '1px solid #ccc'
                            }}
                        />
                    </label>
                    {errors.password && (
                        <p style={{ color: 'red', margin: '5px 0', fontSize: '14px' }}>
                            {errors.password}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    Submit
                </button>
            </form>

            {success && (
                <div style={{
                    marginTop: '20px',
                    padding: '10px',
                    backgroundColor: '#d4edda',
                    color: '#155724',
                    borderRadius: '4px'
                }}>
                    Form submitted successfully!
                </div>
            )}
        </div>
    );
}

export default Form;

/**
 * Key Concepts Demonstrated:
 * 
 * 1. Controlled Components: All inputs are controlled by React state
 * 2. State Management: Using useState for form data, errors, and success
 * 3. Validation: Real-time and on-submit validation
 * 4. Error Handling: Displaying validation errors to user
 * 5. User Feedback: Success message after valid submission
 */

