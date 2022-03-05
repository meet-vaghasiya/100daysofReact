import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [amout, setAmout] = useState("");
  const [date, setDate] = useState(new Date());

  const defaultFormData = () => {
    return {
      enterTitle: "",
      amount: "",
      date: "",
    };
  };

  const [formData, setFormData] = useState(defaultFormData);

  //   const titleChangeHandler = (e) => {
  //     setFormData({
  //       ...formData,
  //       enterTitle: e.target.value,
  //     });
  //   };

  const titleChangeHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, enterTitle: e.target.value };
    });
  };

  const amountChangeHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, date: new Date(e.target.value) };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData, "form date");
    props.handleSubmit(formData);
    setFormData(defaultFormData);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form-control">
        <label className="form-label"> Title</label>
        <input
          className="form-input"
          type="text"
          value={formData.enterTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div className="form-control">
        <label className="form-label"> price</label>
        <input
          className="form-input"
          type="number"
          min="0.01"
          step="0.01"
          value={formData.amount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="form-control">
        <label className="form-label"> Date</label>

        <input
          className="form-input"
          type="date"
          min="2019-01-01"
          max="2021-01-01"
          value={formData.date}
          onChange={dateChangeHandler}
        />
      </div>
      <button className="form-btn">Add expense</button>
    </form>
  );
};

export default ExpenseForm;
