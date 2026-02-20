import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Lineup', id: 'lineup' },
    { name: 'Tickets', id: 'tickets' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-900/80 to-pink-900/80 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Rocket className="text-lime-400 w-8 h-8 animate-bounce" />
          <span className="text-2xl font-extrabold text-white tracking-wider">
            COSMIC BASH
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white text-lg font-semibold hover:text-lime-400 transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-lime-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-purple-900/90 py-4 absolute w-full left-0 right-0 shadow-lg animate-fade-in-down">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className="text-white text-xl font-medium hover:text-lime-400 transition-colors duration-300"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
