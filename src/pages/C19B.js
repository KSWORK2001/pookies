import React from 'react';
import ReactPlayer from 'react-player';

const Poem = () => {
  return (
    <section className="main-section">
        <ReactPlayer 
          url="./images/C19B.mp4" 
          controls 
          width="100%" 
          height="100%" 
        />
    </section>
  );
};

export default Poem;
