import { ArrowRightCircle, Sparkle } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?nightsky,nebula')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-950/60 to-pink-950/70"></div>
      </div>

      <div className="relative z-10 p-8 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-white drop-shadow-lg animate-text-gradient bg-gradient-to-r from-lime-400 via-sky-400 to-pink-500 bg-clip-text text-transparent">
          COSMIC BASH
        </h1>
        <p className="text-2xl md:text-3xl font-light text-gray-200 animate-fade-in-up delay-200">
          An Interstellar Music Experience
        </p>
        <p className="text-xl md:text-2xl font-medium text-lime-400 animate-fade-in-up delay-400">
          August 17-18, 2024 &bull; Starlight Arena, Galaxy City
        </p>
        <button
          onClick={() => scrollToSection('tickets')}
          className="mt-8 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 group animate-pulse-fade"
        >
          <span>Get Your Tickets Now</span>
          <ArrowRightCircle className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
