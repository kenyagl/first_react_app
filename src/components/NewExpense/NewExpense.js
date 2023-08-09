import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [writingForm, setWritingForm] = useState(false);

  // const isFormOpenHandler = (clickedCancelOrSubmit) => {
  //   setWritingForm(clickedCancelOrSubmit);
  // };

  const closeForm = () => {
    setWritingForm(false);
  }

  const openForm = () => {
    setWritingForm(true);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    closeForm();
  };

  return (
    <div className="new-expense">
      {writingForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClickCancel={closeForm}
        />
      ) : (
        <button onClick={openForm}>Add Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
