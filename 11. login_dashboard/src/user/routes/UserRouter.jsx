import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { PageNotFound } from "../pages/PageNotFound";
import { LaunchesPage } from "../pages/LaunchesPage";

export function UserRouter() {

  return (
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/launches" element={<LaunchesPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
}
