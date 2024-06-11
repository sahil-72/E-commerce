import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Offers from '../components/Offers'
import NewCollections from '../components/NewCollections'
import NewLetter from '../components/NewLetter'

export default function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewLetter />
      
    </div>
  )
}
