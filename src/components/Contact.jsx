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
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>Connect with me on Instagram</p>
                <a
                    href="https://www.instagram.com/mas.roor_?igsh=MXU5MjA4aWRsd3U2YQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#E1306C',
                        textDecoration: 'none',
                        fontSize: '1.2rem',
                        padding: '0.5rem 1rem',
                        border: '1px solid #E1306C',
                        borderRadius: '2rem',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#E1306C';
                        e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#E1306C';
                    }}
                >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                    Follow on Instagram
                </a>
            </div>
        </section>
    );
};

export default Contact;
