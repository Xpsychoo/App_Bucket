import React from 'react'
import './main.css'
import Navigate from './Navigate'
import NewBoxIn from './NewBoxIn'
const MainPage = () => {
  return (
    <div className='Main_content'>
        <Navigate />
        <div className="centEERbox">
        <NewBoxIn/>
        </div>
    </div>
  )
}

export default MainPage