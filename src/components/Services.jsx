import React from 'react';

const services = [
    {
        title: "Full-Stack Web Development",
        description: "Building robust and scalable web applications from scratch using MERN stack technologies."
    },
    {
        title: "API Design & Integration",
        description: "Creating RESTful APIs and integrating third-party services for seamless data flow."
    },
    {
        title: "Single Page Applications (SPA)",
        description: "Developing fast, responsive, and user-friendly SPAs with React and Redux."
    },
    {
        title: "UI/UX Implementation",
        description: "Translating design mockups into pixel-perfect, interactive user interfaces."
    }
];

const Services = () => {
    return (
        <section id="services">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Services I Offer</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-desc">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
