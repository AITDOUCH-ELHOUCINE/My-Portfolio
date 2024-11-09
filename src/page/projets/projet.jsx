import React from 'react';
import CustomIcon from './icon.jsx';
import './projet.css';
import img1 from '../../image/projet1.jpg';
import img2 from '../../image/porjet2.jpg';
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const projets = [
    { image: img1, name: "React", description: "JavaScript frontend library", icon1: <IoLogoReact />, icon2: <SiTailwindcss /> },
    { image: img2, name: "TailwindCSS", description: "CSS framework", icon1: <IoLogoReact />, icon2: <SiTailwindcss /> },
    { image: img1, name: "JavaScript", description: "Programming language", icon1: <IoLogoReact />, icon2: <SiTailwindcss /> },
];


const Projet = () => {
    return (
        <div className="projets-container" id='projet'>
            <div className="projets-content">
                <h2>Personal projets</h2>
                <div className="projets-grid">
                    {projets.map((elm, index) => (
                        <div key={index} className="projet-card" >
                            <div className="projet-image">
                                <img src={elm.image} />
                            </div>
                            <div className="projet-info">
                                <h4>{elm.name}</h4>
                                <p>
                                    {elm.description}
                                </p>

                            </div>
                            <div className='detaill'>
                                <div className="projet-langague">
                                    <span>{elm.icon1}</span>
                                    <span>{elm.icon2}</span>
                                </div>
                                <div className='projet-link'>
                                    <a href="#"><FaGithub /></a>
                                    <a href="#"> <CustomIcon /></a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projet;



