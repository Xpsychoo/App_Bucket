import React from 'react';
import '../assets/styles/Action_one.css';

function Action_one() {

    let CurrDate = new Date();
    CurrDate = CurrDate.getHours();
    const cssStyle = { };
    
    let Greeting = '';
    if (CurrDate >= 1 && CurrDate <12) {
        Greeting = ' Morning';
        cssStyle.color = 'Green'
    }else if (CurrDate >= 12 && CurrDate <16) {
        Greeting = ' After Noon';
        cssStyle.color = 'Yellow'
    }else if (CurrDate >= 16 && CurrDate <20){
        Greeting = ' Evening';
        cssStyle.color = 'Blue'
    }else{
        Greeting = ' Night';
        cssStyle.color = '#fff'

    }
    // const currTime = new Date().toLocaleTimeString();

    return (
        <>
            <div className='Main_div'>
                <div className='inside_div'>
                    <h3> Hello sir Good <span style={cssStyle}>{Greeting}</span> </h3>
                </div>
            </div>
        </>
    )
}

export default Action_one

// to print time and date
/* <p> current date is = {CurrDate}</p>
<p> current Time is = {currTime}</p> */




/* import Menu from '../assets/basic/Menu' */


/*     const [MenuData, setMenuData] = useState(Menu)
    console.log(Menu); */


/*  {Menu.map((MenuApi) => {

                <div className="container d-flex">
                    <div key={MenuApi.id}>
                        <img src={MenuApi.image} alt="" />
                        <p>{MenuApi.price}</p>
                    </div>
                </div>
            })} */