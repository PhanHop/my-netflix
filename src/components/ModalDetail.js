import React from 'react'
import Button from './Button'
import './maincontent.css'
function ModalDetail({ movie:{
    name,
    vote_average,
    first_air_date,
    popularity,
    overview,
    vote_count
}, backGroundImage  }) {
    
    return (
        <div className='modal-container' style={{backgroundImage: `url(${backGroundImage})`, objectFit:'cover'}}>
            <div className="modal-container-detail">
                <h3 style={{padding: '20px 0', fontSize:'1.9rem'}}>{name}</h3>
                <p >Rating: <span style={{color: 'green', fontWeight: '500'}}>{vote_average}({vote_count})</span><span style={{marginLeft: '10px'}}>Populariity: <span style={{color: '#ffc107', fontWeight:'500'}}>{popularity}</span></span></p>
                <p>Relase Date: {first_air_date}</p>
                <p className='overview__movie'>{overview}</p>
                <Button />
            </div>
        </div>
    )
}

export default ModalDetail