import React from 'react';

import ExpenseItem from './ExpenseItem';
import './expensesList.css';

const ExpensesList = (props) => {
    // Useful approach if your component changes entirely, based on certain conditions.
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }

    return (
        <ul className="expenses-list">
            {props.items.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    )
};

export default ExpensesList;
