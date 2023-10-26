import { Routes, Route } from "react-router-dom";
import { PageNotFound } from "../pages/PageNotFound";
import { LandingPage } from "../pages/LandingPage";
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
