import React from 'react'

import SingleTrans from "./SingleTrans"

const TransContent = () => {
  return (
    <div className="trans_content">

      <SingleTrans />
      <SingleTrans />
      <SingleTrans />
      <SingleTrans />


      <p className="no-data"> No data </p>
      <p> loading ... </p>
      <p> error  </p>
    </div>
  )
}

export default TransContent