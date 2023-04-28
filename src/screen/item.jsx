import React, { useEffect, useState } from 'react';
import './css/item.css'
import axios from 'axios';

export default function Item() {

  const [items, setitems] = useState([])

  useEffect(() => {
    axios.get(`https://cardealerlebanon.com/input/webapi/viewAds.php`)
    .then(item=>setitems(item.data))
  }, [])
  console.log(items)
  return (
    <div className='item'>
        item
    </div>
  )
}
