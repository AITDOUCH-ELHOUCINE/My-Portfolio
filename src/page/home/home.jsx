import React from 'react';
import './home.css';
import img1 from '../../image/profile1.jpg';
import { GoMoveToBottom } from "react-icons/go";
const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '../../cv.pdf'; 
  link.download = 'Elhoucine_Ait-Douch_CV.pdf'; 
  link.click();
};

function Home() {
  return (
    <div className="container" id='home'>

      <div className="main">
        <div className="profile-picture">
          <img src={img1} alt="Profile Picture" />
        </div>
        <h1>My name is Elhoucine Ait-Douch,
          <br /> I'm a Full-Stack developer.</h1>
        <p>
          working on both frontend and backend development for websites and
          applications. <br />

          Feel free to reach out to me if you have any projects in mind, or just
          to say hello.
        </p>
        <button className="button" onClick={downloadCV}><a href="#">Get Resume</a></button>

        <span>
          <GoMoveToBottom />
        </span>
      </div>
    </div>
  )
}

export default Home




