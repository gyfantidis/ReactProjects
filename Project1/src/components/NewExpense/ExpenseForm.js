import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };


  return <form>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" value={enteredAmount} min="0.01" step="0.01"></input>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type='date' value={enteredDate} min="2019-01-01" max="2023-01-15"></input>
      </div>

    </div>
    <div className="new-expense__actions"></div>
    <button type='submit'>Add Expense</button>

  </form>
};

export default ExpenseForm;