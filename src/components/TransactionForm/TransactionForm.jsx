import React, { useEffect, useState } from 'react'
import TransactionFormInput from './TransactionFormInput'
import TransactionFormRadioGroup from './TransactionFormRadioGroup'
import css from './TransactionForm.module.css'

const TransactionForm = ({ addList }) => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('income')

  const handleSubmit = e => {
    e.preventDefault()

    if (!description || !amount) {
      alert('내용을 입력해주세요!')
      return
    }
    if (!amount) {
      alert('금액을 입력해주세요!')
      return
    }

    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseInt(amount),
      type,
      date: new Date().toISOString().slice(0, 10),
    }

    addList(newTransaction)

    setDescription('')
    setAmount('')
    setType('income')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>새로운 거래 추가</h2>
      <TransactionFormInput
        label="텍스트"
        id="description"
        type="text"
        placeholder="내용 입력..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <TransactionFormRadioGroup
        selected={type}
        onChange={e => setType(e.target.value)}
        className={css.radio}
      />

      <TransactionFormInput
        id="amount"
        type="number"
        placeholder="금액 입력..."
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <button type="submit" className={css.addBtn}>
        거래 추가
      </button>
    </form>
  )
}

export default TransactionForm
