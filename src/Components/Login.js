import React, { useState } from 'react'
import '../assets/styles/formNew.css';
import validator from 'validator';
function Login() {
    const [Error, setError] = useState('');
    const [userName, setuserName] = useState('')
    const [isShow, setisShow] = useState(false)

    const SubmitForm = (e) => {
        e.preventDefault();
        if (!validator.isEmail(userName) || userName.length<=8 ) {
            setError('please enter a valid username')
            setTimeout(() => {
                setError('')
            }, 2000);
        } else {
            console.warn('ok');
            setTimeout(() => {
                setError('')
            }, 2000);
        }
    }

    return (
        <div id="LogIn">
            <div className="in_boxx">
                <div className="innok">
                    <div className="box--inside">
                        <form onSubmit={SubmitForm}>
                            <p>
                                <span className='input-hoolder'>
                                    <input type="text" onChange={(e) => { setuserName(e.target.value) }} value={userName} placeholder='Enter Your Username' />
                                </span>
                            </p>
                            <p>{Error}</p>
                            <p>
                                <span className='input-hoolder'>
                                    <input type={`${isShow ? 'text' : 'password'}`} Value='' placeholder='Enter Your Password' />
                                    <span className="fas fa-eye" onClick={() => { setisShow(!isShow) }} />
                                </span>
                            </p>
                            <button className='Submit_btn' type='submit'> Login</button>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login