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
import { Courses, Results, Contact, KnowledgeCorner, KCLevel, KCPathway, KCClass, IgniteProgram, Super13Program } from './pages';

const HomePage = () => (
  <>
    <Hero />
    <Reviews />
    <Programs />
    <Features />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-slate-600 bg-white antialiased">
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
          <Route path="/courses/super-13" element={<Super13Program />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}