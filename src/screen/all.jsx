import React from 'react'
import CardItem from '../components/card/card'
import '../screen/screen.css'
export default function All() {
  return (
    <div className='all container'>
        <h2>Fresh Recomendations</h2>
        <div className='list'>
          <div className='cnt'>
            <CardItem/>
          </div>
          <div className='cnt'>
            <CardItem/>
          </div>
          <div className='cnt'>
            <CardItem/>
          </div>
          <div className='cnt'>
            <CardItem/>
          </div>
          <div className='cnt'>
            <CardItem/>
          </div>
          <div className='cnt'>
            <CardItem/>
          </div>
          <div className='cnt'>
            <CardItem/>
          </div>
          <div className='cnt'>
            <CardItem/>
          </div>
          <div className='cnt'>
            <CardItem/>
          </div>
          <div className='cnt'>
            <CardItem/>
          </div>
        </div>
    </div>
  )
}
