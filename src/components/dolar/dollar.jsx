import React from 'react'
import './dollar.css'

export default function Dolar(props) {
  let dollar = props.dollar;
  
  return (
    <div className=' dollar'>
      <div className="price">
        <span>
        {dollar.SOLD}
        </span>
        <span className='d-logo'>
          <img src="/assets/icons8-us-dollar-circled-100.png" width="40px" />
        </span>
        <span>
        {dollar.BUYING}
        </span>
      </div>
      <div className="date text-white">
        {dollar.UPDATED_DATE}
      </div>
    </div>
  )
}
