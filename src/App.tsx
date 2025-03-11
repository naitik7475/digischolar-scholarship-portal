import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MyNavbar from './components/Navbar';
import HeroSection from './components/Hero';
import MyFooter from './components/footer';
import { Component as LoginModal } from './components/loginmodal';
import CheckStatusPage from './components/checkstatus';
import Chat from './components/chatbot';
import HowToApply from './components/howtoapply';
import FAQ from './components/Faq';
import { ContactModal } from './components/ContactModal';
import EligibilityForm from './components/Eligibility';
import PMSSSRegister from './components/register';
import PMSSSDocumentUpload from './components/upload';
import ApplicationConfirmation from './components/applicationNum';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <Router>
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
