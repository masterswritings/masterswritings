// src/Components/TextCards.js

import React from 'react';
import TextCardItem from './TextCardItem';
import './TextCards.css';

function TextCards() {
  return (
    <div className='text-cards'>
      <h1>Why Choose Us?</h1>
      <div className='text-cards__container'>
        <div className='text-cards__wrapper'>
          <div className='text-cards__items'>
            <TextCardItem
              text='Experience the Insider Edge'
              description= "Leap into your future with guidance from those who've just lived it. As recent Boston University graduates from the prestigious College of Arts and Sciences, we don’t just talk the talk; we’ve walked the walk. Our journey through the maze of master's life in the USA has equipped us with firsthand insights and real-time learning that textbooks simply can’t offer." 
            />

            <TextCardItem
              text='Tailored Excellence in Every Letter'
              description="Your aspirations are unique; why settle for cookie cutter references? We craft your Letters of Recommendation and Statements of Purpose with a personal touch that echoes your individual journey and potential. Our understanding of recent academic expectations means we know exactly how to highlight your strengths in the language admissions committees speak. "
            />

            <TextCardItem
              text='Stand Out Effortlessly'
              description="In a sea of applicants, we ensure you're not just another fish. Our expertise lies in showcasing your unique story and potential in a way that's not just seen but felt. With us, you're not just applying; you're making a statement. "
              
            />
            <TextCardItem
              text='Beyond the Basics'
              description="With us, it's not just about documents; it's about dreams. Our one-to-one guidance isn’t a service; it’s a partnership. We dive deep into your aspirations, fears, and questions about master's life, offering bespoke advice that’s as ambitious as you are. From acing your application to navigating campus life, we’re the mentors you never knew you needed. "
            />
            <TextCardItem
              text='From Recent Grads to You'
              description="Why go for advisors who view your journey from a distance? Our advice is fresh, relevant, and tailored to today’s challenges and opportunities in higher education. We're not just helping you get into a program; we're preparing you to excel, innovate, and lead. "
              
            />
            <TextCardItem
              text='Your Bridge to Success'
              description="Consider us your co-navigators on this exciting journey abroad. With the latest insights, personalized support, and a friendship-first approach, we’re here to bridge the gap between your dreams and your dream program. "
            />
            {/* Add more TextCardItem components as needed */}
          </div>
          {/* You can add more rows of cards here */}
        </div>
      </div>
    </div>
  );
}

export default TextCards;
