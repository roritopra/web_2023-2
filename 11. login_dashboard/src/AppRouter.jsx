import { Routes, Route } from "react-router-dom";
import { UserRouter } from "./user/routes/UserRouter";
import { LoginPage } from "./user/pages/LoginPage";
import { PrivateRouter } from "./user/routes/PrivateRouter";
import { RegisterPage } from "./user/pages/RegisterPage";

export function AppRouter() {

  return (
    <main>
        <Routes>
          <Route element={<PrivateRouter />}>
            <Route path="/*" element={<UserRouter />} exact />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
    </main>
  );
}
