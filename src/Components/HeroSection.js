import React, { useState } from 'react';
import { Button } from './Button';
import './HeroSection.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // Import the arrow down icon

function HeroSection({ scrollToCards }) {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className='hero-container'>
      {/* Use process.env.PUBLIC_URL for the video in the background */}
      <video src={`${process.env.PUBLIC_URL}/videos/video-2.mp4`} autoPlay loop muted playsInline />
      <h1>MASTERS' WRITINGS</h1>
      <p>Where Experience Meets Ambition</p>
      <div className='hero-btns'>
        <Button
          path='/get-started'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          WHY CHOOSE US
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={toggleVideo}
        >
          WATCH DEMO <i className='far fa-play-circle' />
        </Button>
      </div>

      {/* Update the video source here as well */}
      {showVideo && (
        <div className="video-modal">
          <video src={`${process.env.PUBLIC_URL}/videos/aivideo.mp4`} autoPlay loop controls className="modal-video" />
          <span className="close-modal" onClick={toggleVideo}>×</span>
        </div>
      )}

      <div className='scroll-to-cards' onClick={scrollToCards}>
        <KeyboardArrowDownIcon style={{ fontSize: '4rem', color: '#fff' }} />
      </div>
    </div>
  );
}

export default HeroSection;
