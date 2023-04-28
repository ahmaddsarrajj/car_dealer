import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './head.css'

export default function Head() {
  
  const [category, setcategory] = useState([])
  const [subcategory, setsubcategory] = useState([])
  
  
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "https://cardealerlebanon.com/input/category/viewCategory.php"
        )
      ).json();
      setcategory(data)
    }
   dataFetch();

  }, [])
  
  let getSubCateg = (catId) => {
    axios.get( `https://cardealerlebanon.com/input/category/viewSubCat.php?parentId=${catId}`)
    .then(res => setsubcategory(res.data))
  }  

    
    
    return (
      <div className=' head list our_container'>
      {
        category?.map(  (cat, i)=> 
        {
          // getSubCateg(cat.id)
          return (
              <Link 
              to={`category/${cat.id}/${cat.name}`} 
              onMouseEnter={()=>getSubCateg(cat.id)}
              key={i}
              >
            <div className='dropdown item' >
                <span>
                {cat.name}
                  </span>
         </div>
            </Link>

            )
          })      
      }
        
    </div>
  )
}
