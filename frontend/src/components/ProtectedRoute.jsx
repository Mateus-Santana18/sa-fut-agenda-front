import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MenuDrawer from "./MenuDrawer";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated() ? <MenuDrawer /> : <Navigate to="/" />;
};

export default ProtectedRoute;