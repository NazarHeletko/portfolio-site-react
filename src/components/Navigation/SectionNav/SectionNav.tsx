import React, {useEffect} from 'react'
import './SectionNav.scss'
import {connect, ConnectedProps} from "react-redux";
import {StateType} from "../../../redux/store";
import {
    changeActiveSectionAction, changeMainContentPositionAction,
    changeMainContentWidthAction,
    mainContentPositionResizeAction
} from "../../../redux/navReducer";
import {useMediaQuery} from "react-responsive";
import {Link} from "react-scroll";


let mapStateToProps = (state: StateType) => (
    {
        navLinks: state.navData.navLinks
    }
);


const connector = connect(mapStateToProps, {
    changeActiveSectionAction,
    changeMainContentWidthAction,
    mainContentPositionResizeAction,
    changeMainContentPositionAction
});
type PropsFromRedux = ConnectedProps<typeof connector>

type PropsType = PropsFromRedux;

const SectionNavConnect: React.FC<PropsType> = ({navLinks, changeActiveSectionAction, changeMainContentWidthAction, mainContentPositionResizeAction, changeMainContentPositionAction}) => {

    const is1140 = useMediaQuery({query: '(max-width: 1140px)'});
    const is900 = useMediaQuery({query: '(max-width: 900px)'});
    const is768 = useMediaQuery({query: '(max-width: 768px)'});

    useEffect(() => {
        changeActiveSectionAction('home', 0);
    }, []);

    useEffect(() => {
        if (is1140) {
            changeMainContentWidthAction(700);
            mainContentPositionResizeAction()
        } else {
            changeMainContentWidthAction(804);
            mainContentPositionResizeAction()
        }
    }, [is1140]);

    useEffect(() => {
        if (is900) {
            changeMainContentWidthAction(570);
            mainContentPositionResizeAction()
        } else {
            if(is1140) {
                changeMainContentWidthAction(700);
                mainContentPositionResizeAction()
            }
        }
    }, [is900]);



    return (<div className='section-nav'>
            <div className='section-nav__list'>
                {navLinks.map((el, index) => {
                    if (!is768) {
                        return (
                            <div key={index} onClick={() => {
                                changeActiveSectionAction(el.title, index);
                            }}
                                className={`section-nav__item ${el.isActive ? 'section-nav__item--active' : ''}`}>

                                <span className='section-nav__text'>{el.title}</span>
                            </div>
                        )
                    } else {
                        return (
                            <Link
                                key={index} onClick={() => {
                                changeActiveSectionAction(el.title, index);
                            }}
                                activeClass="active"
                                to={el.title}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={0}
                                onSetActive={()=>{changeActiveSectionAction(el.title, index)}}
                            >
                                <div key={index} className={`section-nav__item ${el.isActive ? 'section-nav__item--active' : ''}`}>
                                    <img className='section-nav__icon' src={el.isActive ? el.imgActive :el.img }/>
                                </div>
                            </Link>
                        )
                    }
                })}
            </div>
        </div>
    )
};

export const SectionNav = connector(SectionNavConnect);

