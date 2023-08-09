import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isWritingForm, setIsWritingForm] = useState(false);

  const closeForm = () => {
    setIsWritingForm(false);
  }

  const openForm = () => {
    setIsWritingForm(true);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsWritingForm(false);
  };

  return (
    <div className="new-expense">
      {isWritingForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClickCancel={closeForm}
        />
      ) : (
        <button onClick={openForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
