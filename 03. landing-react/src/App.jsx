import React from 'react'
import { Header } from './components/Header'
import { Body } from './components/Body'
import { Footer } from './components/Footer'
import { Routes, Route, Link } from 'react-router-dom'

function HomePage () {
  return (
    <>
      <Body />
    </>
  )
}

function AboutUsPage () {
  return (
    <>
      <h1>Sobre Nosotros</h1>
    </>
  )
}

function PageNotFound () {
  return (
    <>
      <h1>404</h1>
      <p>Sorry this page is no available</p>
      <Link to='/'>Go to Home</Link>
    </>
  )
}

function ContactUsPage () {
  return (
    <>
      <h1>Contactanos</h1>
    </>
  )
}

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/aboutus' element={<AboutUsPage />} />
        <Route path='/contactus' element={<ContactUsPage />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
