import { User, Star } from 'lucide-react';

const artists = [
  { name: 'Astro Beats', genre: 'Progressive House', image: 'https://source.unsplash.com/random/300x300/?dj' },
  { name: 'Nebula Nova', genre: 'Synthwave / Retro', image: 'https://source.unsplash.com/random/301x301/?singer' },
  { name: 'Gravity Groove', genre: 'Psychedelic Trance', image: 'https://source.unsplash.com/random/302x302/?band' },
  { name: 'Solar Flare', genre: 'Deep House', image: 'https://source.unsplash.com/random/303x303/?dj-female' },
  { name: 'Lunar Echoes', genre: 'Ambient / Chillwave', image: 'https://source.unsplash.com/random/304x304/?artist' },
  { name: 'Quantum Harmonics', genre: 'Techno', image: 'https://source.unsplash.com/random/305x305/?music' },
];

export default function Lineup() {
  return (
    <section id="lineup" className="py-20 px-6 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-lime-400 drop-shadow-md animate-fade-in-down">
          The Cosmic Lineup
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {artists.map((artist, index) => (
            <div
              key={artist.name}
              className="bg-purple-800/60 rounded-xl shadow-xl p-6 flex flex-col items-center text-center border border-purple-700/50 hover:border-lime-400 transition-all duration-300 transform hover:scale-105 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-lime-400 group-hover:border-pink-400 transition-colors duration-300 relative">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-lime-400 transition-colors duration-300">
                {artist.name}
              </h3>
              <p className="text-lg text-gray-300 font-medium">{artist.genre}</p>
              <div className="mt-4 flex space-x-2 text-pink-400">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <button className="mt-6 px-6 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                View Profile
              </button>
            </div>
          ))}
        </div>
        <p className="mt-16 text-2xl text-center font-bold text-gray-300 animate-fade-in-up delay-800">
          More artists to be announced soon! Stay tuned for updates.
        </p>
      </div>
    </section>
  );
}
