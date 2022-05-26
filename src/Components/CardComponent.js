import React from 'react'


function CardComponent(props) {
  return (
    <>
        <div className="cardx" key={props.id}>
            <img src={props.image} alt="" />
            <p> {props.price}</p>
            <p> {props.category}</p>
            <p>{props.Description}</p>
        </div> 
    </>
  )
}

export default CardComponent