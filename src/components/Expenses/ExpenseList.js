import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredArray = props.expenseArray.filter((expense) => expense.date.getFullYear() === parseInt(filteredYear));

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSelectYear={selectYearHandler} />
        {filteredArray.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </Card>
    </div>
  );
};

export default ExpenseList;
