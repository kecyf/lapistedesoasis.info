"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

export function NextEdition() {
  return (
    <section id="next-edition" className="relative py-24 md:py-32 bg-sand-50">
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
            Maroc 2026 — La Vallée Heureuse
          </h2>
          <p className="max-w-2xl text-lg text-sand-700">
            Haut Atlas Central — Découvrez un Maroc authentique, une vie montagnarde 
            locale et des espaces préservés dans la région d'Aït Bouguemez.
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
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-terracotta-200 to-sand-300">
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-terracotta-400/30 flex items-center justify-center">
                    <span className="text-4xl">🇲🇦</span>
                  </div>
                  <p className="text-sm text-terracotta-700 font-medium">
                    Haut Atlas Central
                  </p>
                  <p className="text-xs text-sand-600 mt-1">
                    Image à venir
                  </p>
                </div>
              </div>
            </div>

            {/* Date badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 bg-white rounded-xl shadow-warm-lg p-4">
              <div className="text-center">
                <div className="text-3xl font-heading text-terracotta-500">
                  2026
                </div>
                <div className="text-sm font-medium text-night-800">
                  22ème édition
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
                { icon: "🏔️", label: "Région", value: "Haut Atlas" },
                { icon: "📍", label: "Étapes", value: "4 jours" },
                { icon: "👥", label: "Places", value: "10 restantes" },
                { icon: "🏃", label: "Niveau", value: "Accessible" },
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
                Cette nouvelle édition de la Piste des Oasis, la 22ème, se propose 
                différente, plus <strong>'voyage'</strong>, pour vous faire découvrir 
                crescendo cette région peu connue dans une des parties les plus hautes 
                du Haut Atlas central.
              </p>
              <p className="text-sand-700 leading-relaxed">
                <strong>La Vallée Heureuse</strong> (Aït Bouguemez), le but final, qui se mérite. 
                L'aspect traditionnel Berbère conservé dans ces espaces d'altitude offre 
                une excellente raison de découvrir un Maroc authentique, une vie montagnarde 
                locale, des espaces préservés.
              </p>
              <p className="text-sand-600 text-sm italic">
                Ce sera, après le prologue d'acclimatation, la traversée d'un massif 
                avec 2 étapes pour monter et traverser des plateaux d'altitude avant de 
                découvrir enfin la Vallée Heureuse.
              </p>
            </div>

            {/* Alert */}
            <div className="bg-terracotta-50 border border-terracotta-200 rounded-xl p-4">
              <p className="text-terracotta-800 text-sm font-medium">
                ⚠️ Il reste seulement 10 places pour cette édition !
              </p>
              <p className="text-terracotta-600 text-sm mt-1">
                La réservation de place par mail est ouverte aux tarifs indiqués sur la fiche programme.
              </p>
            </div>

            {/* Documents */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-night-800">Documents à télécharger :</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/files/programme-maroc-2026.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-sand-300 bg-white px-4 py-3 text-sm font-medium text-night-800 transition-all hover:border-terracotta-500 hover:text-terracotta-600"
                >
                  <FileText className="w-4 h-4" />
                  Le pré-programme avec les informations nécessaires
                </a>
                <a
                  href="/files/inscription-maroc-2026.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-sand-300 bg-white px-4 py-3 text-sm font-medium text-night-800 transition-all hover:border-terracotta-500 hover:text-terracotta-600"
                >
                  <Download className="w-4 h-4" />
                  Inscription pour la LPO Maroc Haut Atlas 2026
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:capsud.evasion@gmail.com?subject=Inscription LPO Maroc 2026"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
