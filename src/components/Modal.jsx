// Modal.jsx
import React from 'react'
import css from './Modal.module.css'

const Modal = ({ message, yes, no }) => {
  return (
    <div className={css.modalBackground}>
      <div className={css.modalContent}>
        <p>{message}</p>
        <div className={css.buttons}>
          <button className={css.yesBtn} onClick={yes}>
            네
          </button>
          <button className={css.noBtn} onClick={no}>
            아니오
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
