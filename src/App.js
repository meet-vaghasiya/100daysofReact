import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";
import ExpenseList from "./components/Expense/ExpenseList";

const DEFUALT_DATA = [
  {
    enterTitle: "First expense",
    date: new Date(),
    amount: 522,
    id: 1,
  },
  {
    enterTitle: "second expense",
    date: new Date(2020, 10),
    amount: 422,
    id: 2,
  },
  {
    enterTitle: "third expense",
    date: new Date(2018, 12),
    amount: 65,
    id: 3,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DEFUALT_DATA);
  const [filterArr, setFilterArr] = useState(DEFUALT_DATA);

  const handleSubmit = (formData) => {
    const data = { ...formData, id: Math.random().toString() };
    console.log(data, "test dat");
    setExpenses((prevState) => [data, ...prevState]);
  };
  const handleChange = (e) => {
    console.log(e.target.value, "change");
    setFilterArr((arr) => {
      return expenses.filter((element) => {
        return (
          element.date.getFullYear() === +e.target.value ||
          e.target.value === "All"
        );
      });
    });
  };

  return (
    <div className="App">
      <NewExpense handleSubmit={handleSubmit} />
      <div className="main-container">
        <div className="header">
          <p>filter Items:</p>
          <select onChange={handleChange}>
            <option value={null}>All</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
        <ExpenseList expenses={filterArr} />
      </div>
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement(ExpenseItem, {
  //     enterTitle: expenses[0].enterTitle,
  //     date: expenses[0].date,
  //     amount: expenses[0].amount,
  //   }),
  //   React.createElement(ExpenseItem, {
  //     enterTitle: expenses[1].enterTitle,
  //     date: expenses[1].date,
  //     amount: expenses[1].amount,
  //   })
  // );
}

export default App;
