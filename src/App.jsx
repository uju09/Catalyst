import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  AnnouncementBar,
  Navbar,
  Hero,
  Programs,
  Features,
  Reviews,
  Results as ResultsSection,
  Footer,
  KnowledgeCornerPreview,
} from './components';
import { Courses, Results, Contact, KnowledgeCorner } from './pages';

const HomePage = () => (
  <>
    <Hero />
    <Programs />
    <Reviews />
    <Features />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-slate-600 bg-white antialiased">
        <AnnouncementBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/knowledge-corner" element={<KnowledgeCorner />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}