import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");


  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenseArray.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYear={selectYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenseArray={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
