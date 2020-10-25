import React from "react";
import './Navigation.scss';
import logo from '../../assets/logo-gif.gif';

export const Navigation: React.FC = () => (
    <div className='navigation'>
        <div className='navigation__logo'>
            <h1 className='navigation__title'>nazar <br/>heletko</h1>
            <img className='navigation__logo-img' src={logo} />
        </div>
    </div>
);