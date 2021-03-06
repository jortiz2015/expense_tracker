import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    const expenseList = props.expenses.map(expense =>
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount}
            date={expense.date}></ExpenseItem>
    );

    let expenseContent = <h2 className="expenses-list__fallback">No expenses found.</h2>
    if (props.expenses.length !== 0)
        expenseContent = expenseList;

    return (
        <ul className="expenses-list">
            {expenseContent}
        </ul>
    );
}

export default ExpensesList;