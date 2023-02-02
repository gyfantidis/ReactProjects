import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const myExpenses = [
  { id:'a1', title: "Super Market", amount: 150.33, date: new Date(2020, 1, 1) },
  { id:'a2', title: "Fuel oil", amount: 80, date: new Date(2020, 11, 22) },
  { id:'a3', title: "Drinks", amount: 30.33, date: new Date(2022, 10, 22) },
  { id:'a4', title: "Cigarettes", amount: 12.3, date: new Date(2023, 5, 2) },
  { id:'a5', title: "Coffee", amount: 2.3, date: new Date(2023, 1, 2) },
  { id:'a6', title: "Transportation", amount: 2.3, date: new Date(2020, 5, 2) },
  { id:'a7', title: "Food", amount: 11.2, date: new Date(2020, 4, 2) },
  { id:'a8', title: "Pet Food", amount: 20, date: new Date(2020, 4, 22) }
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
