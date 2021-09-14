import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const addExpenseHandler = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onAddExpense={addExpenseHandler}/>
        </div>
    )
}

export default NewExpense;