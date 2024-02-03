import React from 'react'
import './Transactions.css'

import TransHeader from "../transactions/shared/TransHeader"
import TransContent from "../transactions/shared/TransContent"

const Transactions = () => {
  return (
    <section className="trans">
      <TransHeader />
      <TransContent />
    </section>
  )
}

export default Transactions