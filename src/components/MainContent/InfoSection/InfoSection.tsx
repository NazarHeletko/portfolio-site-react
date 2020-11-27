import React, {useEffect} from 'react'
import './InfoSection.scss'

interface PropsType {
    backgroundColor: string
    backgroundImage: string
    overflow: boolean
}

export const InfoSection: React.FC<PropsType> = ({backgroundColor, backgroundImage, overflow, children}) => {


    return(
        <div className={`info-section ${overflow ? 'overflow-hide' : ''}`} style={{backgroundColor, backgroundImage: `url(${backgroundImage})`}} >
            {children}
        </div>
    );

};


