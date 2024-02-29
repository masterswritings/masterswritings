import React, { useState, useEffect } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true); // Define the button state here
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false); // Now setButton is defined
        } else {
            setButton(true); // And here as well
        }
    };

    useEffect(() => {
        showButton();
        // Cleanup the event listener on component unmount
        const handleResize = () => showButton();
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                      <img src={'images/MW.jpg'} alt="Logo" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <CloseIcon style={{ color: '#fff' }} /> : <MenuIcon style={{ color: '#fff' }} />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='/services' className='nav-links' onClick={closeMobileMenu}>
                                LOR
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='/products' className='nav-links' onClick={closeMobileMenu}>
                                SOP
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='/one-on-one-meeting' className='nav-links' onClick={closeMobileMenu}>
                                One-on-One Meeting
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='/packages' className='nav-links' onClick={closeMobileMenu}>
                                Packages
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='https://forms.gle/gZdyYrG5oTYrfqV3A' target="_blank" rel="noopener noreferrer" className='nav-links-mobile' onClick={closeMobileMenu}>
                                CONTACT US
                            </a>
                        </li>
                         
                        <li className='nav-item'> 
                        <a href='https://forms.gle/gZdyYrG5oTYrfqV3A' target="_blank" rel="noopener noreferrer" className="btn-mobile contact-us-btn">
                           <button className={`btn btn--outline`}>CONTACT US</button>
                            </a>
                            </li>
                    </ul>

                    
                </div>
            </nav>
        </>
    );
}

export default Navbar;
