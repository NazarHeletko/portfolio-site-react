import React from "react"
import './MainContent.scss'
import {InfoSection} from "./InfoSection/InfoSection"
import {StateType} from "../../redux/store"
import {connect, ConnectedProps} from "react-redux"
import {useMediaQuery} from "react-responsive"
import {Element} from 'react-scroll'
import profilePic from '../../assets/img/profile.jpg'
import {InfoTitle} from "./InfoTitle/InfoTitle";
import {InfoBlock} from "./InfoBlock/InfoBlock";
import {CustomBtn} from "./CustomBtn/CustomBtn";
import {ProgressBar} from "./ProgressBar/ProgressBar";
import {SectionDivider} from "./SectionDivider/SectionDivider";


const MainContent: React.FC<PropsType> = ({mainContentPosition}) => {

    const is768 = useMediaQuery({query: '(max-width: 768px)'});

    return (
        <div className='main-content'
             style={{left: mainContentPosition, transition: !is768 ? 'left 0.4s cubic-bezier(1,.07,.88,.35)' : 'none'}}>
            <InfoSection overflow={true} backgroundColor={'none'} backgroundImage={profilePic}>
                <Element name='home' style={{height: '100%'}}>
                    <div className='responsive-box'>
                        <div className='section-content'>
                            <div className='introduction'>
                                <h2 className='introduction__title'>
                                    hello, i'm <br/>
                                    <span className='introduction__title-name'>nazar heletko</span>
                                </h2>
                                <span className='introduction__description'>frontend developer</span>
                            </div>
                        </div>
                    </div>
                </Element>
            </InfoSection>
            <InfoSection overflow={false} backgroundColor={'rgb(29 29 29)'} backgroundImage={'none'}>
                <Element name='about'>
                    <div className='about-section'>
                        <InfoTitle title='about'/>
                        <div className='personal-data'>
                            <ul className='personal-data__list'>
                                <li className='personal-data__item'>Name: Nazar Heletko</li>
                                <li className='personal-data__item'>Email: &nbsp;<a
                                    className='personal-data__email-link'
                                    href='mailto: heletko.nazar@gmail.com'>heletko.nazar@gmail.com</a></li>
                                <li className='personal-data__item'>Phone: (066)-744-03-64</li>
                                <li className='personal-data__item'>Date of birth: 6 August 1991</li>
                                <li className='personal-data__item'>Nationality: Ukraine</li>
                            </ul>
                        </div>
                        <InfoBlock title='professional profile'>
                            Hi, i am not experienced front-end developer.
                            I am interested in building usable,well-constructed websites and react-applications.
                            Self-motivated, have ability to learn quickly, and therefore effective at completing tasks
                            with minimal supervision.
                            Currently, i am looking for job opportunities of React development in Lviv.
                        </InfoBlock>
                        <CustomBtn
                            link='https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1JLLsIHKt48zMZqUnejKoSEmPOXabdLQ2'
                            title='Download resume as PDF format'/>
                    </div>
                </Element>
            </InfoSection>
            <InfoSection overflow={false} backgroundColor={'rgb(20 20 20)'} backgroundImage={'none'}>
                <Element name='skills'>
                    <div className='skills-section'>
                        <InfoTitle title='skills'/>
                        <InfoBlock title='14 Years Experience!'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus
                            aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum
                            elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus
                            dignissim.
                        </InfoBlock>
                        <div className='skills-list'>
                            <ProgressBar percent={70} title='js' expTime={3}/>
                            <ProgressBar percent={75} title='react' expTime={1}/>
                            <ProgressBar percent={85} title='css, html' expTime={3}/>
                            <ProgressBar percent={50} title='typescript' expTime={1}/>
                        </div>
                        <InfoBlock title='knowledge'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus
                            aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum
                            elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus
                            dignissim.
                        </InfoBlock>
                        <SectionDivider/>
                    </div>
                </Element>
            </InfoSection>
            <InfoSection  overflow={false} backgroundColor={'orange'} backgroundImage={'none'}>
                <Element name='experience'>
                    <div>
                        <h1>EXPERIENCE</h1>
                    </div>
                </Element>
            </InfoSection>
            <InfoSection overflow={false} backgroundColor={'brown'} backgroundImage={'none'}>
                <Element name='education'>
                    <div>
                        <h1>EDUCATION</h1>
                    </div>
                </Element>
            </InfoSection>
            <InfoSection overflow={false} backgroundColor={'yellow'} backgroundImage={'none'}>
                <Element name='contact'>
                    <div>
                        <h1>CONTACTS</h1>
                    </div>
                </Element>
            </InfoSection>
        </div>
    )
};

let mapStateToProps = (state: StateType) => (
    {
        mainContentPosition: state.navData.mainContentPosition
    }
);

const connector = connect(mapStateToProps, null);

type PropsFromRedux = ConnectedProps<typeof connector>

type PropsType = PropsFromRedux

export default connector(MainContent);