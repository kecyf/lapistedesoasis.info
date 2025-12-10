'use client';

import { motion } from 'framer-motion';
import { Users, Heart, MapPin, Mountain } from 'lucide-react';

const teamMembers = [
  {
    name: 'Gilbert',
    role: 'Responsable équipe LPO',
    description: 'Coordinateur général de l\'événement depuis 2007',
    icon: Users,
    color: 'terracotta'
  },
  {
    name: 'Jean Michel',
    role: 'Balisage & Ravitaillement',
    description: 'Responsable du balisage et des points de contrôle. Toujours sur tous les fronts avec le sourire !',
    icon: MapPin,
    color: 'oasis'
  },
  {
    name: 'Godefroy',
    role: 'Médecin de la course',
    description: 'Haut en couleur et toujours disponible pour vous remettre d\'aplomb. Baroudeur dans l\'âme, il ne tarit pas d\'histoires à raconter.',
    icon: Heart,
    color: 'night'
  },
  {
    name: 'Ibrahim',
    role: 'Guide Maroc 2026',
    description: 'Natif du Haut Atlas, guide et géographe. Un puits de science sur cette région montagneuse du Maroc.',
    icon: Mountain,
    color: 'terracotta'
  }
];

const colorClasses = {
  terracotta: {
    bg: 'bg-terracotta-100',
    icon: 'text-terracotta-600',
    border: 'border-terracotta-200'
  },
  oasis: {
    bg: 'bg-oasis-100',
    icon: 'text-oasis-600',
    border: 'border-oasis-200'
  },
  night: {
    bg: 'bg-night-100',
    icon: 'text-night-600',
    border: 'border-night-200'
  }
};

export function Team() {
  return (
    <section id="team" className="py-20 bg-sand-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-terracotta-500 font-medium tracking-wider uppercase text-sm">
            Notre Équipe
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-night-900 mt-2 mb-4">
            Le Staff de la Course
          </h2>
          <p className="text-sand-600 max-w-2xl mx-auto text-lg">
            Une équipe passionnée et expérimentée qui vous accompagne 
            pour vivre une aventure inoubliable en toute sécurité.
          </p>
        </motion.div>

        {/* Cap au Sud Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg border border-sand-200 p-6 md:p-8 mb-12 max-w-3xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
            <div className="p-4 bg-gradient-to-br from-terracotta-500 to-terracotta-600 rounded-xl text-white shrink-0">
              <Mountain className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-night-900 mb-2">
                Cap au Sud-Evasion
              </h3>
              <p className="text-sand-600 mb-4">
                Agence de voyage associative depuis <strong>1992</strong>, spécialiste des voyages 
                de groupes sportifs avec plus de <strong>40 pays</strong> au catalogue.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Maroc', 'Tunisie', 'Turquie', 'Inde', 'Vietnam'].map((country) => (
                  <span 
                    key={country}
                    className="px-3 py-1 bg-sand-100 text-sand-700 rounded-full text-sm"
                  >
                    {country}
                  </span>
                ))}
              </div>
              <p className="text-xs text-sand-500 mt-4">
                N° Immatriculation : IM006120050
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            const colors = colorClasses[member.color as keyof typeof colorClasses];
            
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white rounded-xl p-6 shadow-sm border ${colors.border} hover:shadow-md transition-shadow`}
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="font-display text-xl font-semibold text-night-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-terracotta-600 font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-sand-600 text-sm">
                  {member.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

