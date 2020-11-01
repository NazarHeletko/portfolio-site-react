import React from "react";
import './MainContent.scss';
import {InfoSection} from "./InfoSection/InfoSection";
import {StateType} from "../../redux/store";
import {connect, ConnectedProps} from "react-redux";


const MainContent: React.FC<PropsType> = ({mainContentPosition}) => {

    React.useEffect(() => {
        function handleResize() {
            console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)

        }

        window.addEventListener('resize', handleResize)
    });

    return (
        <div className='main-content' style={{left: mainContentPosition}}>
            <InfoSection backgroundColor={'blue'} backgroundImage={'none'}>

            </InfoSection>
            <InfoSection backgroundColor={'red'} backgroundImage={'none'}>

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