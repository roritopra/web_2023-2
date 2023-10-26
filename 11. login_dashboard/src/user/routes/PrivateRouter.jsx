import { Outlet, Navigate } from "react-router-dom";

export function PrivateRouter() {
  let auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
}
