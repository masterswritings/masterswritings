// CardItem.js
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  const { src, texts, label, path } = props; // Assuming texts is an array

  return (
    <li className='cards__item'>
      <Link className='cards__item__link' to={path}>
        <figure className='cards__item__pic-wrap' data-category={label}>
          <img className='cards__item__img' alt='Img' src={src} />
        </figure>
        <div className='cards__item__info'>
          {texts.map((text, index) => ( // Render each text as a paragraph or heading
            <p key={index} className='cards__item__text'>{text}</p>
          ))}
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
