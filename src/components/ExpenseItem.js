import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <h2>{props.expense.title}</h2>
      <div className="expense_item__description">
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
