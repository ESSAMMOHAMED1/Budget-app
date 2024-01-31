import React from 'react'
import "./BudgetContent.css"
import { Tabs , Tab } from '../../ui'
const BudgetContent = () => {
  return (
    <div className="budget_content">
    <div className="container">
      <Tabs>
        <Tab title="data">
          content1
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