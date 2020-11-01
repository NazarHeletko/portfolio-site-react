import React from 'react';
import {Navigation} from "./components/Navigation/Navigation";
import MainContent from "./components/MainContent/MainContent";


const App: React.FC = () => {
  return (
    <div className='app'>
        <Navigation />
        <MainContent />
    </div>
  );
};

export default App;
