// CardItem.js
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({ src, texts, label, path }) {
  // Ensure src uses process.env.PUBLIC_URL for correct path resolution
  const imagePath = `${process.env.PUBLIC_URL}/${src}`;

  return (
    <li className='cards__item'>
      <Link className='cards__item__link' to={path}>
        <figure className='cards__item__pic-wrap' data-category={label}>
          <img className='cards__item__img' alt='Img' src={imagePath} />
        </figure>
        <div className='cards__item__info'>
          {texts.map((text, index) => (
            <p key={index} className='cards__item__text'>{text}</p>
          ))}
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
