import React from 'react'
import './CustomBtn.scss'

type PropsType = {
    title: string
    link: string
}

export const CustomBtn: React.FC<PropsType> = ({title, link}) => (
    <>
        {link ? <a className='custom-link' download href={link}>
            <button className='custom-button'>{title}</button>
        </a> : <button className='custom-button'>{title}</button>}
    </>
);