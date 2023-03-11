import React from 'react'
import Head from './head/head'
import Navbar from './navbar/Navbar'

export default function Header() {
  return (
    <div className='header'>
        <Navbar/>
        <Head/>
    </div>
  )
}
