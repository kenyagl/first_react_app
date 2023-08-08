import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";
import ExpensesFilter from "./ExpensesFilter";

const ExpenseList = (props) => {
  
  const selectYearHandler = (selectedYear) => {
    console.log(selectedYear);
  };
  
  return (
    <div>
      <ExpensesFilter onSelectYear={selectYearHandler} />
      <Card className="expenses">
        {props.expenseArray.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </Card>
    </div>
  );
};

export default ExpenseList;
