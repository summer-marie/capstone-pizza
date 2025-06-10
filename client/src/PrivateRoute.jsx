import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.auth.authUser);

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
