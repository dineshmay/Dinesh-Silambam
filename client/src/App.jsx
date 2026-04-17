import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import VideoSection from './components/VideoSection.jsx';
import About from './components/About.jsx';
import Training from './components/Training.jsx';
import Tournaments from './components/Tournaments.jsx';
import Students from './components/Students.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import SocialBar from './components/SocialBar.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoSection />
      <About />
      <Training />
      <Tournaments />
      <Students />
      <Contact />
      <Footer />
      <SocialBar />
    </>
  );
}
