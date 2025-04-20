
import React, { ReactNode } from 'react';
import "./Button.scss"
type ButtonProps = {
    onClick?: () => void;
    children: ReactNode;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`button ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
