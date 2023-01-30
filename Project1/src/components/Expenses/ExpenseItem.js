import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
const [title, setTitle] = useState(props.title);

const clickHandler = () =>{
  //console.log('Clicked!');
  setTitle('update');
  console.log(title);
};

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}></button>
    </Card>
  );
}

export default ExpenseItem;
