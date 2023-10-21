import { Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { PageNotFound } from "./pages/PageNotFound";
import { LaunchesPage } from "./pages/LaunchesPage";

export function AppRouter() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/launches" element={<LaunchesPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
}
