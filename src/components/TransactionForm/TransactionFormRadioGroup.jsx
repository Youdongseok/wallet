import React from 'react'
import css from './TransactionForm.module.css'

const TransactionFormRadioGroup = ({ selected, onChange }) => {
  return (
    <div>
      <input
        type="radio"
        id="income"
        name="type"
        value="income"
        checked={selected === 'income'}
        onChange={onChange}
        className={css.radioInput}
      />
      <label htmlFor="income">수입</label>

      <input
        type="radio"
        id="expense"
        name="type"
        value="expense"
        checked={selected === 'expense'}
        onChange={onChange}
        className={css.radioInput}
      />
      <label htmlFor="expense">지출</label>
    </div>
  )
}

export default TransactionFormRadioGroup
