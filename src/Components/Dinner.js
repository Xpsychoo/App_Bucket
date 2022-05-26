import React from 'react'
import { Menu } from '../assets/basic/Menu';



function Dinner() {
  return (
      <>
        {Menu.map((item)=>{
          return (item.category==='dinner'? 
           <div className="cardx" key={item.id}>
            <img src={item.image} alt="" />
            <p> {item.price}</p>
            <p> {item.category}</p>
            <p>{item.Description}</p>
        </div> :'')
        })}
      </>

  )
}

export default Dinner