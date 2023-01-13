import React from "react";
import Expenses from "./components/Expenses/Expenses";


const App = () => {
  const expenses = [
    { title: "Car Insuranse", amount: 3000.33, date: new Date(2023, 1, 1) },
    { title: "Car Insuranse2", amount: 31000.33, date: new Date(2022, 11, 22) },
    { title: "Car Insurans3", amount: 30.33, date: new Date(2022, 10, 22) },
    { title: "Car Insurans4", amount: 12.3, date: new Date(2021, 5, 2) }
  ];

  return (
    <div>
      <Expenses items={expenses}></Expenses>   
      
    </div>
  );
}

export default App;
