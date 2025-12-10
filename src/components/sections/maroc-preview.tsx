'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, MapPin, Mountain } from 'lucide-react';

const marocPhotos = [
  { 
    src: '/trail-maroc-2026/muletier-sentier-village.jpg', 
    alt: 'Muletier sur un sentier avec village berbère en arrière-plan' 
  },
  { 
    src: '/trail-maroc-2026/village-flanc-montagne.jpg', 
    alt: 'Village berbère à flanc de montagne avec oliveraie' 
  },
  { 
    src: '/trail-maroc-2026/falaises-rouges-vallee.jpg', 
    alt: 'Falaises rouges spectaculaires de la vallée' 
  },
  { 
    src: '/trail-maroc-2026/roses-village-atlas.jpg', 
    alt: 'Roses au premier plan avec village du Haut Atlas' 
  },
  { 
    src: '/trail-maroc-2026/ruelle-village-berbere.jpg', 
    alt: 'Ruelle traditionnelle dans un village berbère' 
  },
  { 
    src: '/trail-maroc-2026/maison-terrasse-vie-locale.jpg', 
    alt: 'Maison berbère avec toit terrasse et vie locale' 
  },
  { 
    src: '/trail-maroc-2026/village-colore-vallee.jpg', 
    alt: 'Village coloré niché dans la vallée verdoyante' 
  },
  { 
    src: '/trail-maroc-2026/village-berbere-haut-atlas.jpg', 
    alt: 'Village berbère traditionnel du Haut Atlas' 
  },
  { 
    src: '/trail-maroc-2026/vallee-terrasses-verdoyantes.jpg', 
    alt: 'Vallée aux terrasses verdoyantes' 
  },
  { 
    src: '/trail-maroc-2026/anes-terrasses-montagne.jpg', 
    alt: 'Ânes sur les terrasses avec montagnes en fond' 
  },
];

export function MarocPreview() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);
  
  const goNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % marocPhotos.length);
    }
  }, [selectedIndex]);
  
  const goPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + marocPhotos.length) % marocPhotos.length);
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'Escape') closeLightbox();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, goNext, goPrev, closeLightbox]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedIndex]);

  return (
    <section id="maroc-preview" className="py-16 md:py-24 bg-gradient-to-b from-sand-50 to-sand-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-terracotta-100 text-terracotta-700 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            <span>Haut Atlas Central</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-night-900 mb-4">
            Découvrez le Maroc 2026
          </h2>
          <p className="text-sand-600 max-w-2xl mx-auto text-base md:text-lg">
            La Vallée Heureuse d'Aït Bouguemez vous attend. Villages berbères authentiques, 
            paysages à couper le souffle et sentiers d'exception.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 md:mb-14"
        >
          {[
            { label: 'Altitude max', value: '2800m', icon: Mountain },
            { label: 'Étapes', value: '4', icon: MapPin },
            { label: 'Distance', value: '69km', icon: MapPin },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="p-2 bg-terracotta-100 rounded-lg">
                <stat.icon className="w-5 h-5 text-terracotta-600" />
              </div>
              <div>
                <p className="font-display font-bold text-night-900 text-lg">{stat.value}</p>
                <p className="text-sand-500 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Photo Grid - Masonry style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          {/* Large feature - muletier */}
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-2 relative aspect-[4/3] md:aspect-square cursor-pointer group overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2"
            onClick={() => setSelectedIndex(0)}
            aria-label={`Voir ${marocPhotos[0].alt}`}
          >
            <Image
              src={marocPhotos[0].src}
              alt={marocPhotos[0].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-900/70 via-night-900/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <p className="text-white/90 text-sm md:text-base font-medium">
                Sur les sentiers du Haut Atlas
              </p>
            </div>
          </motion.button>

          {/* Grid items */}
          {marocPhotos.slice(1, 5).map((photo, index) => (
            <motion.button
              key={photo.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2"
              onClick={() => setSelectedIndex(index + 1)}
              aria-label={`Voir ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          ))}

          {/* Bottom row - 4 smaller items */}
          {marocPhotos.slice(5, 9).map((photo, index) => (
            <motion.button
              key={photo.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2"
              onClick={() => setSelectedIndex(index + 5)}
              aria-label={`Voir ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          ))}

          {/* Last photo with "more" overlay */}
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2 hidden md:block"
            onClick={() => setSelectedIndex(9)}
            aria-label={`Voir ${marocPhotos[9].alt}`}
          >
            <Image
              src={marocPhotos[9].src}
              alt={marocPhotos[9].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </div>

        {/* Credit */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sand-500 text-xs md:text-sm mt-6"
        >
          📸 Photos de repérage • Vallée d'Aït Bouguemez
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Galerie Maroc 2026"
            className="fixed inset-0 z-50 bg-night-900/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Fermer la galerie"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-2 md:left-4 z-10 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-2 md:right-4 z-10 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Photo suivante"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-[80vh] mx-4 md:mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={marocPhotos[selectedIndex].src}
                alt={marocPhotos[selectedIndex].alt}
                width={1200}
                height={800}
                className="object-contain max-h-[70vh] md:max-h-[75vh] rounded-lg"
                priority
              />
              <div className="text-center mt-3 md:mt-4 px-4">
                <p className="text-white/80 text-xs md:text-sm mb-1">
                  {marocPhotos[selectedIndex].alt}
                </p>
                <p className="text-white/50 text-xs hidden md:block">
                  {selectedIndex + 1} / {marocPhotos.length} • ← → pour naviguer • Échap pour fermer
                </p>
                <p className="text-white/50 text-xs md:hidden">
                  {selectedIndex + 1} / {marocPhotos.length}
                </p>
              </div>
            </motion.div>

            <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex gap-1.5 md:gap-2 max-w-[90vw] overflow-x-auto pb-2 px-4 scrollbar-hide">
              {marocPhotos.map((photo, index) => (
                <button
                  key={photo.src}
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex(index); }}
                  aria-label={`Voir photo ${index + 1}`}
                  aria-current={index === selectedIndex ? 'true' : undefined}
                  className={`relative w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-md md:rounded-lg overflow-hidden shrink-0 transition-all focus:outline-none focus:ring-2 focus:ring-terracotta-500 ${
                    index === selectedIndex 
                      ? 'ring-2 ring-terracotta-500 ring-offset-1 ring-offset-night-900 opacity-100' 
                      : 'opacity-40 hover:opacity-80'
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
