import React from 'react';
import './skills.css';
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { RiNodejsLine } from "react-icons/ri";
import { FaBootstrap, FaAngular, FaGitAlt } from "react-icons/fa";
import { PiFigmaLogoFill } from "react-icons/pi";
import { SiMysql } from "react-icons/si";

const skills = [
    { name: "React", description: "JavaScript frontend library", icon: <IoLogoReact />, bg: '#3E7FA5' },
    { name: "TailwindCSS", description: "CSS framework", icon: <SiTailwindcss />, bg: '#57B1B4' },
    { name: "JavaScript", description: "Programming language", icon: <DiJavascript1 />, bg: '#faf25b' },
    { name: "Node.js", description: "JavaScript runtime", icon: <RiNodejsLine />, bg: '#83CD29' },
    { name: "Bootstrap", description: "CSS framework", icon: <FaBootstrap />, bg: '#7F2FFA' },
    { name: "Angular", description: "JavaScript frontend framework", icon: <FaAngular />, bg: '#B52929' },
    { name: "Git", description: "Version control system", icon: <FaGitAlt />, bg: '#DD6E42' },
    { name: "Figma", description: "UI/UX design tool", icon: <PiFigmaLogoFill />, bg: '#323030' },
    { name: "MySQL", description: "MYSQL", icon: <SiMysql />, bg: '#3E7FA5' },
];

function Skills() {
    return (
        <div>
            <section className="skills-section" id='skills'>
                <h2>Skills & Technologies</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={skill.name} className="skill-card" >
                            <div className="icon" style={{ backgroundColor: skill.bg }}>{skill.icon}</div>
                            <div className='detaill'>
                                <h3>{skill.name}</h3>
                                <p className='skill-description'>{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Skills;
