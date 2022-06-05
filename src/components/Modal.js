import React from 'react'
import Backdrop from './Backdrop'

function Modal({children, toggleModal, closeModal}) {
    
    return (
        <div>
            <Backdrop toggleModal={toggleModal} closeModal={closeModal}/>
            <div className={toggleModal ? 'modal show' : 'modal hide'} style={{ backgroundColor: 'rgb(0 0 0 / 50%)',boxShadow: '0 1.5rem 4rem rgb(23 24 24 / 15%)'}}>
                {children}
            </div>
        </div>
    )
}

export default Modal