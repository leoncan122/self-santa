import  { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
export const Header = () => {
    const [activeNav, setActiveNav] = useState<string>('home');

    const handleNavClick = (navItem: string) => {
        setActiveNav(navItem);
    };

    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                <Link to="/me">
                    <li className={`nav-item ${activeNav === 'home' ? 'active' : ''}`} onClick={() => handleNavClick('home')}>
                        My List
                    </li>
                </Link>
                <Link to="/add-gift">
                    <li className={`nav-item ${activeNav === 'about' ? 'active' : ''}`} onClick={() => handleNavClick('about')}>
                        Add gift
                    </li>
                </Link>

                  <Link to="/add-funds">
                  <li className={`nav-item ${activeNav === 'contact' ? 'active' : ''}`} onClick={() => handleNavClick('contact')}>
                        Add funds
                    </li>
                </Link>
                        
                   
                
                </ul>
            </nav>
        </header>
    );
};
