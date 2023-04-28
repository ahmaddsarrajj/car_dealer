import usePagination from '../components/pagination'
import React, { useEffect, useState } from 'react'
import CardItem from '../components/card/itemcard'
import Category from '../components/categories/category'
import Header from '../components/header/header'
import Ads from '../components/header/ads/Ads'
import '../screen/screen.css'
import Dollar from '../components/dolar/dollar'
import Carousel from 'carousel-react-rcdev'
import axios from "axios"

export default function All() {

  const [dollar, setDollar] = useState([]);

  useEffect(() => {
      getData();
  }, []);

  function getData() {
      axios.get('https://cardealerlebanon.com/input/dolar/view.php/').then(function(response) {
          setDollar(response.data);
      });
  }

  
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
    <div className='all'>
      <div className='adsAll'>
      <Ads/>
      </div>
      <Dollar dollar={dollar}/>
      <div className='our_container'>
      <Category/>
      <div className="products">
        <h2>Fresh Recomendations</h2>
        <hr align="left"/>
        <div className='list'>
          <Carousel>
         {_DATA.currentData()?.map(i=>{
          return(
           <div key={i.id} className='cnt'>
            {/* <CardItem item={data}/> */}
          </div>
          )
         })
         }
          </Carousel>
        </div>
      </div>
      </div>
    </div>
  )
}
