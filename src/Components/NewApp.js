import '../assets/styles/Newapp.css';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner.js';
import AllCafeMenu from './AllCafeMenu';
import { useState } from 'react';

function NewApp() {


    const [Favfood,setFavfood] = useState('All')
    const handleDownClick = () => {
       setFavfood('All');

    }

    return (
        <>
            <div className="container">
                <h1 className='Header'>Hungry? Order Now !</h1>
                <div className="navbar-iin">
                    <ul className='choice_nav'>
                        <li onClick={handleDownClick} className={`list-item ${Favfood==="All"?'active':''}`}>All</li>
                        <li onClick={()=>{setFavfood('Breakfast')}} className={`list-item ${Favfood==="Breakfast"?'active':''}`}>Breakfast</li>
                        <li onClick={()=>{setFavfood('Lunch')}} className={`list-item ${Favfood==="Lunch"?'active':''}`}>Lunch</li>
                        <li onClick={()=>{setFavfood('Dinner')}} className={`list-item ${Favfood==="Dinner"?'active':''}`}>Dinner</li>
                    </ul>
                </div>
                <div className="row">
                  
                {Favfood === 'All'? <AllCafeMenu /> :  null }
                {Favfood === 'Breakfast'? <Breakfast /> :  null }
                {Favfood === 'Lunch'? <Lunch /> :  null }
                {Favfood === 'Dinner'? <Dinner /> :  null }
        
                
                </div>



            </div>

        </>
    )
}

export default NewApp