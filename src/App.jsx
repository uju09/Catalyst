import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  AnnouncementBar,
  Navbar,
  Hero,
  Programs,
  Reviews,
  ResultsSection,
  Footer,
  KnowledgeCornerPreview,
  WhyChooseUs,
} from './components';
import { Courses, Results, Contact, KnowledgeCorner, KCLevel, KCPathway, KCClass, IgniteProgram, Super30Program } from './pages';

const HomePage = () => (
  <>
    <Hero />
    <ResultsSection />
    {/* <Reviews /> */}
    <Programs />
    <WhyChooseUs />
  </>
);

export default function App() {
  const FORM_URL = 'https://docs.google.com/forms/d/1zxaNDufaao-BNszYZOogcOGShyKDhc6iwBRkTnBh41k/viewform?edit_requested=true';
  const POPUP_IMAGE = '/pop/pop_up.jpeg';
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // Show modal on initial page load
    setShowModal(true);
  }, []);

  return (
    <BrowserRouter>
      <div className="font-sans text-slate-600 bg-white antialiased">
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex: 2147483647 }}>
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} style={{ zIndex: 2147483646 }} />
            <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-lg mx-4 text-center" style={{ zIndex: 2147483647 }}>
              <img
                src={POPUP_IMAGE}
                alt="Super30 Flyer"
                className="mx-auto mb-4 w-full max-w-md object-contain cursor-pointer"
                onClick={() => (window.location.href = FORM_URL)}
              />
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => (window.location.href = FORM_URL)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Register Now
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-slate-200 text-slate-700 px-4 py-2 rounded-md hover:bg-slate-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/knowledge-corner" element={<KnowledgeCorner />} />
          <Route path="/knowledge-corner/level" element={<KCLevel />} />
          <Route path="/knowledge-corner/pathway" element={<KCPathway />} />
          <Route path="/knowledge-corner/class" element={<KCClass />} />
          <Route path="/courses/ignite" element={<IgniteProgram />} />
          <Route path="/courses/super-30" element={<Super30Program />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}