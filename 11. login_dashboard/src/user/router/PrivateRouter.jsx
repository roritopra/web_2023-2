import { Outlet, Navigate } from "react-router-dom";

export function PrivateRouter() {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
}
