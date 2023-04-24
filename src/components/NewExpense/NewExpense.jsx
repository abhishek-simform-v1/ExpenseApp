import React from "react";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({ getNewData }) => {
  const [expensedata, setExpenseData] = useState([]);
  const passExpenseData = (newElement) => {
    setExpenseData((prevData) => [...prevData, newElement]);
  };
  getNewData(expensedata);
  return (
    <div className="new-expense">
      <ExpenseForm passExpenseData={passExpenseData} />
    </div>
  );
};

export default NewExpense;
