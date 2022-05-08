import React, { useState } from 'react'

export default function Accordian() {

    const [MyStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black',
        border:'1px solid white'
    })
    const [btnText, setbtnText] = useState('Enable Light mode')

    const toggleStyle = () => {
        if (MyStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtnText('Enable Dark Mode')
        }
        else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border:'1px solid white'
            })
            setbtnText('Enable Light Mode')
        }
    }
    return (
        <>  
        <div className='text-end mt-5'>
        <button onClick={toggleStyle} className="btn  btn-primary">{btnText}</button>
        </div>
            <div className="accordion" id="accordionExample" style={MyStyle} >
                <div className="accordion-item" style={MyStyle} >
                    <h2 className="accordion-header" id="headingOne">
                        <button style={MyStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div style={MyStyle} id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={MyStyle} >
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={MyStyle} >
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={MyStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={MyStyle} >
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={MyStyle} >
                    <h2 className="accordion-header" id="headingThree">
                        <button style={MyStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={MyStyle} >
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
