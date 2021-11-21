import React, { FC } from 'react';
import './Button.scss';

interface ButtonProps {
  title: string;
  clickHandler: () => void;
  additionalClasses?: string;
}

const Button:FC<ButtonProps> = ({ title, clickHandler, additionalClasses }) => (
  <button className={`button ${additionalClasses}`} onClick={clickHandler}>
    {title}
  </button>
);

export default Button;
