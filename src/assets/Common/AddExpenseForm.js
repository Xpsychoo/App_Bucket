import React, { useState,useContext } from 'react'
import ExpenseData from '../basic/ExpenseApi';
import context from '../../Context/Context';
function AddExpenseForm() {
const Context = useContext(context) 
const [EnteredTitle, setEnteredTitle] = useState('');
const [EnteredExp, setEnteredExp] = useState('');
const [EnteredDate, setEnteredDate] = useState('');
const [EnteredDescp, setEnteredDescp] = useState('');
    
    const TitleAdd = (event) => {
        setEnteredTitle(event.target.value);
    };
    const ExpAdd = (event) => {
        setEnteredExp(event.target.value);
    };
    const dateAdd = (event) => {
        setEnteredDate(event.target.value);
    }; 
    const descAdd = (event) => {
        setEnteredDescp(event.target.value);
    };
    let identity = 1;
    const submitHandler = (e) => {
        e.preventDefault();
        const NewExpende ={
                id: identity ++,
                Date: EnteredDate,
                title: EnteredTitle,
                Description: EnteredDescp,
                price: EnteredExp
        }
        Context.setnewdata([...Context.newdata,NewExpende])
        console.log(Context.newdata);
        setEnteredTitle('');
        setEnteredExp('');
        setEnteredDate('');
        setEnteredDescp('');
    };
   

  return (
    <div>
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="AddExpenseBox">AddExpenseBox</h5>
                <button type="button" className="fas fa-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
                <form onSubmit={submitHandler}>
                    <div className="AddExpenseForm">
                        <input type="text" value={EnteredTitle} onChange={TitleAdd} className='AddIPExp' placeholder='Add Title' />
                        <input type='number' value={EnteredExp} onChange={ExpAdd} className='AddIPExp' placeholder='Total Expenses' />
                        <input type='date' value={EnteredDate} onChange={dateAdd} min='2019-01-01' max='2022-12-31' className='AddIPExp' placeholder='Add Title' />
                        <input type='text' value={EnteredDescp} onChange={descAdd} className='AddIPExp' placeholder='Description' />
                    </div>
                <div>
                <button type='submit' data-bs-dismiss="modal" className="saveButton">Save changes</button>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddExpenseForm


// and here's another way to do same thing

/* const [userInput, setuserInput] = useState({
    EnteredTitle:'',
    EnteredExp:'',
    EnteredDate:'',
    EnteredDescp:''
});
const TitleAdd = (e) => {
    setuserInput({
        ...userInput,
        EnteredTitle : e.target.value,
    });
   
};
const ExpAdd = (e) => {
    setuserInput({
        ...userInput,
        EnteredExp : e.target.value,
    });
   
};
const dateAdd = (e) => {
    setuserInput({
        ...userInput,
        EnteredDate : e.target.value,
    });
   
};
const descAdd = (e) => {
    setuserInput({
        ...userInput,
        EnteredDescp : e.target.value,
    });
   
}; 

*/