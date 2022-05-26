import React,{useState} from 'react'
import '../assets/styles/formNew.css';


function AddName() {

  const [Text, setText] = useState('')
  const [showText, setshowText] = useState('')

  const handleUpclick = () => {
    setshowText(Text);
  }
  const inputTrigger = (event) => {
    setText(event.target.value);
  }

  return (
    <>
       <div id="main"> 

            <div className="in_boxx">
                <div className="innok">
                        <div className="box--inside">
                              <p><input type="text" Value={Text} placeholder='Enter Your Name' onChange={inputTrigger} /></p>

                                <button onClick={handleUpclick} className='Submit_btn' type='submit'> Submit</button>
                                <p>{showText}</p>

                        </div>
                </div>
            </div>

       </div>
    </>
  )
}

export default AddName