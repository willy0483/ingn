import { Routes, Route } from "react-router-dom";

import { HomePage } from "../Pages/HomePage/HomePage";
import { Detailspage } from "../Pages/Detailspage/Detailspage";
import { CategoryPage } from "../Pages/CategoryPage/CategoryPage";
import { MainLayout } from "../Layout/MainLayout";
import { ProfilePage } from "../Pages/ProfilePage/ProfilePage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="details/:articleID" element={<Detailspage />} />
        <Route path="category/:category" element={<CategoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};
