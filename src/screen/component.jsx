import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import './screen.css'
import { Outlet } from 'react-router-dom'
export default function Component() {
  return (
    <div>
    <Header/>
    <Outlet/>
    <div className='fot'>
    <Footer/>
    </div>
    </div>
  )
}
