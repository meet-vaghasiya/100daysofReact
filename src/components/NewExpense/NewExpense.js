import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const handleSubmit = (formData) => {
    props.handleSubmit(formData);
  };

  return (
    <div>
      <ExpenseForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default NewExpense;
