import { Link } from "react-router-dom";
import "../Header.css";


interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

export const NavItem = ({
  to,
  children,
}: NavItemProps) => (
    <Link to={to}>
      {children}
  </Link>
);