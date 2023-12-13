import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { MainScreen } from "../pages/MainScreen";

export const AppRoutes = () => (
    <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/:userId/:tabName'} element={<MainScreen />} />
    </Routes>
);