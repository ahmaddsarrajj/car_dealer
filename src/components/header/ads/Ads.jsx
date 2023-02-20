import { Paper } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './ads.css'

export default function Ads() {

    const images = [
        {"src": "../../../../src/assets/Frame4.png", "name": "image1"},
        {"src": "../../../../src/assets/Frame4.png", "name": "image2"},

    ]

    
  return (
    <div className="ads">
        <div className="container">            
            <Carousel>
                {
                    images.map((image, i) => {
                       return <img key={i} src={image.src} alt={image.name} className="image" />
                        
                    })
                }
            </Carousel>
        </div>
    </div>
  )
}
