import React, { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import './ads.css'

export default function Ads() {

    
    const [images, setimages] = useState([])


    useEffect(() => {
      const dataFetch = async () => {
        const data = await (
          await fetch(
            "https://cardealerlebanon.com/input/ads/viewAds.php"
          )
        ).json();
        const newArr =await data.map(obj => {
          return {
            ...obj,
            icon: obj.icon.replace(/;/g, '')
          };
        });
        setimages(newArr)
        console.log(newArr);
      }
     dataFetch();
    }, [])
    
    
  return (
    <div className="ads">
        <div className="container1">  
               
            <Carousel autoPlay>
                {
                    images?.map((image, i) => {
                      
                       return (
                        <a key={i} href={image?.link}>
                        <img  src={image?.icon} alt={image?.title} className="image" />
                        </a>
                       )
                        
                    })
                }
            </Carousel>
        </div>
    </div>
  )
}
