import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './head.css'

export default function Head() {
  return (
    <div className=' head list container'>
        <div className='dropdown item'>
          <span>Vehicules & Motors</span>
          <FontAwesomeIcon icon={faCaretDown}/>
          <div className="dropdown-content">
            <a href="#">Car Auctions</a>
            <a href="#">Cars for Sales</a>
            <a href="#">Cars for Rent</a>
          </div>
        </div>
        <div className='dropdown item'>
          <span>Specials</span>
          <FontAwesomeIcon icon={faCaretDown}/>
          <div className="dropdown-content">
            <a href="#">Phone Numbers</a>
            <a href="#">Plate Numbers</a>
          </div>
        </div>
        <div className='dropdown item'>
          <span>Applicances & Furniture</span>
          <FontAwesomeIcon icon={faCaretDown}/>
          <div className="dropdown-content">
            <a href="#">Tools</a>
            <a href="#">Kitchen Equipment</a>
            <a href="#">Mobile</a>
            <a href="#">Electric Applicances</a>
            <a href="#">Furniture</a>
            <a href="#">Soirt Equipments</a>
          </div>
        </div>
        <div className='dropdown item'>
          <span>Fashion, Beauty & Toys</span>
          <FontAwesomeIcon icon={faCaretDown}/>
          <div className="dropdown-content">
            <a href="#">Fashion</a>
            <a href="#">Kids & baby Toys</a>
          </div>
        </div>
        <div className='dropdown item'>
          <span>Others</span>
          <FontAwesomeIcon icon={faCaretDown}/>
          <div className="dropdown-content">
            <a href="#">Real Estate</a>
            <a href="#">Jobs</a>
            <a href="#">Services</a>
            <a href="#">Pets</a>
          </div>
        </div>
    </div>
  )
}
