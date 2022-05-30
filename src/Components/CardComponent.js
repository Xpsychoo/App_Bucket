import React from 'react'


function CardComponent(props) {
  return (
    <>
        <div className="cardx" key={props.id}>
            <img src={props.image} alt="" />
            <p> {props.price}</p>
            <p> {props.category}</p>
            <p>{props.Description}</p>
            <a rel="noreferrer" target='_blank' href={props.href}>{props.linkText}</a>
        </div> 
    </>
  )
}

export default CardComponent