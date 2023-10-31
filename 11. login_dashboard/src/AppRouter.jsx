import { Routes, Route } from "react-router-dom";
import { Navbar } from "./user/components/Navbar";
import { LoginPage } from "./user/pages/LoginPage";
import { RegisterPage } from "./user/pages/RegisterPage";
import { LaunchesPage } from "./user/pages/LaunchesPage";
import { LandingPage } from "./user/pages/LandingPage";
import { PrivateRoute } from "./user/router/PrivateRoute";
import { PageNotFound } from "./user/pages/PageNotFound";

export function AppRouter() {
  return (
    <main>
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/" element={<Navbar />}>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/launches" element={
            <PrivateRoute>
              <LaunchesPage />
            </PrivateRoute>
          } />
        </Route>
      </Routes>
    </main>
  );
}
