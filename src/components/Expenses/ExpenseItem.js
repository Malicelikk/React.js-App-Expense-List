import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

//function ExpenseItem(props) {
const ExpenseItem = (props) => {

    /*const [title, setTitle] = useState(props.title); //useState 2 li bir array barındırıyo 1.si ilk değer 2.si yeni değer

    const clickHandler = () => {
       setTitle('Updated!');
    };*/

    return (
        <li>
            <Card className="expense-item">
               <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
        );
}

export default ExpenseItem;