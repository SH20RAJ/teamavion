import { Achivements } from '@/components/Achivements'
import { Hero } from '@/components/Hero'
import Navbar from '@/components/NavBar'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Achivements/>

    </div>
  )
}
