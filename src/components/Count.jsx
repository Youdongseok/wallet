import React from 'react'
import css from './Count.module.css'

const Count = ({ transactions }) => {
  const income = transactions
    .filter(tx => tx.type === 'income')
    .reduce((sum, tx) => sum + tx.amount, 0)

  const expense = transactions
    .filter(tx => tx.type === 'expense')
    .reduce((sum, tx) => sum + tx.amount, 0)

  const balance = income - expense

  return (
    <div className={css.countBox}>
      <div className={css.total}>잔액: ₩{balance.toLocaleString()}</div>
      <div className={css.plmi}>
        <div className={css.plus}>
          수입 <p>₩{income.toLocaleString()}</p>
        </div>
        <div className={css.minus}>
          지출 <p>₩{expense.toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}

export default Count
