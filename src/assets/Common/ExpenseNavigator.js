import React from 'react'

const ExpenseNavigator = () => {
  return (
    <>
        <div className="navMenu">
                <ul className="navbar_nav">
                    <li className="nav--item"> <span title='Home' className="fas fa-home"></span></li>
                    <li className="nav--item"> <span title='Profile' className="fas fa-user"></span></li>
                </ul>
                <h3 className="nav__title">Expenses Chart</h3>
                <ul className="navbar_nav">
                    <li className="nav__Add"> <span data-bs-toggle="modal" data-bs-target="#AddExpenseBox" title='Add New Expense' className="fas fa-plus"></span></li>
                </ul>
            </div>
    </>
  )
}

export default ExpenseNavigator