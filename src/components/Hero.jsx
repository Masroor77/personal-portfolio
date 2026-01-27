import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <h1 className="hero-title">
                Hi, I'm <span className="hero-name">Masroor RM</span>
            </h1>
            <h2 className="hero-subtitle">MERN Stack Developer</h2>
            <p className="hero-description">
                I am a passionate, self-taught tech enthusiast building modern web experiences.
                Specializing in MongoDB, Express, React, and Node.js to bring ideas to life.
            </p>
            <div className="button-group">
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
        </section>
    );
};

export default Hero;
