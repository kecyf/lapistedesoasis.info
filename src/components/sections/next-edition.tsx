"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, Users, Mountain, Euro, Plane, Moon, ChevronRight } from "lucide-react";
import { MarocGallery } from "@/components/sections/maroc-preview";

const stages = [
  { day: 1, name: "France → Marrakech", type: "travel", desc: "Accueil aéroport, installation riad" },
  { day: 2, name: "Prologue - Tillouguite", type: "run", km: 13, elevation: "±450m", desc: "Acclimatation, sentiers muletiers" },
  { day: 3, name: "Montée Taourarate", type: "run", km: 19, elevation: "+770m", desc: "Plateaux d'altitude, bivouac 2300m" },
  { day: 4, name: "Étape Reine → Asm Souk", type: "run", km: 21, elevation: "+750m/-850m", desc: "3 cols, point culminant 2500m" },
  { day: 5, name: "Vallée Heureuse", type: "run", km: 16, elevation: "+140m", desc: "Aït Bouguemez, villages berbères" },
  { day: 6, name: "Retour Marrakech", type: "visit", desc: "Visites libres, médina, souks" },
  { day: 7, name: "Départ", type: "travel", desc: "Vol retour" },
];

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
          className="mb-12"
        >
          <span className="inline-block text-terracotta-500 text-sm font-medium uppercase tracking-widest mb-4">
            22ème Édition • 30 Mai - 5 Juin 2026
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-night-900 mb-4">
            Maroc — La Vallée Heureuse
          </h2>
          <p className="max-w-3xl text-lg text-sand-700">
            Haut Atlas Central • Une aventure unique, plus "voyage", pour découvrir crescendo 
            cette région peu connue dans une des parties les plus hautes du Haut Atlas. 
            La Vallée Heureuse (Aït Bouguemez), le but final, qui se mérite.
          </p>
        </motion.div>

        {/* Key Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12"
        >
          {[
            { icon: Calendar, label: "Dates", value: "30/05 - 05/06", sub: "7J / 6N" },
            { icon: Mountain, label: "Total", value: "69 km", sub: "4 étapes" },
            { icon: MapPin, label: "Altitude max", value: "2500m", sub: "Haut Atlas" },
            { icon: Euro, label: "À partir de", value: "890€", sub: "groupe" },
            { icon: Users, label: "Places", value: "10", sub: "restantes" },
            { icon: Moon, label: "Bivouac", value: "1 nuit", sub: "incluse" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-warm text-center"
            >
              <item.icon className="w-5 h-5 text-terracotta-500 mx-auto mb-2" />
              <div className="text-xs text-sand-500 uppercase tracking-wider">{item.label}</div>
              <div className="text-xl font-heading text-night-900">{item.value}</div>
              <div className="text-xs text-sand-600">{item.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Maroc 2026 gallery (merged into this section) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <MarocGallery className="max-w-6xl mx-auto" />
        </motion.div>

        {/* Two columns: Programme + Details */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Programme Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="font-heading text-xl text-night-900 mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-terracotta-500" />
              Programme des 7 jours
            </h3>
            
            <div className="space-y-3">
              {stages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-start gap-4 p-4 rounded-xl ${
                    stage.type === 'run' 
                      ? 'bg-white shadow-warm border-l-4 border-terracotta-500' 
                      : 'bg-sand-100'
                  }`}
                >
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    stage.type === 'run' 
                      ? 'bg-terracotta-500 text-white' 
                      : 'bg-sand-300 text-sand-700'
                  }`}>
                    J{stage.day}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-medium text-night-900">{stage.name}</span>
                      {stage.km && (
                        <span className="px-2 py-0.5 bg-terracotta-100 text-terracotta-700 text-xs rounded-full font-medium">
                          {stage.km} km
                        </span>
                      )}
                      {stage.elevation && (
                        <span className="px-2 py-0.5 bg-oasis-100 text-oasis-700 text-xs rounded-full">
                          {stage.elevation}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-sand-600 mt-1">{stage.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Marcheurs option */}
            <div className="mt-4 p-4 bg-oasis-50 rounded-xl border border-oasis-200">
              <p className="text-sm text-oasis-800">
                <strong>Option Marcheurs :</strong> 49 km total avec 4 étapes de 9 à 14 km. 
                Mêmes parcours raccourcis, même aventure !
              </p>
            </div>
          </motion.div>

          {/* Right: Details & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Highlights */}
            <div className="bg-white rounded-xl p-6 shadow-warm">
              <h4 className="font-heading text-lg text-night-900 mb-4">Ce qui vous attend</h4>
              <ul className="space-y-3 text-sm">
                {[
                  "Maroc authentique, vie montagnarde locale",
                  "Aspect traditionnel Berbère préservé",
                  "1 nuit bivouac sous les étoiles à 2300m",
                  "Équipe locale francophone",
                  "Pension complète du J1 au J7",
                  "Visites libres à Marrakech",
                  "Vêtement technique LPO offert",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-terracotta-500 shrink-0 mt-0.5" />
                    <span className="text-sand-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Departure cities */}
            <div className="bg-sand-100 rounded-xl p-6">
              <h4 className="font-heading text-lg text-night-900 mb-3 flex items-center gap-2">
                <Plane className="w-4 h-4 text-terracotta-500" />
                Villes de départ
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Paris', 'Lyon', 'Nice', 'Toulouse'].map((city) => (
                  <span key={city} className="px-3 py-1 bg-white rounded-full text-sm text-sand-700">
                    {city}
                  </span>
                ))}
              </div>
              <p className="text-xs text-sand-500 mt-3">
                Vols en option (~170€) • Arrivée Marrakech 17h30-18h30
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-br from-terracotta-500 to-terracotta-600 rounded-xl p-6 text-white">
              <h4 className="font-heading text-lg mb-4">Tarifs</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/80">Groupe (20-25 pers.)</span>
                  <span className="font-bold">890€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Individuel</span>
                  <span className="font-bold">920€</span>
                </div>
                <div className="flex justify-between text-white/70 text-xs">
                  <span>Chambre indiv. Marrakech</span>
                  <span>+48€</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 text-xs text-white/70">
                Tarifs garantis jusqu'au 31/10/2025
              </div>
            </div>

            {/* Alert */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800 text-sm font-medium">
                ⚠️ Seulement 10 places restantes !
              </p>
              <p className="text-amber-700 text-xs mt-1">
                Acompte de 300€ à l'inscription
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <Link
                href="/inscription"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-night-900 px-6 py-4 text-base font-medium text-white transition-all hover:bg-night-800 hover:scale-[1.02]"
              >
                Je m&apos;inscris
                <ChevronRight className="w-5 h-5" />
              </Link>
              <p className="text-center text-xs text-sand-500">
                Contact : capsud.evasion@gmail.com • 04 93 14 02 94
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
