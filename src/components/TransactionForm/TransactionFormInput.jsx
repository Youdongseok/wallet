import React from 'react'
import css from './TransactionForm.module.css'

const TransactionFormInput = ({ label, id, type, placeholder, value, onChange }) => {
  return (
    <>
      <label className={css.label} htmlFor={id}>
        {label ? label : ''}
      </label>
      <input
        className={css.input}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  )
}
export default TransactionFormInput
