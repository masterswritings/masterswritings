import React, { useRef } from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';

function Home() {
  const cardsRef = useRef(null);

  const scrollToCards = () => {
    cardsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeroSection scrollToCards={scrollToCards} />
      <div ref={cardsRef}>
        <Cards />
      </div>
    </>
  );
}

export default Home;
