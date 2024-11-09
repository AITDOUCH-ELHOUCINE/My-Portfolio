import React, { useState, useEffect } from 'react';
import './header.css';
import { MdSunny, MdDarkMode } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { SlEnvolope } from "react-icons/sl";

function Header() {
  const [mode, setMode] = useState(false);
  const [colorMode, setColorMode] = useState('darkMode');
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projet', 'contact'];
      let currentSection = ''; 

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const changeMode = () => {
    setMode((prevMode) => !prevMode);
    setColorMode((prevColorMode) => (prevColorMode === 'darkMode' ? 'lightMode' : 'darkMode'));
  };

  useEffect(() => {
    document.body.classList.remove('lightMode', 'darkMode');
    document.body.classList.add(colorMode);
  }, [colorMode]);

  return (
    <div className='header' id='head'>
      <div className="logo"></div>
      <div className="links">
        <a className={activeLink === 'home' ? 'active' : ''} href="#head">
          <span className='link-head'>Home</span>
          <span className='icon-head'><IoHomeOutline /></span>
        </a>
        <a className={activeLink === 'skills' ? 'active' : ''} href="#skills">
          <span className='link-head'>Skills</span>
          <span className='icon-head'><RiUserSettingsLine /></span>
        </a>
        <a className={activeLink === 'projet' ? 'active' : ''} href="#projet">
          <span className='link-head'>Projects</span>
          <span className='icon-head'><GrProjects /></span>
        </a>
        <a className={activeLink === 'contact' ? 'active' : ''} href="#contact">
          <span className='icon-head'><SlEnvolope /></span>
        </a>
      </div>
      <div className="contact">
        <a href="#contact">Contact me!</a>
        <div className="sun" onClick={changeMode}>
          {mode ? <MdDarkMode /> : <MdSunny />}
        </div>
      </div>
    </div>
  );
}

export default Header;
