import React, {useState} from 'react'
import './todo.css'
import TodoCard from './TodoCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoList = () => {
  const [newInput, setnewInput] = useState('');
  const [items, setItems] = useState([]);
  // const [expand, setexpand] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(newInput);

     if (newInput.length!==0 ) { 
      setItems((oldItems) => {
        return [...oldItems, newInput]
      })
      setnewInput('');
    } 
    else{
      toast.warning('Please enter a valid data');
    }
  }
  
  const deleteBtn = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, Index) => {
        return Index !== id;
      })
    })
  }
  return (
    <>
      <div className="main">
      <ToastContainer />
        <div className="header">List To Do  <span data-bs-toggle="modal" data-bs-target="#todoModal" className="fas fa-plus"></span> </div>
        {items.map( (ival, id)  => {
          return ( <TodoCard key={id} newData={ival} IDd={id} deleteBtn={deleteBtn} />)
        })}
        
        {/* <>
        {
        expand ?
          <>
           example to show hide on click
           data or an element to show or hide
          </> : null
      }
      <p onClick={() => { setexpand(true)}}> new element</p>

      </> */}

      </div>
      <div className="modal fade" id="todoModal" aria-labelledby="todoModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Task</h5>
              <button type="button" className="fas fa-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler}>
                <input type="text" value={newInput} onChange={(e)=>{setnewInput(e.target.value)}} />
                <button type="submit" data-bs-dismiss="modal" className="submiTbTnTodo">Add Task</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoList