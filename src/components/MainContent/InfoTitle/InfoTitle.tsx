import React from 'react'
import './InfoTitle.scss'

type PropsType = {
    title: string
}

export const InfoTitle:React.FC<PropsType> = ({title}) => (
    <div className='info-title'>
        <h2 className='info-title__name'>{title}</h2>
        <div className='info-title__separator'></div>
    </div>
);