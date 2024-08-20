import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Control from "../pages/Control";
import Kpis from "../pages/Kpis";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/controls" element={<Control />} />
    <Route path="/kpis" element={<Kpis />} />
  </Routes>
);

export default Router;
