import React, { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import './ads.css'

export default function Ads() {

    const photos = [
        {"src": "/assets/Frame4.png", "name": "image1"},
        {"src": "/assets/Frame4.png", "name": "image2"},

    ]

    const [images, setimages] = useState([])

    useEffect(() => {
      photos?.map(image=>{
        setimages(arr => [...arr, image])
      })
    }, [])
    
    
  return (
    <div className="ads">
        <div className="container1">  
        {console.log(images)}        
            <Carousel>
                {
                    images?.map((image, i) => {
                       return <img key={i} src={image.src} alt={image.name} className="image" />
                        
                    })
                }
            </Carousel>
        </div>
    </div>
  )
}
