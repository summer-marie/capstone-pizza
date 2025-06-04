import { Routes, Route, useLocation } from "react-router";
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import Navbar from "./components/Navbar";
import AdminSidenav from "./admin/AdminSidenav";
import NoMatch from "./components/NoMatch";
import About from "./customer/About";
import OrderMenu from "./customer/OrderMenu";
import Contact from "./customer/Contact";
import Checkout from "./customer/Checkout";
import AdminOpenOrders from "./admin/AdminOpenOrders";
import AdminCompletedOrders from "./admin/AdminCompletedOrders";
import AdminMenu from "./admin/AdminMenu";
import Footer from "./components/Footer";
import AdminLogin from "./admin/AdminLogin";
import BuildYourOwn from "./customer/BuildYourOwn";
import AdminUpdateOne from "./admin/AdminUpdateOne";
import IngredientsTable from "./admin/ingredientsTable";
import AdminBuilderCreate from "./admin/AdminBuilderCreate";
import "./App.css";

function App() {
  // const authUser = useSelector((state) => state.auth.authUser);
  // const isAdminLoggedIn = !!authUser && Object.keys(authUser).length > 0;
  
  const token = useSelector((state) => state.auth.token);
  const isAdminLoggedIn = !!token;
  console.log("isAdminLoggedIn", isAdminLoggedIn);

  const location = useLocation();
  // Hide Navbar on /admin-login
  const hideNavbar = location.pathname === "/admin-login";

  return (
    <>
      {/* Only show AdminSidenav if admin is logged in */}
      {isAdminLoggedIn && <AdminSidenav />}

      {/* Only show Navbar if NOT admin */}
      {!isAdminLoggedIn && !hideNavbar && <Navbar />}

      <Routes>
        {/* Public routes */}

        <Route path="/" element={<About />} />
        <Route path="/order-menu" element={<OrderMenu />} />
        <Route path="/order-create" element={<BuildYourOwn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Protected routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/pizza-builder" element={<AdminBuilderCreate />} />
          <Route path="/open-orders" element={<AdminOpenOrders />} />
          <Route path="/completed-orders" element={<AdminCompletedOrders />} />
          <Route path="/admin-menu/:id?" element={<AdminMenu />} />
          <Route path="/admin-update-one/:id" element={<AdminUpdateOne />} />
          <Route path="/ingredient-table" element={<IngredientsTable />} />
          {/* <Route path='/pizza-update' element={<Update />} /> */}
        </Route>

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
