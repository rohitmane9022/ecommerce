import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

export function ProtectedRoute({ children }) {
  const { loggedIn } = useAuth();
  const location = useLocation();

  return loggedIn ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
