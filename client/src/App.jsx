import { useState } from "react"
import { Routes, Route } from "react-router"
// import Colors from './Colors'
import Home from "./pages/Home"
import Navbar from "./comonents/Navbar"
import Menu from "./pages/Menu"
import Order from "./pages/Order"
import Contact from "./pages/Contact"
import NoMatch from "./pages/NoMatch"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/order-create' element={<Order />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>

      {/* <Colors /> */}
    </>
  )
}

export default App
