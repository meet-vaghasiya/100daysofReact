import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  const [enterTitle, setTitle] = useState(props.enterTitle);

  const handleClidk = () => {
    setTitle("updated title");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-title">{enterTitle}</div>
      <div className="expense-amount">${props.amount}</div>
      <button onClick={handleClidk}>Click me</button>
    </Card>
  );
}

export default ExpenseItem;
