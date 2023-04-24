import React, { useState } from "react";
import Card from "./../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  // console.log(expense);
  const { expense } = props;
  const { title, amount, date } = expense;
  const [newtitle, setNewTitle] = useState(title);

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{newtitle}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
