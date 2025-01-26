import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contex/Index";

export default function PrivateRoute() {
  const { user,  } = useContext(AuthContext);

  if (!user || user.email !== "hmdtamimkhan@gmail.com") {
    return <Navigate to="/login" replace />;
  }


  return <Outlet />;
}
