import React, {useState} from 'react'
import './incrr.css';

const IncrementMain = () => {
    const [numValue, setnumValue] = useState(0);

  return (
    <>
        <div id="mainIdd">
            <div className="cardBox">
                <div className="innBoxX">
                    <p className="num">{numValue}</p>
                    <div className="btn__box"><span onClick={() => setnumValue(numValue+1)} className='button fas fa-plus'></span> <span onClick={() => setnumValue(numValue-1)}  className='button fas fa-minus'></span></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default IncrementMain 


 /* const [show, setShow] = useState(false)


onClick={() => setShow(!show)} 
<p>{show? "-" : "+"}</P>
 */