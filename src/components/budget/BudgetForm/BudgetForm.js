import { Button } from '../../ui' 
import React, { useContext } from 'react'
import './BudgetForm.css'
import { categoriesContext } from '../../../services/context/budget/categoriesContext'

const BudgetForm = () => {
  const { data: categories, loading: catLoading } = useContext(categoriesContext)

  return (
    <div className="new-budget">
      <h2> Add new Budget</h2>

      <form className="form">

        <div className="form-group">
          <label htmlFor="title" > Title</label>
          <input
            type='text'
            id="title"
            name="title"
            className="error"
            placeholder='title...'
          />
          <p className="error"> errors </p>
        </div>

        <div className="form-group">
          <label htmlFor="amount" > Amount</label>
          <input
            type='number'
            id="amount"
            name="amount"
            className=""
            placeholder='amount...'
          />
          <p className="error"> errors </p>
        </div>

        <div className="form-row">

          <div className="form-group">
            <label htmlFor="type" > Amount</label>
            <select
              id="type"
              name="type"
              className=""
              placeholder='type...'
            >
              <option value='income'> Income </option>
              <option value='expanse'> Expanse </option>
            </select>
            <p className="error"> errors </p>
          </div>

          {catLoading ? <p> loading</p> : (
            <div className="form-group">
              <label htmlFor="category" > Category</label>
              <select
                id="category"
                name="category"
                className=""
                placeholder='category...'
              >
                <option value=''> Select Category </option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}> {cat.name} </option>
                ))

                }
              </select>
              <p className="error"> errors </p>
            </div>
          )}

        </div>

        <div className="form-group">
          <label htmlFor="date" > Date</label>
          <input
            type='date'
            id="date"
            name="date"
            className=""
            placeholder='date...'
          />
          <p className="error"> errors </p>
        </div>

        <Button size="large" block >
          Save
        </Button>

      </form>
    </div>
  )
}

export default BudgetForm