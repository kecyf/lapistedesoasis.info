"use client";

import { motion } from "framer-motion";

const editions = [
  // Future editions
  { year: 2028, destination: "Pistes d'Essaouira", country: "🇲🇦", status: "future", note: "Le retour" },
  { year: 2027, destination: "Mongolie", country: "🇲🇳", status: "future" },
  { year: 2026, destination: "Maroc - Haut Atlas", country: "🇲🇦", status: "upcoming", note: "La Vallée Heureuse" },
  // Past editions
  { year: 2025, destination: "Cap Vert", country: "🇨🇻", status: "past" },
  { year: 2024, destination: "Tunisie", country: "🇹🇳", status: "past" },
  { year: 2017, destination: "Mongolie", country: "🇲🇳", status: "past" },
  { year: 2016, destination: "Mongolie", country: "🇲🇳", status: "past" },
  { year: 2015, destination: "Croatie", country: "🇭🇷", status: "past" },
  { year: 2015, destination: "Açores", country: "🇵🇹", status: "past" },
  { year: 2014, destination: "Vietnam", country: "🇻🇳", status: "past" },
  { year: 2013, destination: "Cap Vert", country: "🇨🇻", status: "past" },
  { year: 2012, destination: "Sénégal", country: "🇸🇳", status: "past" },
  { year: 2011, destination: "Égypte", country: "🇪🇬", status: "past" },
  { year: 2010, destination: "Cappadoce", country: "🇹🇷", status: "past" },
  { year: 2009, destination: "Maroc", country: "🇲🇦", status: "past" },
  { year: 2008, destination: "Tunisie", country: "🇹🇳", status: "past" },
  { year: 2007, destination: "Tunisie", country: "🇹🇳", status: "past" },
];

export function Editions() {
  return (
    <section id="editions" className="relative py-24 md:py-32 bg-sand-100">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-oasis-600 text-sm font-medium uppercase tracking-widest mb-4">
            19 Ans d'Aventure
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-night-900 mb-4">
            Calendrier 2025 - 2026 - 2027
          </h2>
          <p className="max-w-2xl mx-auto text-sand-600 text-lg">
            Depuis 2007, La Piste des Oasis a traversé les plus beaux paysages
            du monde. Voici notre calendrier et notre histoire.
          </p>
        </motion.div>

        {/* Future Editions Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-sm font-medium uppercase tracking-widest text-terracotta-600 mb-6 text-center">
            Prochaines éditions
          </h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {editions.filter(e => e.status === 'upcoming' || e.status === 'future').map((edition, index) => (
              <motion.div
                key={`${edition.year}-${edition.destination}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl text-center ${
                  edition.status === 'upcoming' 
                    ? 'bg-gradient-to-br from-terracotta-500 to-terracotta-600 text-white shadow-lg' 
                    : 'bg-white border-2 border-dashed border-sand-300'
                }`}
              >
                {edition.status === 'upcoming' && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-oasis-500 text-white text-xs font-bold rounded-full">
                    INSCRIPTIONS OUVERTES
                  </span>
                )}
                <span className="text-4xl mb-3 block">{edition.country}</span>
                <div className={`text-2xl font-heading mb-1 ${edition.status === 'upcoming' ? 'text-white' : 'text-night-900'}`}>
                  {edition.year}
                </div>
                <div className={`font-medium ${edition.status === 'upcoming' ? 'text-white/90' : 'text-sand-700'}`}>
                  {edition.destination}
                </div>
                {edition.note && (
                  <div className={`text-sm mt-1 ${edition.status === 'upcoming' ? 'text-white/70' : 'text-sand-500'}`}>
                    {edition.note}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline - Past editions */}
        <div className="relative">
          <h3 className="text-sm font-medium uppercase tracking-widest text-oasis-600 mb-8 text-center">
            Éditions passées
          </h3>

          {/* Center line */}
          <div className="absolute left-1/2 top-16 bottom-0 w-px bg-sand-300 hidden md:block" />

          <div className="space-y-6">
            {editions.filter(e => e.status === 'past').map((edition, index) => (
              <motion.div
                key={`${edition.year}-${edition.destination}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div
                    className="inline-flex items-center gap-4 p-4 rounded-xl bg-white shadow-warm hover:shadow-warm-lg transition-shadow"
                  >
                    <span className="text-3xl">{edition.country}</span>
                    <div className={index % 2 === 0 ? "md:text-right" : ""}>
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-xl text-night-900">
                          {edition.destination}
                        </span>
                      </div>
                      <span className="text-sand-500 text-sm">
                        {edition.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full border-4 border-sand-100 bg-oasis-500" />
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sand-600">
            Et d'autres destinations explorées :{" "}
            <span className="text-night-800 font-medium">
              Jordanie, Namibie, Birmanie, Grèce, Inde...
            </span>
          </p>
        </motion.div>

        {/* Note about Essaouira */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-2xl mx-auto text-center"
        >
          <div className="bg-white rounded-xl p-6 shadow-warm border border-sand-200">
            <p className="text-sand-600 text-sm">
              <strong className="text-night-800">Note :</strong> Les "Pistes d'Essaouira" 
              (Maroc, 5J de voyage) ont été remplacées en 2025/2026 par l'édition du Haut Atlas. 
              Cette formule facile, abordable et très appréciée par les clubs et tribus 
              sera reprogrammée pour 2028.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
