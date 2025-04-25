import React from 'react'
import Header from './components/Header'
import Count from './components/Count'
import TransactionForm from './components/TransactionForm/TransactionForm'
import TransactionList from './components/TransactionList'
import useTransactions from './hooks/useTransactions'
import './App.css'
const App = () => {
  const { transactions, addList, deleteList } = useTransactions()
  return (
    <div className="wrap">
      <div className="container">
        <Header />
        <Count transactions={transactions} />
        <div className="main">
          <TransactionForm addList={addList} />
          <TransactionList transactions={transactions} deleteList={deleteList} />
        </div>
      </div>
    </div>
  )
}

export default App
