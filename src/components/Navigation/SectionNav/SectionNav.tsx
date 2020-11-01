import React, {useEffect} from 'react'
import './SectionNav.scss'
import {connect, ConnectedProps} from "react-redux";
import {StateType} from "../../../redux/store";
import {changeActiveSectionAction} from "../../../redux/navReducer";

let mapStateToProps = (state: StateType) => (
    {
        navLinks: state.navData.navLinks
    }
);


const connector = connect(mapStateToProps, {changeActiveSectionAction});
type PropsFromRedux = ConnectedProps<typeof connector>

type PropsType = PropsFromRedux;

const SectionNavConnect: React.FC<PropsType> = ({navLinks, changeActiveSectionAction}) => {

    useEffect(()=>{changeActiveSectionAction('home')}, []);

    return (<div className='section-nav'>
            <ul className='section-nav__list'>
                {navLinks.map((el, index) => {
                   return (
                       <li key={index} onClick={() => changeActiveSectionAction(el.title)}
                           className={`section-nav__item ${el.isActive ? 'section-nav__item--active' : ''}`}>
                           <img className='section-nav__icon' src={el.isActive ? el.imgActive : el.img}/>
                           <span className='section-nav__text'>{el.title}</span>
                       </li>
                   )
                })}
            </ul>
        </div>
    )
};

export const SectionNav = connector(SectionNavConnect);

