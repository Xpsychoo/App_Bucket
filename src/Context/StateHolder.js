import React,{useState} from 'react'
import ExpenseData from '../assets/basic/ExpenseApi';
import context from "./Context";

const StateHolder = (props) => {
    const [newdata, setnewdata] = useState(ExpenseData)
    const state = {
        newdata, setnewdata
    }
  return (
    <context.Provider value={state}>
        {props.children}
    </context.Provider>
  )
}

export default StateHolder