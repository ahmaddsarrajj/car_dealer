import { Pagination } from '@mui/material';
import React, { useState } from 'react'
import CardItem from '../card/card';
import usePagination from '../pagination'
import './categoryPage.css'

export default function CategoryPage() {
  const data = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10},
    {id: 11},
    {id: 12},
    {id: 13},
    {id: 14},
    {id: 15},
    {id: 16},
    {id: 17},
    {id: 18},
    {id: 19},
    {id: 20},
    {id: 21},
    {id: 22},
    {id: 23},
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
    <div className='categoryPage container' style={{color: "black"}}>
      <h2 className='title'>
        Category name
      </h2>
         <div className='list'>
          
         {_DATA.currentData()?.map(i=>{
          return(
           <div key={i.id} className='cnt'>
            <CardItem/>
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
