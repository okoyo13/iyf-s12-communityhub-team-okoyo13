import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Dashboard";
import AuthHeader from "./AuthHeader";

function ProtectedRouteDemo() {
  const { username } = useAuth();
  const location = useLocation();

  if (location.pathname === "/login") {
    return username ? <Navigate to="/dashboard" replace /> : <Login />;
  }

  return (
    <ProtectedRoute>
      <>
        <AuthHeader />
        <Dashboard />
      </>
    </ProtectedRoute>
  );
}

export default ProtectedRouteDemo;
