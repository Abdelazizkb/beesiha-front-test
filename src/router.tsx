import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("pages/home"));

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="home" />} />
      <Route path="/home/*" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
