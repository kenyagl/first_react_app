import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  // let filterInfoText = "2019, 2021, 2022 & 2023";

  // if (selectedYear === "2019") {f
  //        filterInfoText = '2020, 2021, 2022 & 2023';
  //      } else if (selectedYear === "2020") {
  //       filterInfoText = '2019, 2021, 2022 & 2023';
  //      } else if (selectedYear === "2021") {
  //       filterInfoText = '2019, 2020, 2022 & 2023';
  //      } else if (selectedYear === "2022") {
  //       filterInfoText = '2019, 2020, 2021 & 2023';
  //      } else {
  //       filterInfoText = '2019, 2020, 2021 & 2022';
  //      }

  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSelectYear={selectYearHandler} />
        {/* <p>Data for years {filterInfoText} is hidden </p> */}
        {props.expenseArray.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </Card>
    </div>
  );
};

export default ExpenseList;
