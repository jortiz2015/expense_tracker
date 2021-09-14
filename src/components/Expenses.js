import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

export default function Expenses(props) {

  const expenseList = props.expenses.map(expense => 
    <ExpenseItem title={expense.title} amount={expense.amount}
    date={expense.date}></ExpenseItem>
  );

    return (
        <Card className="expenses">
            {expenseList}
        </Card>
    );
}

