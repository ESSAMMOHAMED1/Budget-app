import React from 'react'

const TransHeader = () => {
  return (
    <div className="trans_header">

      <h3 className="trans_header-title">
        Recent Transactions
      </h3>
      <div className="trans_header-filters">

        <select className="filters-select" name="keys" >
          <option value=""> Sort By </option>
        </select>

        <select className="filters-select" name="category" >
          <option value=""> Categories </option>
        </select>

        <select className="filters-select" name="type" >
          <option value=""> All </option>
        </select>


      </div>
    </div>
  )
}

export default TransHeader