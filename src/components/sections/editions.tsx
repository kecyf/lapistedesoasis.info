"use client";

import { motion } from "framer-motion";

const editions = [
  { year: 2025, destination: "Cap Vert", country: "🇨🇻", status: "upcoming" },
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
            18 Ans d'Aventure
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-night-900 mb-4">
            Toutes nos éditions
          </h2>
          <p className="max-w-2xl mx-auto text-sand-600 text-lg">
            Depuis 2007, La Piste des Oasis a traversé les plus beaux paysages
            du monde. Retour sur notre histoire.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-sand-300 hidden md:block" />

          <div className="space-y-8">
            {editions.map((edition, index) => (
              <motion.div
                key={`${edition.year}-${edition.destination}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
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
                    className={`inline-flex items-center gap-4 p-4 rounded-xl bg-white shadow-warm hover:shadow-warm-lg transition-shadow ${
                      edition.status === "upcoming"
                        ? "ring-2 ring-terracotta-500"
                        : ""
                    }`}
                  >
                    <span className="text-3xl">{edition.country}</span>
                    <div className={index % 2 === 0 ? "md:text-right" : ""}>
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-xl text-night-900">
                          {edition.destination}
                        </span>
                        {edition.status === "upcoming" && (
                          <span className="px-2 py-0.5 rounded-full bg-terracotta-500 text-white text-xs font-medium">
                            2025
                          </span>
                        )}
                      </div>
                      <span className="text-sand-500 text-sm">
                        {edition.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full border-4 border-sand-100 ${
                      edition.status === "upcoming"
                        ? "bg-terracotta-500"
                        : "bg-oasis-500"
                    }`}
                  />
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
      </div>
    </section>
  );
}

