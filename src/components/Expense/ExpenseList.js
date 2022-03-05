import ExpenseItem from "./ExpenseItems";

const ExpenseList = (props) => {
  const hasExpenses = props.expenses.length;
  let expenseeContent = <p>No content found.</p>;

  if (hasExpenses) {
    expenseeContent = props.expenses.map((expense) => (
      <ExpenseItem
        enterTitle={expense.enterTitle}
        date={expense.date}
        amount={expense.amount}
        key={expense.id}
      />
    ));
  }
  return expenseeContent;
};

export default ExpenseList;
