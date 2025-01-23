
import './Header.css';

export interface RightIcon {
    children: React.ReactNode;
    onClick?: () => void;
    numberOfNotifications?: number;
} 

export const RightIcon = ({ children, onClick, numberOfNotifications }: RightIcon) => {
    return (
        <div className="notification-wrapper" onClick={onClick}>
            <div className="notification__icon">
                {numberOfNotifications}
            </div>
            {children}
        </div>
    );
};