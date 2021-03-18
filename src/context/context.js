import React, {useReducer, createContext} from 'react';
import contextReducer from './contextReducer';

const initialState = [];
export const ExpenseTrackerContext = createContext(initialState);
// 1:13:53 video ----------
export const Provider = ({children}) => {

    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    // action creators (you can put on one line and eliminate extra curly braces as well)
    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    console.log(transactions);
    
    // ES6 if prop has same key and value no need for { key: value, key2: value2} we can just do { key, key2 }
    return (
        <ExpenseTrackerContext.Provider value={{deleteTransaction, addTransaction}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

