import React,{useContext} from 'react'
import ExpenseCard from '../assets/Common/ExpenseCard';
import '../assets/styles/Expense.css';
// import ExpenseData from '../assets/basic/ExpenseApi';
import AddExpenseForm from '../assets/Common/AddExpenseForm';
import ExpenseNavigator from '../assets/Common/ExpenseNavigator';
import context from '../Context/Context';

const ExpenseChart = () => {
    const Context = useContext(context)
    // console.log(Context.newdata);

    return (
        <div className='Main'>
            <ExpenseNavigator />

            {Context.newdata.map(function (val) {
                return (
                    <ExpenseCard key={val.id}
                        Date={val.Date}
                        Month={val.Month}
                        Year={val.Year}
                        title={val.title}
                        price={val.price}
                        Description={val.Description}
                    />
                )
            })}

            <div className="modal fade" id="AddExpenseBox" aria-labelledby="AddExpenseBox" aria-hidden="true">
                <div className="modal-dialog">
                    <AddExpenseForm />
                </div>
            </div>
        </div>
    )
}

export default ExpenseChart
