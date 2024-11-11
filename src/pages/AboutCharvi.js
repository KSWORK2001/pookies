// src/pages/AboutCharvi.js
import React from 'react';
import './AboutPages.css';

const AboutCharvi = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="text-content">
          <h1 className="main-title">About the Weirdo</h1>
          <p className="intro-paragraph">
            So Maggi and I were introduced when I was about 7 years old, and instantly we knew that we were made for each other. From the second I looked towards Maggi, I fell in love , my whole life...wait...what do you mean this is not about Maggi and me?! 
            <br></br>
            <br></br>
            So Karan and I were introduced when I was about 18 years old, and instantly we knew that we were made for each other. From the second I looked towards Karan, I fell in love, my whole life seemed to make sense—like a perfectly seasoned dish without the annoying aftertaste. I was studying Finance at the University of Chicago, and while balancing spreadsheets, I also found myself balancing my affection for Karan, who, to his credit, has supported me through both late-night study sessions and my love for horror movies.
            <br></br>
            <br></br>
            When I’m not immersed in financial markets or trying to make sense of complex equations, you’ll probably find me indulging in spicy food that could make a dragon sweat, or curled up with a thriller that makes me jump at my own shadow. I’m a fan of both the bustling city life and the calming embrace of the beach—talk about having a versatile lifestyle!
            <br></br>
            <br></br>
            Always on the lookout for the next big adventure or new experience, I’m driven to push my limits and try new things, whether it’s testing out a new restaurant or exploring an uncharted part of the city. And through all of it, Karan is my biggest cheerleader, my rock, and the one who makes every journey better. So, here's to the unpredictable ride of life, love, and the occasional horror movie marathon!
          </p>
        </div>
        <div className="image-section">
          <img src={`${process.env.PUBLIC_URL}/images/charvi.png`} alt="Charvi" className="charvi-image" />
        </div>
      </div>
    </section>
  );
};

export default AboutCharvi;
