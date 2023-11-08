import { Navigate, useLocation } from "react-router-dom"

export function PrivateRoute({ children }) {
    const { state } = useLocation()
  
    return state?.isLogged ? children : <Navigate to="/login" />
}

