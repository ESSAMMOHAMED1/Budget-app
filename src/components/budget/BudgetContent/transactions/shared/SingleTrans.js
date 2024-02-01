import React, { useContext } from 'react';

import { CurrencyDollar, PencilLine, Trash } from 'phosphor-react';
import { Button } from '../../../../ui';
import { transactionsContext } from '../../../../../services/context/budget/transactionsContext';

const SingleTrans = ({ transaction }) => {
  const { handleDelete } = useContext(transactionsContext);

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
        <Button type="error" icon onClick={() => handleDelete(transaction.id)}>
          <Trash />
        </Button>
      </div>
    </div>
  );
};

export default SingleTrans;
