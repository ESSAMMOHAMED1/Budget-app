import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useRef,
} from 'react';
import {
  deleteTransaction,
  getTransactions,
} from '../../api/transactions.api';

export const transactionsContext = createContext();

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const contextReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };

    case 'STOP_LOADING':
      return { ...state, loading: false };

    default:
      return state;
  }
};

export const TransactionsProvider = ({ children }) => {
  const [state, disptch] = useReducer(contextReducer, initialState);
  const isMount = useRef(false);

  const fetchData = useCallback(async () => {
    disptch({ type: 'FETCH_START' });
    try {
      const data = await getTransactions();
      disptch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      disptch({ type: 'FETCH_ERROR', payload: error.message });
    }
  }, []);

  const handleDelete = async (id) => {
    try {
      disptch({ type: 'FETCH_START' });
      await deleteTransaction(id);
      fetchData();
    } catch (error) {
      disptch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };

  useEffect(() => {
    if (!isMount.current) {
      fetchData();
      isMount.current = true;
    }
  }, [fetchData]);

  return (
    <transactionsContext.Provider value={{ ...state, handleDelete }}>
      {children}
    </transactionsContext.Provider>
  );
};
