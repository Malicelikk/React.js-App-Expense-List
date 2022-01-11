import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {  // NewExpense component ExpenseForm componentini render ediyor

    const [isEditing, setIsEditing] = useState(false); // isEditing state ini tutuyor ilk değeri false

    const saveExpenseDataHandler = (enteredExpenseData) => {  // expenseData objesini parametre olarak alır
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData); // props.onAddExpense e expenseData objesini gönderiyor
        setIsEditing(false); // kaydettikten sonra formu kapat
    };

    const startEditingHandler = () => {
        setIsEditing(true); // state in değerini true yapıyor
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    
    return ( // onSaveExpenseData props ile function pass ediyoruz
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}  
        </div>
    )
};

export default NewExpense;