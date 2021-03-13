import React, {useReducer, createContext} from 'react';
import contextReducer from './contextReducer';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);
export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);
    // action creators 
    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    }
    return (
        <ExpenseTrackerContext.Provider value={{appName: 'Expense Tracker'}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
