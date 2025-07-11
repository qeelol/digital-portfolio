import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import AxifyProjectPage from './pages/projects/AxifyProjectPage';
import PortfolioProjectPage from './pages/projects/PortfolioProjectPage';
import RewwwindProjectPage from './pages/projects/RewwwindProjectPage';
import VelvetOasisHotelProjectPage from './pages/projects/VelvetOasisHotelProjectPage';
import EclipseoftheVioletKnightProjectPage from './pages/projects/EclipseoftheVioletKnightProjectPage';
import Journey from './pages/Journey';
import Blog from './pages/Blog';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/axify" element={<AxifyProjectPage />} />
          <Route path="/projects/portfolio" element={<PortfolioProjectPage />} />
          <Route path="/projects/rewwwind" element={<RewwwindProjectPage />} />
          <Route path="/projects/velvet-oasis-hotel" element={<VelvetOasisHotelProjectPage />} />
          <Route path="/projects/eclipse-of-the-violet-knight" element={<EclipseoftheVioletKnightProjectPage />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/photos" element={<Blog />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App;
