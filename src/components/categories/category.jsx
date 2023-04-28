import React, { useEffect, useState } from 'react'
import './category.css';
import {categories} from '../../dumy_data/category';
import { Link } from 'react-router-dom';

export default function CategoryPage() {

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

  return (
    <div className='our_container categories'>
        {category?.map((cat, i)=>{
            return(
            <div className='category' key={i}>
               <Link to={`category/${cat.id}/${cat.name}`}>
                <img src={cat.icon}/>
                <div>
                        {cat.name}
                    </div>
                    </Link>
            </div>
            )
        })}
    </div>
  )
}
