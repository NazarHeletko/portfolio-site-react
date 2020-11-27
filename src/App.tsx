import React, {useEffect} from 'react';
import {Navigation} from "./components/Navigation/Navigation";
import MainContent from "./components/MainContent/MainContent";
import {connect, ConnectedProps} from "react-redux";
import {
    changeActiveSectionAction, changeMainContentPositionAction,
    changeMainContentWidthAction,
    mainContentPositionResizeAction
} from "./redux/navReducer";
import {useMediaQuery} from "react-responsive";
import './App.scss'

const connector = connect(null , {
    mainContentPositionResizeAction,
    changeMainContentPositionAction
});
type PropsFromRedux = ConnectedProps<typeof connector>

type PropsType = PropsFromRedux;

const AppConnect: React.FC<PropsType> = ({mainContentPositionResizeAction, changeMainContentPositionAction}) => {
    const is768 = useMediaQuery({query: '(max-width: 768px)'});

    useEffect(() => {
        if (is768) {
            changeMainContentPositionAction(40);
            mainContentPositionResizeAction()
        } else {
            changeMainContentPositionAction(200);
            mainContentPositionResizeAction()
        }
    }, [is768]);

  return (
    <div className='app'>
        <Navigation />
        <MainContent />
    </div>
  );
};



export const App = connector(AppConnect);
