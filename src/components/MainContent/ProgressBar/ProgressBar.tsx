import React, {useState} from 'react'
import './ProgressBar.scss'
import {Circle} from "rc-progress/es";

type PropsType = {
    percent: number
    title: string
    expTime: number
}

export const ProgressBar: React.FC<PropsType> = ({percent, title, expTime}) => {
    const [isHovered, setHover] = useState<boolean>(false);
    return (
        <div className='progress-bar' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className='progress-bar__circle'>
                <Circle trailColor='#aaaaaa' trailWidth={2} percent={percent} strokeWidth={4} strokeColor="#ffcc00"/>
                <div className={`progress-bar__percent ${isHovered ? 'progress-bar__percent--hovered' : ''}`}>{percent}<span
                    className='progress-bar__symbol'>%</span></div>
            </div>
            <div className='progress-bar__info'>
                <h4 className='progress-bar__title'>{title}</h4>
                <p className='progress-bar__time'>{expTime} years</p>
            </div>
        </div>
    )
};
