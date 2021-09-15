import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [inputTitle, setInputTitle] = useState("");
    const [inputAmount, setInputAmount] = useState("");
    const [inputDate, setInputDate] = useState("2021-09-15");

    // Using useState in one statement using object
    // const [input, setInput] = useState({
    //     inputTitle: "",
    //     inputAmount: "0",
    //     inputDate: "2021-09-14"
    // })

    const titleChangeHandler = (event) => {
        setInputTitle(event.target.value)

        // useState function using safe copy.
        // setInput((prevState) => {
        //     return {
        //         ...prevState,
        //         inputTitle: event.target.value
        //     };
        // });
    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
        // setInput((prevState) => {
        //     return {
        //         ...prevState,
        //         inputAmount: event.target.value
        //     };
        // });
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
        // setInput((prevState) => {
        //     return {
        //         ...prevState,
        //         inputDate: event.target.value
        //     };
        // });
    };
    
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: inputTitle,
            amount: +inputAmount,
            date: new Date(inputDate)
        }
        props.onAddExpense(expenseData);
        setInputTitle("");
        setInputAmount(0);
        setInputDate("2021-09-14");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={inputTitle}
                    onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={inputAmount} min="0.01"
                    step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={inputDate} min="2019-01-01"
                    max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;