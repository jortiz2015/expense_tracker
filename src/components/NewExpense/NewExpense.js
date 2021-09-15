import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const addExpenseHandler = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
        {!isEditing && (
            <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {isEditing && (
            <ExpenseForm onAddExpense={addExpenseHandler} onCancel={stopEditingHandler}/>
        )}
        </div>
    )
}

export default NewExpense;