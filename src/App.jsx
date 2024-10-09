import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Nav from "./Nav";
import Home from "./Home";
import Contact from "./Contact";
import Pricing from "./Pricing";
import Footer from "./Footer";
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import Impressum from './Impressum';
import Learn from "./Learn";
export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
