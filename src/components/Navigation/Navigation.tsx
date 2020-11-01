import React from "react"
import './Navigation.scss'
import logo from '../../assets/img/logo-gif.gif'
import {SectionNav} from "./SectionNav/SectionNav"
import facebookIcon from '../../assets/img/facebook.svg'
import linkedinIcon from '../../assets/img/linkedin.svg'
import githubIcon from '../../assets/img/github.svg'
import Div100vh from 'react-div-100vh'


export const Navigation: React.FC = () => (
    <Div100vh>
        <div className='navigation'>
            <div className='navigation__logo'>
                <h1 className='navigation__title'><span className='navigation__name'>nazar</span><br/>heletko</h1>
                <img className='navigation__logo-img' src={logo}/>
            </div>
            <SectionNav/>
            <div className='navigation__social'>
                <a className='navigation__link' target='_blank' href='https://www.facebook.com/nazar.heletko'><img
                    className='navigation__social-icon' src={facebookIcon}/></a>
                <a className='navigation__link' target='_blank' href='https://github.com/NazarHeletko'><img
                    className='navigation__social-icon' src={githubIcon}/></a>
                <a className='navigation__link' target='_blank'
                   href='https://www.linkedin.com/in/nazar-heletko-4193051a3/'><img
                    className='navigation__social-icon' src={linkedinIcon}/></a>
            </div>
        </div>
    </Div100vh>
);