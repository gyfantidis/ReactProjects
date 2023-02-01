import React, { useState } from "react";

import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

import "./Expenses.css";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filerChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filerChangeHandler}
      ></ExpensesFilter>

      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
