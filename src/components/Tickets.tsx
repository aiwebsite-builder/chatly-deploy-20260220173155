import { Ticket, CreditCard, Gift, ArrowRight } from 'lucide-react';

const ticketTiers = [
  {
    name: 'Cosmic Voyager',
    price: '$99',
    description: 'General Admission for one day. Access to all stages.',
    features: ['One-day access', 'Main stage access', 'Food & Drink vendors'],
    accent: 'border-lime-400',
    buttonColor: 'bg-lime-500 hover:bg-lime-600',
  },
  {
    name: 'Galaxy Explorer',
    price: '$179',
    description: 'Full weekend General Admission. Best value!',
    features: ['Two-day access', 'Main & Secondary stages', 'Exclusive merch discount'],
    accent: 'border-pink-400',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
  },
  {
    name: 'Starlight VIP',
    price: '$349',
    description: 'Elevate your experience with VIP perks for the full weekend.',
    features: ['Two-day VIP access', 'Dedicated VIP areas', 'Express entry', 'Premium restrooms', 'Complimentary drinks'],
    accent: 'border-sky-400',
    buttonColor: 'bg-sky-500 hover:bg-sky-600',
  },
];

export default function Tickets() {
  return (
    <section id="tickets" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-purple-950 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-lime-400 drop-shadow-md animate-fade-in-down">
          Get Your Tickets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ticketTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`bg-purple-800/70 rounded-xl shadow-2xl p-8 flex flex-col items-center text-center border-t-8 ${tier.accent} transition-all duration-300 transform hover:scale-105 group animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Ticket className={`w-16 h-16 mb-6 text-${tier.accent.split('-')[1]}-400 group-hover:scale-110 transition-transform`} />
              <h3 className="text-4xl font-extrabold mb-3 text-white group-hover:text-lime-400 transition-colors duration-300">
                {tier.name}
              </h3>
              <p className="text-lg text-gray-300 mb-4">{tier.description}</p>
              <p className="text-6xl font-extrabold text-white mb-6">
                {tier.price}
                <span className="text-xl font-medium text-gray-400">/per person</span>
              </p>
              <ul className="text-lg text-gray-200 space-y-3 mb-8 text-left w-full max-w-xs">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <ArrowRight className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto px-10 py-4 ${tier.buttonColor} text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 group`}
              >
                <span>Select {tier.name}</span>
                <CreditCard className="w-6 h-6 group-hover:rotate-6 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-in-up delay-600">
          <p className="text-xl text-gray-300 mb-6">
            Looking for group discounts or have questions?
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto space-x-3">
            <span>Contact Sales</span>
            <Gift className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
