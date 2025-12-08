"use client";

import { motion } from "framer-motion";

export function NextEdition() {
  return (
    <section id="edition" className="relative py-24 md:py-32 bg-sand-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-night-900/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block text-terracotta-500 text-sm font-medium uppercase tracking-widest mb-4">
            Prochaine Aventure
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-night-900 mb-4">
            Cap Vert 2025
          </h2>
          <p className="max-w-2xl text-lg text-sand-700">
            Sao Vicente & Santo Antao — Deux îles mythiques pour une aventure
            inoubliable entre volcans, vallées luxuriantes et villages perchés.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-sand-200 to-sand-300">
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sand-400/50 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-sand-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-sand-600">
                    Image Cap Vert à venir
                  </p>
                </div>
              </div>
            </div>

            {/* Date badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 bg-white rounded-xl shadow-warm-lg p-4">
              <div className="text-center">
                <div className="text-3xl font-heading text-terracotta-500">
                  16-23
                </div>
                <div className="text-sm font-medium text-night-800">
                  Mars 2025
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Key info cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🏃", label: "Distance", value: "+100 km" },
                { icon: "📍", label: "Étapes", value: "4 jours" },
                { icon: "👥", label: "Participants", value: "45 max" },
                { icon: "🏔️", label: "Dénivelé", value: "~5000m D+" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-warm"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm text-sand-600 mb-1">{item.label}</div>
                  <div className="text-lg font-medium text-night-900">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="prose prose-sand">
              <p className="text-sand-700 leading-relaxed">
                Pour cette 21ème édition, nous retournons au Cap Vert, archipel
                volcanique au large du Sénégal. Après Fogo en 2013 et 2017,
                découvrez <strong>Sao Vicente</strong> et sa voisine{" "}
                <strong>Santo Antao</strong>, surnommée "l'île verte" pour ses
                vallées luxuriantes.
              </p>
              <p className="text-sand-700 leading-relaxed">
                Un parcours exceptionnel entre crêtes volcaniques, sentiers
                muletiers ancestraux et villages suspendus. Le tout dans une
                ambiance conviviale, en petits groupes.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#inscription"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta-500 px-8 py-4 text-base font-medium text-white transition-all hover:bg-terracotta-600 hover:scale-105"
              >
                Réserver ma place
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#programme"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-sand-300 px-8 py-4 text-base font-medium text-night-800 transition-all hover:border-terracotta-500 hover:text-terracotta-600"
              >
                Voir le programme détaillé
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

