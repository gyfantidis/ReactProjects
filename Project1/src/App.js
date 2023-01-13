import React from "react";
import Expenses from "./components/Expenses/Expenses";


const App = () => {
  const expenses = [
    { title: "Car Insuranse", amount: 3000.33, date: new Date(2022, 12, 22) },
    { title: "Car Insuranse2", amount: 31000.33, date: new Date(2022, 11, 22) },
    { title: "Car Insurans3", amount: 30.33, date: new Date(2022, 10, 22) },
  ];

  return (
    <div>
      <Expenses items={expenses}></Expenses>   
      
    </div>
  );
}

export default App;
