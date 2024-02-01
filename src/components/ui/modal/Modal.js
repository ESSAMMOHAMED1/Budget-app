import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({ visible, children}) => {

  if (!visible) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        {children}
      </div>
    </div>,
    document.querySelector('#modal-root')
  )
}

export default Modal