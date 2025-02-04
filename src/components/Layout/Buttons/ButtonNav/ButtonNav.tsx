import React from 'react';
import './ButtonNav.css';
import { RightIcon } from '../../Header/RightIcon';
interface ButtonNavProps {
    label: string;
    icon: string;
    name: string;
    activeNav: string;
    handleNavClick: (navItem: string) => void;
    totalNumeberOfNotifications: number;
}

const ButtonNav: React.FC<ButtonNavProps> = ({ handleNavClick, icon, name, activeNav, totalNumeberOfNotifications }) => {
    return (
        <li
              className={`button-list ${activeNav === name ? "active" : ""}`}
              onClick={() => handleNavClick(name)}
            >
              {name === "messages" ? (
                <RightIcon numberOfNotifications={totalNumeberOfNotifications}>
                  {icon}
                </RightIcon>
              ) : (
                icon
              )}
            </li>
    );
};

export default ButtonNav;