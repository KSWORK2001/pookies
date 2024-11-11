// src/pages/Timeline.js
import React from 'react';
import './Timeline.css';

const events = [
  { date: 'Aug 22', description: 'Pookie Dookie cries a river in front of Pookie Wookie', color: '#87CEEB', shape: 'diamond' },
  { date: 'Jul 06', description: 'Karan booked flight tickets to see me', color: '#FF6347', shape: 'circle' },
  { date: 'May 28', description: 'Charvi says I love you', color: '#FFD700', shape: 'heart' },
  { date: 'May 18', description: 'Karan says I love you', color: '#ADFF2F', shape: 'heart' },
  { date: 'May 12', description: 'Karan asks the important question, Charvi says yes', color: '#FF69B4', shape: 'diamond' },
  { date: 'May 03', description: 'First Date', color: '#87CEEB', shape: 'star' },
  { date: 'April 27', description: 'First Message', color: '#F4F7F5', shape: 'circle'},
];

const Event = ({ date, description, color, shape }) => (
  <div className="event" style={{ borderColor: color }}>
    <div className={`shape ${shape}`} style={{ backgroundColor: color }}></div>
    <div className="event-content">
      <h3>{date}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Timeline = () => {
  return (
    <section className="timeline-section">
      <br></br>
      <br></br>
      <h1 className="timeline-title">Our Special Moments🩷🩷🩷</h1>
      {events.map((event, index) => (
        <Event key={index} {...event} />
      ))}
    </section>
  );
};

export default Timeline;
