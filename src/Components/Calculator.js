import React from 'react'
import { add, division,Multiply } from '../assets/basic/Menu';
import '../assets/styles/Action_one.css';


function Calculator() {
    return (
        <>
            <div className='Main_div'>
                <div className='inside_div'>
                    <p> Addition is : {add(40, 4)}</p>
                    <p> division is : {division(40, 3)}</p>
                    <p> Multilication is : {Multiply(40, 3)}</p>
                </div>
            </div>
        </>
    )
}

export default Calculator;