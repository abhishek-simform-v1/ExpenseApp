import React from "react";
import "./ExpenseDisplay.css";
import ExpenseItem from "./ExpenseItem";
const ExpanseDisplay = (props) => {
  const expenseData = props.data;
  return (
    <div className="expenses">
      {expenseData.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} />;
      })}
    </div>
  );
};

export default ExpanseDisplay;
