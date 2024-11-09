import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './page/home/home';
import reportWebVitals from './reportWebVitals';
import Header from './page/header';
import Skills from './page/skills/skills';
import Projet from './page/projets/projet';
import Contact from './page/contact/contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
      <Home />
      <Skills />
      <Projet />
      <Contact />
      
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
