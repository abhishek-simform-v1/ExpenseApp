import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ passExpenseData }) => {
  const [data, setData] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "yyyy-MM-dd",
  });

  const titleChangeHandler = (e) => {
    let changedTitle = e.currentTarget.value;
    setData((prevData) => ({
      ...prevData,
      enteredTitle: changedTitle,
    }));
  };
  const amountChangeHandler = (e) => {
    let changedAmount = e.currentTarget.value;
    setData((prevData) => ({
      ...prevData,
      enteredAmount: changedAmount,
    }));
  };
  const dateChangeHandler = (e) => {
    let changedDate = e.currentTarget.value;
    setData((prevData) => ({
      ...prevData,
      enteredDate: changedDate,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: data.enteredTitle,
      amount: data.enteredAmount,
      date: new Date(data.enteredDate),
      id: Math.trunc(Math.random() * 100000),
    };
    setData({ enteredTitle: "", enteredAmount: "", enteredDate: "yyyy-MM-dd" });
    passExpenseData(expenseData);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={data.enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={data.enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              step="2022-12-31"
              onChange={dateChangeHandler}
              value={data.enteredDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};
export default ExpenseForm;
