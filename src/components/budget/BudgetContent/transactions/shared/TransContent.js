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
      {!loading && transactions && transactions.length && !error ? (
        <>
          {transactions.map((transaction) => (
            <SingleTrans transaction={transaction} key={transaction.id} />
          ))}
        </>
      ):(<></>)}

      {loading && <p className="loading">loading ...</p>}
      
      {error && !loading && <p className='error'>{error}</p>}

      
      {!loading && transactions && !transactions.length && !error && (
        
        <p className="no-data"> No data </p>
          
      )}
    </div>
  );
};

export default TransContent;
