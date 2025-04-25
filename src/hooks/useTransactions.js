import { useState, useEffect } from 'react'

const STORAGE_KEY = 'transactions'

const useTransactions = () => {
  // 1. 로컬스토리지에서 초기값 로드
  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  })

  // 2. 추가
  const addList = transaction => {
    setTransactions(prev => [transaction, ...prev])
  }

  // 3. 삭제
  const deleteList = id => {
    setTransactions(prev => prev.filter(tx => tx.id !== id))
  }

  // 4. 상태가 바뀔 때 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
  }, [transactions])

  return {
    transactions,
    addList,
    deleteList,
  }
}

export default useTransactions
