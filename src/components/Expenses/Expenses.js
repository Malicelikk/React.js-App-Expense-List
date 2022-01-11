import { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

//function Expenses(props) {
const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020'); // ilk değer filteredYear=2020

    const filterChangeHandler = selectedYear => {  // seçilen değeri selectedYear parametresi ile alıyo
        setFilteredYear(selectedYear);     // setFilteredYear ile state i güncelliyo
    };

    const filteredExpenses = props.items.filter(expense => { // returns new array
        return expense.date.getFullYear().toString() === filteredYear; // objelerdeki tarih filteredYear a eşit ise
    });


    return (
        <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesList items={filteredExpenses}/>
        </Card>
        </div>
    )
}

export default Expenses;