import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Meet the Minds Behind the Magic</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/A.jpg'
              texts={[
                'University: Boston University',
                'Department: College of Arts and Sciences',
                'World Ranking: #43 according to usnews 2024',
                'Degree: Master of Science in Computer Science',
                'Graduation Year: January 2024',
                'LinkedIn Profile: www.linkedin.com/in/ajit-balla/'
              ]}
              label='Ajit Balla'
              path=''
            />
            <CardItem
              src='images/SC3.jpg'
              texts={[
                'University: Boston University',
                'Department: College of Arts and Sciences',
                'World Ranking: #43 according to usnews 2024',
                'Degree: Master of Science in Computer Science',
                'Graduation Year: January 2024',
                'LinkedIn Profile: https://www.linkedin.com/in/srinivas-chellaboina-7b9a7b173/?originalSubdomain=in'
              ]}
              label='Srinivas Chellaboina'
              path=''
            />
          </ul>
          <ul className='cards__items'>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
