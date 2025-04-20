
import React from 'react';
import {ButtonProps} from '../../types/button-types.ts';
import "./Button.scss"

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
