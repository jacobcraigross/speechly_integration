import React, {useContext} from 'react';
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core'; 

          
import {Delete, MoneyOff} from '@material-ui/icons';
import useStyles from './styles';
import { ExpenseTrackerContext } from '../../../context/context';


const List = () => {
    const classes = useStyles();
    const {deleteTransaction} = useContext(ExpenseTrackerContext);
    const transactions = [
        { id: 1, type: "Income", category: "Salary", amount: 725, date: "wed dec 16th" },
        { id: 2, type: "Expense", category: "Kids", amount: 200, date: "fri dec 18th" },
        { id: 3, type: "Income", category: "Side cash", amount: 3322, date: "sat dec 19th" },
        { id: 4, type: "Expense", category: "Food", amount: 48, date: "sun dec 20th" },
        { id: 5, type: "Income", category: "Bonus", amount: 1122, date: "mon dec 21th" }
    ];

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick="">
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List
