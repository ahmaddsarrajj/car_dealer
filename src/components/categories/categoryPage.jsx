import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import usePagination from '../pagination'
import './categoryPage.css'
import Carousel from 'carousel-react-rcdev'
import CardCar from '../card/card';
import Section from '../section/section';
import axios from 'axios';

export default function CategoryPage() {

  let {categoryId, categoryName} = useParams();  
  
  let [category, setcategory] = useState([])

  let [subcategoryId, setSubcategoryId] = useState()
  

  const data = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
  ]

  if(!subcategoryId) {
    setSubcategoryId(categoryId)
  }
 
  


  useEffect(() => {
    axios.get(`https://cardealerlebanon.com/input/category/viewSubCat.php?parentId=${categoryId}`)
    .then(category=>setcategory(category.data))
  }, [categoryId])

  return (
    <div className='categoryPage our_container' style={{color: "black"}}>
      {/* <h1>{categoryId}</h1> */}
      
      <h2 className='title'>
        {categoryName}
      </h2>


      <div className='subcategory'>
        {category.length !== 0 ?
      <Carousel>
      {category?.map((cat, i)=>{
        let icon = cat.icon
        let newIcon = icon.replace(';','')
            return(
            <div className='category' key={i}>
                <img className="category_page_images" width="60px" src={newIcon}/>
                <div>
                    <Link to={`../category/${cat.id}/${cat.name}`}>
                        {cat.name}
                    </Link>
                    </div>
            </div>
            )
        })
        }
        </Carousel>
      : <div>We will add products soon!</div>  
      }
      </div>

         {category?.map((cat, i)=>{
          // console.log(i)
          
          return(
            <Section key={i} category={cat}/>
          )
         })
         }

         
        </div>
        
    
  )
}
