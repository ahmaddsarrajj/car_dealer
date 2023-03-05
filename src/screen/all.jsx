import { Rowing } from '@mui/icons-material'
import { Pagination } from '@mui/material'
import usePagination from '@mui/material/usePagination/usePagination'
import React, { useEffect, useState } from 'react'
import CardItem from '../components/card/card'
import Category from '../components/categories/category'
import '../screen/screen.css'

export default function All() {

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

  // useEffect(() => {
  //   data.map(d=>console.log(d))
  // }, [])
  

  return (
    <div className='all container'>
      <Category/>
      <div className="products">
        <h2>Fresh Recomendations</h2>
        <hr />
        <div className='list'>
         {data?.map(i=>{
          return(
           <div key={i} className='cnt'>
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
    </div>
  )
}
