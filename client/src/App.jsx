import { useState } from "react"
import { Routes, Route } from "react-router"
// import Colors from './Colors'
import PrivateRoute from "./PrivateRoute"
import Navbar from "./components/Navbar"
import AdminSidenav from "./admin/AdminSidenav"
import NoMatch from "./components/NoMatch"
import About from "./customer/About"

import OrderMenu from "./customer/OrderMenu"
import Contact from "./customer/Contact"
import Checkout from "./customer/Checkout"
import AdminBuilderCreate from "./admin/adminBuilderCreate"
import AdminOpenOrders from "./admin/AdminOpenOrders"
import AdminCompletedOrders from "./admin/AdminCompletedOrders"
import AdminMenu from "./admin/AdminMenu"
import Footer from "./components/Footer"
import AdminLogin from "./admin/AdminLogin"
import "./App.css"
import BuildYourOwn from "./customer/BuildYourOwn"

function App() {
  return (
    <>
      {/* TODO: Add sidnav to private routes */}
      {/* <AdminSidenav />  */}
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/order-menu' element={<OrderMenu />} />
        <Route path='/order-create' element={<BuildYourOwn />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        {/* Admin routes TODO: Private Routes */}
        <Route path='/pizza-builder' element={<AdminBuilderCreate />} />
        <Route path='/open-orders' element={<AdminOpenOrders />} />
        <Route path='/completed-orders' element={<AdminCompletedOrders />} />
        <Route path='/admin-menu' element={<AdminMenu />} />

        <Route element={<PrivateRoute />}></Route>

        <Route path='*' element={<NoMatch />} />
      </Routes>
      <Footer />

      {/* <Colors /> */}
    </>
  )
}

export default App
