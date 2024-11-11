import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';

import { Routes, Route } from 'react-router-dom';

import About from './components/about/About';
import ExploreTour from './components/uslugi/Uslugi.jsx';
import Footer from './components/footer/Footer';
import Home from './components/home-item/Home.jsx';
import Navbar from "./components/navbar/Navbar";
import HeroSection from './components/heroSection/HeroSection.jsx';
import BlogDetails from './components/blog-details/BlogDetails.jsx';
import BlogCard from './components/blog-card/BlogCard.jsx';
import ContactPage from './components/sections/contactPage.jsx';
import BackToTop from './components/back-to-top/BackToTop.jsx';
// import TestNavbar from './components/testNavbar/TestNavbar.jsx';

// Import error handling components
import ErrorBoundary from './error/ErrorBoundary'; // Import ErrorBoundary
import Transport from './components/Transportt/Transport.jsx';

function App() {
  return (
    <>
      <Navbar />
      <BackToTop />

      {/* Wrap Routes with ErrorBoundary to catch errors globally */}
      <ErrorBoundary>
        <Routes>
          {/* Define routes directly without public/private wrappers */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/uslugi" element={<ExploreTour />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/blog" element={<BlogCard />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/details/:id" element={<BlogDetails />} />
          <Route path="/hero/:id" element={<HeroSection />} />
          {/* Additional routes */}
        </Routes>
      </ErrorBoundary>

      <Footer /> {/* Footer will stay at the bottom of all pages */}
    </>
  );
}

export default App;
