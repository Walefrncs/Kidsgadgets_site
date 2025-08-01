import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KidsGadgetsHome from "./KidsGadgetsHome";
import CheckoutForm from "./CheckoutForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KidsGadgetsHome />} />
        <Route path="/checkout" element={<CheckoutForm />} />
      </Routes>
    </Router>
  );
}

export default App;
