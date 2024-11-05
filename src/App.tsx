import { Route, Routes, BrowserRouter } from "react-router-dom";
import ConfirmacaoGift from "./components/ConfirmacaoGift";
import Home from "./home";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confirmacao/:id" element={<ConfirmacaoGift />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
