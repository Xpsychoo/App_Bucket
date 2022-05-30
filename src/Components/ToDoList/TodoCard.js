import React from 'react'

const TodoCard = (props) => {

  return (
    <>
      <div className="MainXcard card" key={props.IDd}>
        <h1 className="title">{props.newData}</h1>

        <div className="moreOption dropdown"><span title='Options'
          className="fas fa-ellipsis-vertical" id="EditExpenseCard" data-bs-toggle="dropdown"
          aria-expanded="false"></span>
          <ul className="dropdown-menu" aria-labelledby="EditExpenseCard">
            <li><span type='button' className="dropdown-item" >Edit</span></li>
            <li><span onClick={() => { props.deleteBtn(props.IDd) }} type='button' className="dropdown-item" >Delete</span></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default TodoCard;

/*

   */