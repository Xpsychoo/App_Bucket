import React, { useState } from 'react'
import '../styles/Expense.css'

function ExpenseCard(props) {
    const [title, setTitle] = useState(props.title);


    const editInfo = () => {
        setTitle('updated');
    }
    return (
       <>
        <div className="ExpenseCardItem" key={props.id} >
            <div className="moreOptions dropdown"><span title='Options'
                className="fas fa-ellipsis-vertical" id="EditExpenseCard" data-bs-toggle="dropdown"
                aria-expanded="false"></span>
                <ul className="dropdown-menu" aria-labelledby="EditExpenseCard">
                    <li><span onClick={editInfo} type='button' className="dropdown-item" >Edit</span></li>
                    <li><span type='button' className="dropdown-item" >Delete</span></li>
                </ul>
            </div>

            <div className="MonthDate">
                <div className="date">{props.Date}</div>
                <div className="Month">{props.Month}</div>
                <div className="Year">{props.Year}</div>
            </div>
            <div className="description">
                <div className="itemPrice">
                    {props.price}
                </div>
            </div>
                <div className="Card--Title">
                    {title}
                </div>          
            <div className="OtherSecc">
                <div className="descriptionText">
                    {props.Description}
                </div>
            </div>
        </div>
        </>



    )
}

export default ExpenseCard