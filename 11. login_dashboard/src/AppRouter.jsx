import { Routes, Route } from "react-router-dom";
import { Navbar } from "./user/components/Navbar";
import { LoginPage } from "./user/pages/LoginPage";
import { RegisterPage } from "./user/pages/RegisterPage";
import { LaunchesPage } from "./user/pages/LaunchesPage";
import { LandingPage } from "./user/pages/LandingPage";
import { PageNotFound } from "./user/pages/PageNotFound";
import { PrivateRoute } from "./user/router/PrivateRoute";
import { LaunchDetailPage } from "./user/pages/LaunchDetailPage";
import { AboutPage } from "./user/pages/AboutPage";

export function AppRouter() {
  return (
    <main>
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Navbar />}>
          <Route path="/about" element={<AboutPage />} />
          <Route index element={<LandingPage />} />
          <Route
            path="/launches"
            element={
              <PrivateRoute>
                <LaunchesPage />
              </PrivateRoute>
            }
          />
          <Route path="/launch/:flight_number" element={<LaunchDetailPage />} />
        </Route>
      </Routes>
    </main>
  );
}
