import React from 'react'
import { PhotoData } from '../assets/basic/Menu';
import '../assets/styles/Newapp.css';
import CardComponent from './CardComponent';

function Photography() {
  return (
    <>
      <h1 className='Header'>Photography Lover ?</h1>
      <div className="container">
        <div className="row">
          {PhotoData.map(function photocard(val) {
            return (
              <CardComponent key={val.id} image={val.image} href={val.image} linkText={val.linkText} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Photography


// https://api.github.com/users api data link