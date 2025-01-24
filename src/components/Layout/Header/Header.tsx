import { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { MessagingObservable } from "../../../services/messaging.service";
import { RightIcon } from "./RightIcon";
import { MessageInterface } from "../../../models/notification.model";
import { Alerts } from "../Alerts/Alerts";
import {  delay } from 'rxjs';

export const Header = () => {
  const [activeNav, setActiveNav] = useState<string>("home");
  const [totalNumeberOfNotifications, setTotalNumberOfNotifications] = useState<number>(0);


  const handleNavClick = (navItem: string) => {
    setActiveNav(navItem);
  };

  // const source = interval(5000);
  useEffect(() => {

    const unsubscribe = MessagingObservable.onMessageReceived().pipe(delay(2000)).subscribe(
      (message: MessageInterface) => {
        console.log("Message received", message);
        setTotalNumberOfNotifications(prev => prev + 1);
      }
    );

    return () => {
      unsubscribe.unsubscribe();
    };
  }, []);
 
  return (
    <section className="header-container">
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <Link to="/me">
              <li
                className={`nav-item ${activeNav === "home" ? "active" : ""}`}
                onClick={() => handleNavClick("home")}
              >
                📋
              </li>
            </Link>
            <Link to="/add-gift">
              <li
                className={`nav-item ${activeNav === "about" ? "active" : ""}`}
                onClick={() => handleNavClick("about")}
              >
                🎁
              </li>
            </Link>

            <Link to="/add-funds">
              <li
                className={`nav-item ${
                  activeNav === "contact" ? "active" : ""
                }`}
                onClick={() => handleNavClick("contact")}
              >
                💰
              </li>
            </Link>

            <Link to="/messages" className="">
              <li
                className={`nav-item ${
                  activeNav === "messages" ? "active" : ""
                }`}
                onClick={() => handleNavClick("messages")}
              >
                <RightIcon numberOfNotifications={totalNumeberOfNotifications}>&#128226;</RightIcon>
              </li>
            </Link>
          </ul>
        </nav>
      </header>
      <Alerts />
      
    </section>
  );
};
