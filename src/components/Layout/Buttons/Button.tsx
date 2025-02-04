
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export const Button = ({children, onClick, type}: ButtonProps) => {
    return (
        <button type={type} onClick={onClick}>{children}</button>
    )
}