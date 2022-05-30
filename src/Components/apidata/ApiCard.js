import React from 'react'

const ApiCard = (props) => {
  return (
    <div className='ApiCard' key={props.key}>
        <img src={props.avatar_url} alt="" />
        {/* <a target="_blank" href={props.html_url}>View more</a> */}
    </div>
  )
}

export default ApiCard