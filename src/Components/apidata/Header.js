import React from 'react'

const Header = () => {
  return (
    <>
        <div className="navbar-nav">
            <ul className="navbar">
                <li className='nav__item'><span className="fas fa-home"></span></li>
                <li className='nav__item'><span className="fas fa-user"></span></li>
                <li className='nav__item'><span className="fas fa-cart-shopping"></span></li>
            </ul>
            <ul className="navbar">
                <li className='nav__item'><span className="fas fa-add"></span></li>
                <li className='nav__item'><span className="fas fa-gear"></span></li>
                <li className='nav__item'><span className="fas fa-power-off"></span></li>
            </ul>
        </div>
    </>
  )
}

export default Header