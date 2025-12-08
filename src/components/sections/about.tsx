"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Aventure Authentique",
    description:
      "Des parcours hors des sentiers battus, au cœur de paysages grandioses et de cultures vivantes.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Petits Groupes",
    description:
      "Maximum 45 participants pour garantir une expérience conviviale et un encadrement de qualité.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Sport & Bien-être",
    description:
      "Un défi sportif accessible qui allie course, marche et récupération dans des cadres exceptionnels.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Depuis 2007",
    description:
      "18 ans d'expérience, 21 éditions, 12 destinations. Une organisation rodée et passionnée.",
  },
];

export function About() {
  return (
    <section id="histoire" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-sand" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(196 165 116 / 0.3) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-oasis-600 text-sm font-medium uppercase tracking-widest mb-4">
              Notre Histoire
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-night-900 mb-6">
              Plus qu'une course,
              <br />
              <span className="text-terracotta-500">une aventure humaine</span>
            </h2>
            <div className="space-y-4 text-sand-700 text-lg">
              <p>
                Née en 2007 d'une passion pour les grands espaces et la course à
                pied, <strong>La Piste des Oasis</strong> propose chaque année
                un trail à étapes unique dans les plus beaux déserts du monde.
              </p>
              <p>
                De la Tunisie au Cap Vert, du Maroc à la Mongolie, nous avons
                parcouru des milliers de kilomètres avec des centaines de
                participants devenus amis.
              </p>
              <p>
                Notre philosophie ? Un format{" "}
                <strong>accessible à tous les niveaux</strong>, où l'on peut
                courir ou marcher selon son rythme, tout en vivant une aventure
                collective inoubliable.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#temoignages"
                className="inline-flex items-center gap-2 text-terracotta-600 font-medium hover:text-terracotta-700 transition-colors"
              >
                Lire les témoignages
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

          {/* Right: Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-6 shadow-warm hover:shadow-warm-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-oasis-500/10 flex items-center justify-center text-oasis-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-xl text-night-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sand-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline/Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <h3 className="font-heading text-2xl text-night-900 text-center mb-12">
            Nos Destinations
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Tunisie",
              "Maroc",
              "Égypte",
              "Sénégal",
              "Cap Vert",
              "Mongolie",
              "Turquie",
              "Jordanie",
              "Oman",
            ].map((destination, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sand-200 text-night-800 text-sm font-medium shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-terracotta-400" />
                {destination}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

