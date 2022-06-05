import React from 'react'

function Backdrop({ toggleModal, closeModal }) {
    return(
        toggleModal?<div className = 'backDrop' onClick = { closeModal }></div>: null
    )
}

export default Backdrop