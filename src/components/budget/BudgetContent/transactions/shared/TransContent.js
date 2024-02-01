import React, { useContext } from 'react';
import { transactionsContext } from '../../../../../services/context/budget/transactionsContext';
import SingleTrans from './SingleTrans';

const TransContent = () => {
  const {
    data: transactions,
    loading,
    error,
  } = useContext(transactionsContext);

  return (
    <div className="trans_content">
      {transactions.map((transaction) => (
        <SingleTrans transaction={transaction} key={transaction.id} />
      ))}

      <p className="no-data"> No data </p>
      {loading && <p> loading ... </p>}
      {error && <p> {error} </p>}
    </div>
  );
};

export default TransContent;
