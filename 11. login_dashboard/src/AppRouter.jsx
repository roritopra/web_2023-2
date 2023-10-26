import { Routes, Route } from "react-router-dom";
import { UserRouter } from "./user/routes/UserRouter";
import { LoginPage } from "./user/pages/LoginPage";

export function AppRouter() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/*" element={<UserRouter />} />
      </Routes>
    </main>
  );
}
