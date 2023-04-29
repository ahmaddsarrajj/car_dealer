import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbarr our_container'>
      
      {/* menu */}
      {/* <span className="menu">
           <span>
           <FontAwesomeIcon icon={faBars} />
            </span>
      </span> */}
        <div className="logo">
             <Link to="/">
               <img loading="lazy"  src="/assets/logo_home.png" width="100px"/>
             </Link>
        </div>
        



      <div className='right'>
        {/* <div className="search-box">
            <button className="btn-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input type="text" className="input-search" placeholder="Type to Search..."/>
        </div> */}
        <div className="signin">
            <Link className="button" to="/login">
                Sign in
            </Link>
        </div>
      </div>
    </div>
  )
}
