import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import './maincontent.css'
function Button() {
    return (
        <div className="butt" style={{ marginTop: '40px' }}>
            <button className="btn btn-light " style={{ width: '100px' }}><FontAwesomeIcon icon={faPlay} /></button>
            <button className="btn btn-secondary " style={{ height: '40px', width: '140px', marginLeft: '20px' }}><FontAwesomeIcon icon={faPlus} /><span style={{ marginLeft: '15px', fontSize: '1.1rem' }}>My List</span></button>
        </div>
    )
}

export default Button