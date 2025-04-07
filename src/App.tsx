import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MyNavbar from './components/Navigation/Navbar';
import HeroSection from './pages/Hero';
import MyFooter from './components/Navigation/footer';
import { Component as LoginModal } from './components/loginmodal';
import CheckStatusPage from './pages/checkstatus';
import Chat from './components/chatbot';
import HowToApply from './pages/howtoapply';
import FAQ from './pages/Faq';
import { ContactModal } from './components/ContactModal';
import EligibilityForm from './pages/Eligibility';
import PMSSSRegister from './pages/register';
import PMSSSDocumentUpload from './pages/upload';
import ApplicationConfirmation from './pages/applicationNum';
import AboutPage from './pages/about';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop /> 
      <div className="min-h-screen dark:bg-gray-900">
        <MyNavbar 
          onLoginClick={() => setIsLoginModalOpen(true)}
          onContactClick={() => setIsContactModalOpen(true)} 
        />
        <LoginModal
          openModal={isLoginModalOpen}
          onCloseModal={() => setIsLoginModalOpen(false)}
        />
        <ContactModal
          openModal={isContactModalOpen}
          onCloseModal={() => setIsContactModalOpen(false)}
        />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/check-status" element={<CheckStatusPage />} />
          <Route path="/how-to-apply" element={<HowToApply />} />
          <Route path="/Faq" element={<FAQ />} />
          <Route path="/eligibility" element={<EligibilityForm />} />
          <Route path="/register" element={<PMSSSRegister />} />
          <Route path="/upload/:pmsssId" element={<PMSSSDocumentUpload />} />
          <Route path="/application-confirmation/:pmsssId" element={<ApplicationConfirmation />} />
        </Routes>
        <Chat />
        <MyFooter />
      </div>
    </Router>
  );
}

export default App;
