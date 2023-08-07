import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./ExpenseList.css";

function ExpenseList(props) {
  return (
    <Card className="expenses">
      {props.expenseArray.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </Card>
  );
}

export default ExpenseList;
