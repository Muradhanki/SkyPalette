

import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [showThankYouAlert, setShowThankYouAlert] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowThankYouAlert(true); 
    
        setFormData({
            name: '',
            email: '',
            message: '',
        });
       
        setTimeout(() => {
            setShowThankYouAlert(false);
        }, 5000); 
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
         
            {showThankYouAlert && (
                <div className="alert alert-success" role="alert">
                    Thank you for reaching out!
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name="message" rows="3" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-custom">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
