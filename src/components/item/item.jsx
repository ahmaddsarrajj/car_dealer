import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import usePagination from '../pagination'
import './categoryPage.css'
import Carousel from 'carousel-react-rcdev'
import CardItem from '../card/itemcard';
import '../categories/category.css'
export default function CategoryPage() {

  let {categoryId, categoryName} = useParams();  
  let [category, setcategory] = useState([])
  let [item, setItem] = useState([])

  const data = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
  ]
  let [page, setPage] = useState(1);

  const PER_PAGE = 20;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  
  return (
    <div className='categoryPage our_container' style={{color: "black"}}>
      
          <h3>All Products</h3>
          <hr align="left" style={{width: "50px"}}/>
         <div className='list'>
         {_DATA.currentData()?.map(i=>{
          return(
           <div key={i.id} className='cnt'>
            <CardItem data={item}/>
          </div>
          )
         })
         }
          
        <div className='center pagination'>
         <Pagination
         count={count}
         size="large"
         page={page}
         variant="outlined"
         shape="rounded"
         onChange={handleChange}
         />
        </div>
        </div>
        
    </div>
  )
}
