import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const expenseList = props.expenses.map(expense => 
    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount}
    date={expense.date}></ExpenseItem>
  );

  const selectHandler = (selected) => {
    setSelectedYear(selected);
    console.log(selected);
  }

    return (
      <div>
        <ExpensesFilter selected={selectedYear} onSelect={selectHandler}/>
        <Card className="expenses">
            {expenseList}
        </Card>
      </div>
    );
}

export default Expenses;
