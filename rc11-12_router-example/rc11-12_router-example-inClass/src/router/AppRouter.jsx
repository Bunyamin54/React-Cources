import React from 'react'
import Nav from '../components/Nav'
import { Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <div>
        <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paths" element={<Paths />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default AppRouter
