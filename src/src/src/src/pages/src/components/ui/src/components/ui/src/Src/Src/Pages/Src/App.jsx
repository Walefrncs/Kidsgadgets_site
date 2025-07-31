import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KidsGadgetsHome from "@/pages/KidsGadgetsHome";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KidsGadgetsHome />} />
      </Routes>
    </Router>
  );
}
