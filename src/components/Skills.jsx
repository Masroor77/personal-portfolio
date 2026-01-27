import React from 'react';

const skillsData = [
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "Git & GitHub",
    "REST APIs"
];

const Skills = () => {
    return (
        <section id="skills">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Skills & Expertise</h2>
            <div className="skills-container">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <span className="skill-name">{skill}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
