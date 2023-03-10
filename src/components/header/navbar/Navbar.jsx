import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div className='navbar container'>
      
      {/* menu */}
      <span className="menu">
           <span>
           <FontAwesomeIcon icon={faBars} />
            </span>
      </span>
        <div className="logo">
             Logo
        </div>
        



      <div className='right'>
        {/* <div className="search-box">
            <button className="btn-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input type="text" className="input-search" placeholder="Type to Search..."/>
        </div> */}
        <div className="signin">
            <button>
                Sign in
            </button>
        </div>
      </div>
    </div>
  )
}
