import React from 'react'
import './category.css';
import {categories} from '../../dumy_data/category';

export default function Category() {
    
  return (
    <div className='container categories'>
        {categories?.map(category=>{
            return(
            <div className='category' key={category.id}>
                <img src={category.url}/>
                <div>
                    <a href="#">
                        {category.name}
                    </a>
                    </div>
            </div>
            )
        })}
    </div>
  )
}
