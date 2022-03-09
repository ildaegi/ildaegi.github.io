import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/main/home.page";

export default function AppRoute() {
  return (
    <Routes>
      {/* 메인 홈 */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
