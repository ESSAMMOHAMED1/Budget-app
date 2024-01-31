import React from 'react'

import { CurrencyDollar, PencilLine, Trash } from 'phosphor-react'
import { Button } from '../../../../ui'

const SingleTrans = () => {
  return (
    <div className="trans_item">

      <div className="trans_item-icon">
        <CurrencyDollar />
      </div>
      <div className="trans_item-data">
        <h4> title </h4>
        <div>
          <small> $1000 </small>,
          <small>date</small>,
          <small> category</small>
        </div>

      </div>
      <div className="trans_item-cta">

        <Button icon>
          <PencilLine />
        </Button>
        <Button type="error" icon>
          <Trash />
        </Button>
      </div>
    </div>
  )
}

export default SingleTrans