import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Process from './components/Process';
import Results from './components/Results';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#060d1a', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Results />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
