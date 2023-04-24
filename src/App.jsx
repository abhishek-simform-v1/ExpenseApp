import { useState } from "react";
import "./App.css";
import ExpanseDisplay from "./components/Expenses/ExpenseDisplay";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "Toilet Paper",
  //     amount: 94.12,
  //     date: new Date(),
  //   },
  //   {
  //     id: "e2",
  //     title: "New TV",
  //     amount: 799.49,
  //     date: new Date(),
  //   },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     amount: 294.67,

  //     date: new Date(),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     amount: 450,
  //     date: new Date(),
  //   },
  // ];
  const [getdata, setGetdata] = useState([]);
  const getNewData = (newElement) => {
    setGetdata(newElement);
  };
  console.log(getdata);
  return (
    <div className="App">
      <NewExpense getNewData={getNewData} />
      <ExpanseDisplay data={getdata} />
    </div>
  );
}

export default App;
