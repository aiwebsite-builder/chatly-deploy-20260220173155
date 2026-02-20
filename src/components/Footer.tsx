import { Heart, Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-950 to-pink-950 text-gray-300 py-10 px-6 text-center">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Rocket className="text-lime-400 w-6 h-6" />
          <span className="text-xl font-semibold text-white">COSMIC BASH</span>
        </div>
        <p className="text-sm md:text-md mb-2">
          &copy; {new Date().getFullYear()} Cosmic Bash. All rights reserved.
        </p>
        <p className="text-sm md:text-md flex items-center justify-center">
          Made with <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" /> for music lovers.
        </p>
        <div className="mt-6 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
          <span className="text-gray-500">|</span>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
