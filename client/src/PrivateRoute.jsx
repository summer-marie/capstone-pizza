import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const token =
    useSelector((state) => state.auth.token) || localStorage.getItem("token");
  const user =
    useSelector((state) => state.auth.authUser) ||
    JSON.parse(localStorage.getItem("userOn") || "null");

  console.log("PrivateRoute check:", { token, user });

  // If user is logged
  if (token && user?.role === "admin") {
    return <Outlet />;
  }
  // If user is not logged in, navigate to login
  else {
    return <Navigate to="/admin-login" />;
  }
};

export default PrivateRoute;
