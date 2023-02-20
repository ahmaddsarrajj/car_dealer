import React from 'react'
import './follow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Follow() {
  return (
    <div className='container follow'>
        <div className="title">
            Follow Us
        </div>
        <div className="paragraph">
            <p>
                you can follow us on the social media links below,<br/>
                To stay informed of all our news
            </p>
        </div>
        <div className="social">
                
                    <div>
                        <a href="https://www.facebook.com/cardealerlebanon">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>
                
                    <div>
                        <a href="https://www.instagram.com/cardealer.lebanon/?utm_medium=copy_link">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                
        </div>
    </div>
  )
}
