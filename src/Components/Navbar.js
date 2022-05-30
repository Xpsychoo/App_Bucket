import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    
    const CurrDate = new Date().toLocaleDateString();
    const CurrTime = new Date().toLocaleTimeString();

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{border: props.mode === 'light'?'1px solid #212529':'1px solid #fff' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.name}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 align-center navbar-nav-scroll" >
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/accordian">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Log In</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.dropName}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><Link className="dropdown-item" to="/actionone">Greeting</Link></li>
                                    <li><Link className="dropdown-item" to="/calculator">Calculator</Link></li>
                                    <li><Link className="dropdown-item" to="/newapp">Cafe</Link></li>
                                    <li><Link className="dropdown-item" to="/photography">Photography</Link></li>
                                    <li><Link className="dropdown-item" to="/expense">Expense Chart</Link></li>
                                    <li><Link className="dropdown-item" to="/incrementMain">Counter</Link></li>
                                    <li><Link className="dropdown-item" to="/mainApp">API Data</Link></li>
                                    <li><Link className="dropdown-item" to="/todolist">To Do List</Link></li>
                                    <li><Link className="dropdown-item" to="/MainSearch">Search Image</Link></li>
                                    <li><Link className="dropdown-item" to="/ApiDeal">Pikachu </Link></li>
                                    <li><Link className="dropdown-item" to="/addname">Form</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href='/' className="nav-link disabled">Link</a>
                            </li>
                        </ul>
                        <ul className='d-flex list-unstyled mt-2 me-5'>
                            <li className='me-3'>{CurrTime}</li>
                            <li>{CurrDate}</li>
                        </ul>


                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form> */}
                        <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
                            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar