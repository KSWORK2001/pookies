import React, { useEffect, useState, useRef } from 'react';
import './Footer.css';

const Footer = () => {
  const startDate = new Date('2024-05-12');
  const [daysPassed, setDaysPassed] = useState(0);
  const [isBroken, setIsBroken] = useState(false);
  const [hearts, setHearts] = useState([]);
  const footerRef = useRef(null);
  const audioRef = useRef(null); // Add a ref for the audio element
  const [volume, setVolume] = useState(1); // State for volume

  useEffect(() => {
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysPassed(diffDays);

    // Generate hearts every second
    const interval = setInterval(() => {
      generateHeart();
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  const generateHeart = () => {
    if (footerRef.current) {
      const footerRect = footerRef.current.getBoundingClientRect();
      const heart = {
        id: Date.now(),
        left: Math.random() * footerRect.width,
        top: Math.random() * footerRect.height,
      };
      setHearts((prevHearts) => [...prevHearts, heart]);
      setTimeout(() => {
        setHearts((prevHearts) => prevHearts.filter((h) => h.id !== heart.id));
      }, 3000);
    }
  };

  const handleHover = () => {
    setHearts([]);
  };

  const handleAnimationEnd = () => {
    setIsBroken(true);
    setTimeout(() => setIsBroken(false), 1000); // Reset after 1s
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <footer className="footer" ref={footerRef}>
      <div 
        className={`days-passed ${isBroken ? 'broken' : ''}`} 
        data-text={`${daysPassed} days of Headaches *ughh*`}
        onAnimationEnd={handleAnimationEnd}
      >
        {daysPassed} days of Headaches *ughh*
      </div>
      <div onMouseOver={handleHover}>
        Always and Forever
      </div>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{ left: `${heart.left}px`, top: `${heart.top}px` }}
        ></div>
      ))}
      <div className="volume-control">
        <label htmlFor="volume">Volume:</label>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
      <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/Song.mp3`} autoPlay loop />
    </footer>
  );
};

export default Footer;
