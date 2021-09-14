import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {

  const expenseList = props.expenses.map(expense => 
    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount}
    date={expense.date}></ExpenseItem>
  );

    return (
        <Card className="expenses">
            {expenseList}
        </Card>
    );
}

export default Expenses;
