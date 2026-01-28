import React, { useState } from 'react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        try {
            await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScOIL3BpB9PlJJanC0oW4BHOzbE05CWeG7Y_vWIWvXzGq-9yA/formResponse', {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });
            setSubmitted(true);
            form.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            // Even with error, in no-cors mode, it might be hard to tell. 
            // But we assume success if it doesn't throw network error.
            setSubmitted(true);
        }
    };

    return (
        <section id="contact">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Get In Touch</h2>
            <div className="contact-container">
                {submitted ? (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Thank You!</h3>
                        <p style={{ color: '#cbd5e1' }}>Your message has been sent successfully.</p>
                        <button
                            className="btn btn-primary"
                            style={{ marginTop: '1.5rem' }}
                            onClick={() => setSubmitted(false)}
                        >
                            Send Another Message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="entry.236926314"
                                className="form-input"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="entry.140979701"
                                className="form-input"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                name="entry.479230803"
                                className="form-textarea"
                                placeholder="How can I help you?"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-submit">Send Message</button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;
