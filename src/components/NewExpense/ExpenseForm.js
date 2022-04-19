import React, { useState } from "react";

import "./ExpenseForm.css";
// import NewExpense from "./NewExpense";
function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {

    setEnteredTitle(event.target.value);
    //event.target.value will return key
  //   setUserInput({
  //     ...userInput,

  //     enteredTitle: event.target.value,
  //        enteredAmount: "",
  //       enteredDate: "",
  //   });
  // };

  // 2nd approach
  // setUserInput((prevState) => {
  //   return {...prevState, enteredTitle: event.target.value};
  // });
  };


  const amountChangeHandler = (event) => {

    setEnteredAmount(event.target.value);
  //   setUserInput({
  //       ...userInput,
  
  //       enteredAmount: event.target.value,
  //          enteredAmount: "",
  //          enteredDate: "",
  //     });
  // };

  // If you are dependent on previous state do like this

  // setUserInput((prevState) => {
  //   return {...prevState, enteredAmount: event.target.value};
  // });
  };

  const dateChangeHandler = (event) => {

    setEnteredDate(event.target.value);

    // -------------> 1st approach
  //   setUserInput({
  //       ...userInput,
  
  //       enteredDate: event.target.value,
  //          enteredAmount: "",
  //          enteredDate: "",
  //     });
  // };


  // 2nd approach
  // setUserInput((prevState) => {
  //   return {...prevState, enteredDate: event.target.value};
  // });
  };

    const submitHandler = (event) => {
      event.preventDefault();

      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
      };
      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');

    };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>cancel</button>
        <button type="submit" onClick={props.onCancel}>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
