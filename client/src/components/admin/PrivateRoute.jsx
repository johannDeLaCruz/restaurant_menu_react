import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AdminRoot from "./AdminRoot";
import Loader from "../user/Loader";

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if a valid token exists in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      // Set isAuthenticated to true if a valid token exists
      setIsAuthenticated(true);
    }
    // Update loading state after checking for token
    setIsLoading(false);
  }, []);

  // Show loading indicator while checking authentication
  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return isAuthenticated ? <AdminRoot /> : <Navigate to="/login" />;
};

export default PrivateRoute;
