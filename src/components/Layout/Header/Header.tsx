import  { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { MessageInterface, MessagingObservable } from '../../Messaging/MessagingPublisher';
import { RightIcon } from './RightIcon';
// import {  pipe } from 'rxjs';

export const Header = () => {
    const [activeNav, setActiveNav] = useState<string>('home');
    const [messages, setMessages] = useState<MessageInterface[]>([]);

    const handleNavClick = (navItem: string) => {
        setActiveNav(navItem);
    };

    useEffect(() => {
        const unsubscribe = MessagingObservable.onMessage()
        .subscribe((message: MessageInterface[]) => {
            setMessages(message);
        })


        return () => {
            unsubscribe.unsubscribe();
        }

    }, []);

    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                <Link to="/me">
                    <li className={`nav-item ${activeNav === 'home' ? 'active' : ''}`} onClick={() => handleNavClick('home')}>
                    📋
                    </li>
                </Link>
                <Link to="/add-gift">
                    <li className={`nav-item ${activeNav === 'about' ? 'active' : ''}`} onClick={() => handleNavClick('about')}>
                    🎁
                    </li>
                </Link>

                  <Link to="/add-funds">
                  <li className={`nav-item ${activeNav === 'contact' ? 'active' : ''}`} onClick={() => handleNavClick('contact')}>
                  💰
                    </li>
                </Link>
                        
                <Link to="/messages" className=''>
                    <li className={`nav-item ${activeNav === 'contact' ? 'active' : ''}`} onClick={() => handleNavClick('contact')}>
                        <RightIcon numberOfNotifications={messages.length}>

                             &#128226;
                      </RightIcon>
                    </li>
                  
                </Link>
                   
                
                </ul>
            </nav>
        </header>
    );
};
