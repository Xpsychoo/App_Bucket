import React, { useState } from 'react'
import './style.css'
const MainSearch = () => {

  const [UserInput, setUserInput] = useState('')
  const [EnteredData, setEnteredData] = useState('')
  const inputEvent = (e) => {
    const inputData = e.target.value;
    setEnteredData(inputData);
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    setUserInput(EnteredData);
  }
  return (
    <div>
      <div className="Main__page">
        <div className='InpuTBOx'>
          <form onSubmit={HandleSubmit}>
            <input type="text" placeholder='Search here' value={EnteredData} onChange={inputEvent} /> 
            <button type='submit' className='btnSrchImg'>Search</button>
          </form>
        </div>
        {UserInput === '' ? null :
          <div className="img__Box">
            <img src={`https://source.unsplash.com/random/?${UserInput}`} alt='search' />
          </div>}
      </div>
    </div>
  )
}

export default MainSearch;