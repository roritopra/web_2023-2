import { Routes, Route } from "react-router-dom";
import { PageNotFound } from "../pages/PageNotFound";
import { LandingPage } from "../pages/LandingPage";
import { LaunchesPage } from "../pages/LaunchesPage";
import { AboutPage } from "../pages/AboutPage";

export function UserRouter() {
  return (
    <Routes>
      <Route path="/home" element={<LandingPage />} />
      <Route path="/launches" element={<LaunchesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
