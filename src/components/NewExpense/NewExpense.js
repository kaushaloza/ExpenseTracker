//run form where user enter
import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const [isEditing, setIsediting] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    const startEditingHandler = () => {
        setIsediting(true);
    }
    const cancelButton = () => {
        setIsediting(false);
    }
    return (<div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelButton}/>}
    </div>);
};

export default NewExpense;