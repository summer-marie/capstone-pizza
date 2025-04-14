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
import Checkout from "./pages/Checkout"
import AdminBuilderCreate from "./admin/adminBuilderCreate"
import AdminSidenav from "./admin/AdminSidenav"
import AdminOpenOrders from "./admin/AdminOpenOrders"
import AdminCompletedOrders from "./admin/AdminCompletedOrders"
import AdminMenu from "./admin/AdminMenu"
import Footer from "./comonents/Footer"
import AdminLogin from "./admin/AdminLogin"
import PrivateRoute from "./PrivateRoute"

function App() {
  return (
    <>
      {/* TODO: Add sidnav to private routes */}
        <AdminSidenav /> 
      <Routes>
      {/* <Navbar /> */}
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/order-create' element={<Order />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        {/* Admin routes TODO: Private Routes */}
        <Route path='/pizza-builder' element={<AdminBuilderCreate />} />
        <Route path='/open-orders' element={<AdminOpenOrders />} />
        <Route path='/completed-orders' element={<AdminCompletedOrders />} />
        <Route path='/admin-menu' element={<AdminMenu />} />

        <Route element={<PrivateRoute />}>
        
        </Route>


        <Route path='*' element={<NoMatch />} />
      </Routes>
        <Footer />

      {/* <Colors /> */}
    </>
  )
}

export default App
