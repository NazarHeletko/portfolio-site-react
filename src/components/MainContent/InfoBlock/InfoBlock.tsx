import React from 'react'
import './InfoBlock.scss'

type PropsType = {
    title: string
}

export const InfoBlock:React.FC<PropsType> = ({title, children}) => (
    <div className='info-block'>
        <h3 className='info-block__title'>{title}</h3>
        <p className='info-block__content'>{children}</p>
    </div>
);