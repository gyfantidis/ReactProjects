import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insuranse", amount: 3000.33, date: new Date(2022, 12, 22) },
    { title: "Car Insuranse2", amount: 31000.33, date: new Date(2022, 11, 22) },
    { title: "Car Insurans3", amount: 30.33, date: new Date(2022, 10, 22) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      
    </div>
  );
}

export default App;
