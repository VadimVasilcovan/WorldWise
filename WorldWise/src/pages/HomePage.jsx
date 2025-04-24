import React from 'react'
import { Link } from 'react-router-dom'
import PageNav from '../assets/components/PageNav'
import AppNav from '../assets/components/AppNav'

export default function HomePage() {
  return (
    <div>
      <PageNav/>
      <AppNav/>
      <h1 className='test'>HomePage</h1>
    <Link to='app'>Go to the app</Link>
    </div>
  )
}
