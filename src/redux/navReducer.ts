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
const MAIN_CONTENT_SECTION_WIDTH = 'nav/MAIN_CONTENT_SECTION_WIDTH';
const RESIZE_ACTIVE_SECTION_ADAPTIVE = 'nav/RESIZE_ACTIVE_SECTION_ADAPTIVE';
const MAIN_CONTENT_POSITION_DEFAULT = 'nav/MAIN_CONTENT_POSITION_DEFAULT';

type ActionsType =
    ChangeActivePageActionType
    | ChangeMainContentWidthType
    | ResizeAdaptiveSectionActionType
    | MainContentPositionDefaultType

type MainContentPositionDefaultType = {
    type: typeof MAIN_CONTENT_POSITION_DEFAULT,
    payload: number
}

export const changeMainContentPositionAction = (value: number): MainContentPositionDefaultType => {
    return {
        type: MAIN_CONTENT_POSITION_DEFAULT,
        payload: value
    }
};

type ChangeActivePageActionType = {
    type: typeof CHANGE_ACTIVE_PAGE,
    activePage: string
    index: number
};

export const changeActiveSectionAction = (payload: string, index: number): ChangeActivePageActionType => {
    return {
        type: CHANGE_ACTIVE_PAGE,
        activePage: payload,
        index
    }
};

type ChangeMainContentWidthType = {
    type: typeof MAIN_CONTENT_SECTION_WIDTH,
    mainContentSectionWidth: number
}

export const changeMainContentWidthAction = (payload: number): ChangeMainContentWidthType => {
    return {
        type: MAIN_CONTENT_SECTION_WIDTH,
        mainContentSectionWidth: payload
    }
};

type ResizeAdaptiveSectionActionType = {
    type: typeof RESIZE_ACTIVE_SECTION_ADAPTIVE
}

export const mainContentPositionResizeAction = (): ResizeAdaptiveSectionActionType => {
    return {
        type: RESIZE_ACTIVE_SECTION_ADAPTIVE,
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
    mainContentPositionDefault: number
    mainContentSectionWidth: number
    activePage: number
    navLinks: Array<LinkMenuType>
}

let initialState: InitialState = {
    mainContentPosition: 200,
    mainContentPositionDefault: 200,
    mainContentSectionWidth: 804,
    activePage: 0,
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
        case MAIN_CONTENT_POSITION_DEFAULT:
            return {
                ...state,
                mainContentPositionDefault: action.payload
            };
        case RESIZE_ACTIVE_SECTION_ADAPTIVE:
            return {
                ...state,
                mainContentPosition: state.mainContentPositionDefault === 40 ? 40 : state.mainContentPositionDefault - state.activePage * state.mainContentSectionWidth
            };
        case MAIN_CONTENT_SECTION_WIDTH:
            return {
                ...state,
                mainContentSectionWidth: action.mainContentSectionWidth
            };
        case CHANGE_ACTIVE_PAGE:
            return {
                ...state,
                activePage: action.index,
                mainContentPosition: state.mainContentPositionDefault === 40 ? 40 : state.mainContentPositionDefault - action.index * state.mainContentSectionWidth,
                navLinks: state.navLinks.map((el) => {
                    if (el.title === action.activePage) {
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