import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-pink-900 to-purple-900 text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-lime-400 drop-shadow-md animate-fade-in-down">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="flex items-center space-x-4 p-4 bg-purple-800/50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Mail className="w-8 h-8 text-pink-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white">Email Us</h3>
                <p className="text-lg text-gray-300">info@cosmicbash.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-purple-800/50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Phone className="w-8 h-8 text-lime-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white">Call Us</h3>
                <p className="text-lg text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-purple-800/50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <MapPin className="w-8 h-8 text-sky-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white">Visit Us</h3>
                <p className="text-lg text-gray-300">Starlight Arena, 123 Galaxy Ave, Galaxy City</p>
              </div>
            </div>

            <div className="flex justify-start space-x-6 pt-4">
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github size={30} />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={30} />
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-purple-800/70 p-8 rounded-xl shadow-2xl animate-fade-in-right">
            <h3 className="text-3xl font-bold mb-6 text-white text-center">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-200 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none text-white transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-200 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none text-white transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-200 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none text-white transition-colors duration-200 resize-y"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
