import { Calendar, MapPin, Music } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-lime-400 drop-shadow-md animate-fade-in-down">
          About The Event
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-purple-800/50 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-left">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-pink-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-3 text-white">When</h3>
            <p className="text-lg text-gray-200">August 17-18, 2024</p>
            <p className="text-md text-gray-400 mt-1">Gates open 5:00 PM daily</p>
          </div>

          <div className="p-6 bg-purple-800/50 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-up delay-200">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-lime-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-3 text-white">Where</h3>
            <p className="text-lg text-gray-200">Starlight Arena</p>
            <p className="text-md text-gray-400 mt-1">123 Galaxy Ave, Galaxy City</p>
          </div>

          <div className="p-6 bg-purple-800/50 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-right delay-400">
            <Music className="w-16 h-16 mx-auto mb-4 text-sky-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-3 text-white">What</h3>
            <p className="text-lg text-gray-200">Two days of incredible music, art, and cosmic vibes!</p>
            <p className="text-md text-gray-400 mt-1">Featuring top-tier DJs and live bands.</p>
          </div>
        </div>

        <p className="mt-16 text-xl text-gray-300 leading-relaxed text-center animate-fade-in-up delay-600">
          Prepare for an immersive journey through sound and light at Cosmic Bash!
          Join us for two unforgettable nights featuring a curated lineup of
          electronic artists and live bands. Experience stunning visuals, interactive
          art installations, and a community of music lovers under the stars.
        </p>
      </div>
    </section>
  );
}
