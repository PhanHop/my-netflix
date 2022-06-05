import React from 'react'
import Video from '../statics/image/video.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import './maincontent.css'
import Button from './Button'
function Header({ movies }) {
    return (

        <div style={{ width: '100%',position:'relative' }}>
            <video src={Video} loop autoPlay muted style={{ width: '100%', objectFit: 'cover'}} >
            </video>
            <div className='headerContent'>
                <h1 style={{ fontSize: '3.4rem', color: '#fff' }}>{movies.name}</h1>
                <p style={{ fontSize: '1.3rem', color: '#fff', width: '80%', marginTop: '60px' }}>{movies.overview}</p>
                <Button />
            </div>
            <div className="header-fade"></div>
        </div>
    )

}

export default Header