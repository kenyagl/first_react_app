import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card id={props.key} className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <h2>{props.expense.title}</h2>
      <div className="expense_item__description">
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
