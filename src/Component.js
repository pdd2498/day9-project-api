import React from 'react'

export default function Component({imag , name , body , equipment}) {
  return (
    <div>
        <div className='box'>
            <img src={imag} alt="" />
            <h2>{name}</h2>
            <p>{body}</p>
            <p>{equipment}</p>
            <p>box</p>
        </div>
    </div>
  )
}
