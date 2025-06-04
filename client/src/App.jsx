import { Routes, Route, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAuthFromStorage } from "./redux/authSlice";
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
  const dispatch = useDispatch();

  useEffect(() => {
    // Get token and user from localStorage as plain string
    const token = localStorage.getItem("token");
    const userString = localStorage.getItem("userOn");
    // Only parse user if not null and not the string "undefined"
    const user =
      userString && userString !== "undefined" ? JSON.parse(userString) : null;
    if (token && user) {
      dispatch(setAuthFromStorage({ token, user }));
    }
  }, [dispatch]);

  const reduxToken = useSelector((state) => state.auth.token);
  const token = reduxToken || localStorage.getItem("token");
  const isAdminLoggedIn = !!token;

  const location = useLocation();
  // Hide Navbar on /admin-login
  const hideNavbar = location.pathname === "/admin-login";

  return (
    <>
      {/* Only show AdminSidenav if admin is logged in */}
      {isAdminLoggedIn && <AdminSidenav />}

      {/* Only show Navbar if NOT admin */}
      {!isAdminLoggedIn && !hideNavbar && <Navbar />}
      {!isAdminLoggedIn && <Footer />}

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<OrderMenu />} />
        <Route path="/about" element={<About />} />
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
    </>
  );
}

export default App;
