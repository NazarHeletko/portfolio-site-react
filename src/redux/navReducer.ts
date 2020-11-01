import homeSvg from '../assets/img/home.svg'
import aboutSvg from '../assets/img/about.svg'
import skillsSvg from '../assets/img/skills.svg'
import experienceSvg from '../assets/img/experience.svg'
import educationSvg from '../assets/img/education.svg'
import contactsSvg from '../assets/img/contacts.svg'
import blogSvg from '../assets/img/blog.svg'

// active images

import homeActiveSvg from '../assets/img/home-active.svg'
import aboutActiveSvg from '../assets/img/about-active.svg'
import skillsActiveSvg from '../assets/img/skills-active.svg'
import experienceActiveSvg from '../assets/img/experience-active.svg'
import educationActiveSvg from '../assets/img/education-active.svg'
import contactsActiveSvg from '../assets/img/contacts-active.svg'
import blogActiveSvg from '../assets/img/blog-active.svg'


const CHANGE_ACTIVE_PAGE = 'nav/CHANGE_ACTIVE_SECTION';

type ActionsType = ChangeActivePage

type ChangeActivePage = {
    type: typeof CHANGE_ACTIVE_PAGE,
    activePage: string
};

export const changeActiveSectionAction = (payload: string): ChangeActivePage => {
    return {
        type: CHANGE_ACTIVE_PAGE,
        activePage: payload
    }
};

type LinkMenuType = {
    title: string,
    isActive: boolean,
    bodyPosition: number
    img: string
    imgActive: string
}

interface InitialState {
    mainContentPosition: number
    navLinks: Array<LinkMenuType>
}

let initialState: InitialState = {
    mainContentPosition: 200,
    navLinks: [
        {
            title: 'home',
            isActive: false,
            bodyPosition: 0,
            img: homeSvg,
            imgActive: homeActiveSvg
        },
        {
            title: 'about',
            isActive: false,
            bodyPosition: 0,
            img: aboutSvg,
            imgActive: aboutActiveSvg
        },
        {
            title: 'skills',
            isActive: false,
            bodyPosition: 0,
            img: skillsSvg,
            imgActive: skillsActiveSvg
        },
        {
            title: 'experience',
            isActive: false,
            bodyPosition: 0,
            img: experienceSvg,
            imgActive: experienceActiveSvg
        },
        {
            title: 'education',
            isActive: false,
            bodyPosition: 0,
            img: educationSvg,
            imgActive: educationActiveSvg
        },
        {
            title: 'contact',
            isActive: false,
            bodyPosition: 0,
            img: contactsSvg,
            imgActive: contactsActiveSvg
        },
        {
            title: 'blog',
            isActive: false,
            bodyPosition: 0,
            img: blogSvg,
            imgActive: blogActiveSvg
        }
    ]

};



export const navReducer = (state: InitialState = initialState, action: ActionsType) => {
    switch (action.type) {
        case CHANGE_ACTIVE_PAGE:
            return {
                ...state,
                navLinks: state.navLinks.map(el => {
                    if(el.title === action.activePage){
                        return {
                            ...el, isActive: true
                        }
                    }
                    return {...el, isActive: false};
                })
            };
        default:
            return state;
    }
};