import React from 'react'
import './InfoSection.scss'

interface PropsType {
    backgroundColor: string
    backgroundImage: string
}

export const InfoSection: React.FC<PropsType> = ({backgroundColor, backgroundImage, children}) => (
    <div className='info-section' style={{backgroundColor, backgroundImage}} >
        {children}
    </div>
);


