import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import PricingPage from "./pages/PricingPage";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
