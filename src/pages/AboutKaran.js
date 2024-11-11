// src/pages/AboutKaran.js
import React from 'react';
import './AboutPages.css';

const AboutKaran = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="text-content">
          <h1 className="main-title">About the Grandpa</h1>
          <p className="intro-paragraph">
            So, Charvi and I were introduced when I was 22 years old, and instantly we knew that we were made for each other. From the moment I saw Charvi, I felt like I’d just experienced the coolest feature of a Tesla—one of those "autopilot" moments where everything just clicks into place. My life seemed to suddenly have a turbo boost, as if I’d just been upgraded with the best software. Speaking of Teslas, did you know they can go from 0 to 60 mph in just over 2 seconds? That’s how quickly Charvi accelerated into my heart!
            <br></br>
            <br></br>
            I’m currently majoring in Computer Science at Georgia State University, where I spend my days coding and debugging—kind of like trying to fix the software glitches in my life, but much less exciting than the rocket launches at SpaceX. When I'm not immersed in algorithms, I’m probably indulging in my favorite spicy foods or enjoying a good thriller, just like Charvi. Our shared love for these things makes every meal and movie night an adventure.
            <br></br>
            <br></br>
            Charvi and I both thrive on city life’s energy and the relaxing vibes of the beach. I’m always eager to explore new experiences and push my boundaries, whether it’s through a new tech project or trying out a daring restaurant. And through it all, Charvi is my co-pilot, my muse, and my biggest supporter. So, here’s to a life that’s as thrilling and innovative as a Tesla on full throttle!
          </p>
        </div>
        <div className="image-section">
          <img src={`${process.env.PUBLIC_URL}/images/karan.jpg`} alt="Karan" className="karan-image" />
        </div>
      </div>
    </section>
  );
};

export default AboutKaran;