import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const myExpenses = [
  { title: "Car Insuranse", amount: 3000.33, date: new Date(2023, 1, 1) },
  { title: "Car Insuranse2", amount: 31000.33, date: new Date(2022, 11, 22) },
  { title: "Car Insurans3", amount: 30.33, date: new Date(2022, 10, 22) },
  { title: "Car Insurans4", amount: 12.3, date: new Date(2021, 5, 2) }
];


const App = () => {
  const [expenses, setExpenses] = useState(myExpenses);
  

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>   
      
    </div>
  );
}

export default App;
