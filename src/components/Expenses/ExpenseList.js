import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  return (
    <Card className="expenses">
      {props.expenseArray.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </Card>
  );
}

export default ExpenseList;
