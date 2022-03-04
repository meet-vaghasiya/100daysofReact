import "./ExpenseItems.css";

function ExpenseItem() {
  const expenseDate = new Date();
  const expenseTitle = "cat insurance";
  const expenseAmout = 294.67;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div>Title</div>
      <div>${expenseAmout}</div>
    </div>
  );
}

export default ExpenseItem;
