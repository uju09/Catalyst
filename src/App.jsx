import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  AnnouncementBar,
  Navbar,
  Hero,
  Programs,
  Features,
  Results as ResultsSection,
  Footer,
} from './components';
import { Courses, Results, Contact } from './pages';

const HomePage = () => (
  <>
    <Hero />
    <Programs />
    <Features />
    <ResultsSection />
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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}