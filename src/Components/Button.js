import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom'; // Keep this import for navigation

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  path // Optional prop for navigation
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  // Button with navigation
  const renderButtonWithLink = (
    <Link to={path} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );

  // Button without navigation
  const renderButtonWithoutLink = (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );

  // Conditionally render based on the presence of `path`
  return path ? renderButtonWithLink : renderButtonWithoutLink;
};
