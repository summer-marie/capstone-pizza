import { Routes, Route} from "react-router"
import PrivateRoute from "./PrivateRoute"
import Navbar from "./components/Navbar"
import AdminSidenav from "./admin/AdminSidenav"
import NoMatch from "./components/NoMatch"
import About from "./customer/About"
import OrderMenu from "./customer/OrderMenu"
import Contact from "./customer/Contact"
import Checkout from "./customer/Checkout"
import AdminOpenOrders from "./admin/AdminOpenOrders"
import AdminCompletedOrders from "./admin/AdminCompletedOrders"
import AdminMenu from "./admin/AdminMenu"
import Footer from "./components/Footer"
import AdminLogin from "./admin/AdminLogin"
import BuildYourOwn from "./customer/BuildYourOwn"
import AdminUpdateOne from "./admin/AdminUpdateOne"
import IngredientsTable from "./admin/ingredientsTable"
import AdminBuilderCreate from "./admin/AdminBuilderCreate"
import "./App.css"

function App() {
  return (
    <>
      {/* TODO: Add sidnav to private routes */}
      {/* <AdminSidenav /> */}
      {/* <Navbar /> */}
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
        <Route path='/admin-menu/:id?' element={<AdminMenu />} />
        <Route path='/admin-update-one/:id' element={<AdminUpdateOne />} />
        <Route path='/ingredient-table' element={<IngredientsTable />} />
        {/* <Route path='/pizza-update' element={<Update />} /> */}

        <Route element={<PrivateRoute />}></Route>

        <Route path='*' element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
