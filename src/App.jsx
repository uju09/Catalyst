import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  AnnouncementBar,
  Navbar,
  Hero,
  Programs,
  Features,
  Results,
  Footer,
  Courses
} from './components';

const HomePage = () => (
  <>
    <Hero />
    <Programs />
    <Features />
    <Results />
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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}