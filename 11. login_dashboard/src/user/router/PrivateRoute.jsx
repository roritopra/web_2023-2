import { Navigate } from "react-router-dom"
import { useAuth } from "../../auth/context/AuthContext"

export function PrivateRoute({ children }) {
    const { currentUser } = useAuth();
  
    return currentUser ? children : <Navigate to="/login" />
}

