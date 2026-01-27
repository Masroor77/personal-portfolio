import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Get In Touch</h2>
            <div className="contact-container">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" id="name" className="form-input" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" className="form-input" placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea id="message" className="form-textarea" placeholder="How can I help you?"></textarea>
                    </div>
                    <button type="submit" className="btn btn-submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
