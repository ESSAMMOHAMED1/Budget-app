import React from 'react'
import "./BudgetContent.css"
import { Tabs , Tab } from '../../ui'
import Transactions from './transactions/Transactions'
import axiosApi from '../../../services/api/axiosApi'
const BudgetContent = () => {
  axiosApi.get("/transactions").then(res=>{
    console.log(res);
  })
  return (
    <div className="budget_content">
    <div className="container">
      <Tabs>
        <Tab title="data">
          <Transactions/>
        </Tab>
        <Tab title="income">
        content2
        </Tab>
        <Tab title="expanses">
        content3
        </Tab>
      </Tabs>
    </div>
  </div>
  )
}

export default BudgetContent