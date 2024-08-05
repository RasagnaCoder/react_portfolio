import React, { useState } from 'react';
import './ContactMe.css';

function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { name, email, message } = formData;
        let errors = {};
        if (!name) errors.name = 'Name is required';
        if (!email) errors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email is invalid';
        if (!message) errors.message = 'Message is required';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="contact-me-container">
            <div className="contact-me-content">
                {submitted ? (
                    <div className="success-message">
                        <h2>Thank You!</h2>
                        <p>Your message has been sent successfully. I’ll get back to you soon.</p>
                    </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h1>Contact Me</h1>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? 'error' : ''}
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className={errors.message ? 'error' : ''}
                            />
                            {errors.message && <span className="error-message">{errors.message}</span>}
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default ContactMe;
