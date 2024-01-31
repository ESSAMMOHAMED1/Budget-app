import React from 'react';

import { CurrencyDollar, PencilLine, Trash } from 'phosphor-react';
import { Button } from '../../../../ui';

const SingleTrans = ({ transaction }) => {
  return (
    <div className="trans_item">
      <div
        className={`trans_item-icon ${transaction.type === 'expanse' ? 'error' : ''}`}
      >
        <CurrencyDollar />
      </div>
      <div className="trans_item-data">
        <h4> {transaction.title} </h4>
        <div>
          <small> ${transaction.amount} </small>,
          <small>{transaction.date}</small>,
          <small> {transaction.category}</small>
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
  );
};

export default SingleTrans;
