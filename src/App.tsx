import { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Lineup from './components/Lineup';
import Tickets from './components/Tickets';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // State is not directly used for routing but can be for highlighting active nav item

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setCurrentPage(id); // Update state to reflect current section
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-pink-950 text-white font-sans antialiased overflow-x-hidden">
      <Header scrollToSection={scrollToSection} />

      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Lineup />
        <Tickets />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}