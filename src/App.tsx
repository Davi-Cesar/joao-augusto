import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ConfirmacaoGift from "./components/ConfirmacaoGift";
import Home from "./home";
import Layout from "./components/Layout";
import Preloader from "./components/Preloader";

export default function App() {
  return (
    <BrowserRouter>
      <Preloader />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confirmacao/:id" element={<ConfirmacaoGift />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
