/**
 * Form Component Template
 * 
 * Task: Build a form with validation
 * 
 * Requirements:
 * - Name field (required, min 2 characters)
 * - Email field (required, valid email format)
 * - Password field (required, min 8 characters)
 * - Submit button
 * - Display validation errors
 * - Show success message on valid submit
 */

import { useState } from 'react';

function Form() {
    // TODO: Add state for form fields
    // TODO: Add state for errors
    // TODO: Add state for success message

    // TODO: Implement validation function
    const validate = () => {
        // Validate name, email, password
        // Return errors object
    };

    // TODO: Implement handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate and handle submission
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* TODO: Add form fields */}
            {/* TODO: Display errors */}
            {/* TODO: Display success message */}
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;

