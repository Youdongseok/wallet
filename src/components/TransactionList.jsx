import React, { useState } from 'react'
import css from './TransactionList.module.css'
import Modal from './Modal'

const TransactionList = ({ transactions, deleteList }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)

  const openModal = id => {
    setSelectedId(id)
    setModalOpen(true)
  }

  const modalYes = () => {
    deleteList(selectedId)
    setModalOpen(false)
  }

  const modalNo = () => {
    setSelectedId(null)
    setModalOpen(false)
  }

  return (
    <div>
      <h2>내역</h2>
      <div className={css.lists}>
        {/* tx는 transactions의 줄임말 */}
        {transactions.map(tx => (
          <div
            key={tx.id}
            className={`${css.list} ${tx.type === 'income' ? css.income : css.expense}`}
          >
            <div>{tx.description}</div>
            <div className={`${css.plmiColor} ${tx.type === 'income' ? css.income : css.expense}`}>
              <span>{tx.type === 'income' ? '+' : '-'}</span>₩{tx.amount.toLocaleString()}
            </div>
            <div className={css.deleteBtn} onClick={() => openModal(tx.id)}>
              x
            </div>
          </div>
        ))}
      </div>

      {modalOpen && <Modal message="정말 삭제하시겠습니까?" yes={modalYes} no={modalNo} />}
    </div>
  )
}

export default TransactionList
