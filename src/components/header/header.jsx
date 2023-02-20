import React from 'react'
import Ads from './ads/Ads'
import Head from './head/head'
import Navbar from './navbar/Navbar'

export default function Header() {
  return (
    <div>
        <Navbar/>
        <Head/>
        <Ads/>
    </div>
  )
}
