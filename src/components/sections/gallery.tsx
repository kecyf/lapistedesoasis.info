'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

const allPhotos = [
  { src: '/photos/group-photo-celebration.jpg', alt: 'Photo de groupe - Célébration Cap Vert 2025' },
  { src: '/photos/runners-group-descent.jpg', alt: 'Groupe en descente sur terrain volcanique' },
  { src: '/photos/hikers-volcanic-cliff.jpg', alt: 'Randonneurs sur falaise volcanique' },
  { src: '/photos/selfie-runners-happy.jpg', alt: 'Selfie coureurs heureux' },
  { src: '/photos/group-van-transfer.jpg', alt: 'Groupe dans le van - Bonne ambiance' },
  { src: '/photos/runner-panorama-view.jpg', alt: 'Vue panoramique montagnes Cap Vert' },
  { src: '/photos/runner-mountain-backdrop.jpg', alt: 'Coureuse devant montagne' },
  { src: '/photos/runner-summit-arms.jpg', alt: 'Coureuse au sommet bras ouverts' },
  { src: '/photos/team-banner-finish.jpg', alt: 'Équipe devant bannière LPO' },
  { src: '/photos/runner-coastal-rocks.jpg', alt: 'Coureuse sur rochers côtiers' },
  { src: '/photos/runners-duo-smiling.jpg', alt: 'Duo de coureuses souriantes' },
  { src: '/photos/selfie-volcano-duo.jpg', alt: 'Selfie devant volcan' },
  { src: '/photos/runner-desert-path.jpg', alt: 'Coureuse sur piste désertique' },
  { src: '/photos/runner-thumbs-trail.jpg', alt: 'Coureuse thumbs up sur sentier' },
  { src: '/photos/runner-beach-victory.jpg', alt: 'Coureuse victoire plage' },
  { src: '/photos/runners-lava-coast.jpg', alt: 'Coureurs sur côte de lave' },
  { src: '/photos/chair-desert-tunisie.jpg', alt: 'Chaise désert Tunisie 2024' },
];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);
  
  const goNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % allPhotos.length);
    }
  }, [selectedIndex]);
  
  const goPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + allPhotos.length) % allPhotos.length);
    }
  }, [selectedIndex]);

  // Global keyboard listener for lightbox
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

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedIndex]);

  return (
    <section id="gallery" className="py-16 md:py-20 bg-night-900 overflow-hidden" aria-label="Galerie photos">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="text-terracotta-400 font-medium tracking-wider uppercase text-sm">
            Cap Vert 2025
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-3 md:mb-4">
            L'Aventure en Images
          </h2>
          <p className="text-sand-400 max-w-xl mx-auto text-sm md:text-base">
            Des paysages volcaniques à couper le souffle, des sourires et une aventure humaine unique.
          </p>
        </motion.div>

        {/* Bento Grid - Responsive */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-3 lg:gap-4 max-w-5xl mx-auto">
          {/* Large featured - group celebration */}
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-3 aspect-square md:row-span-2 relative cursor-pointer group overflow-hidden rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2 focus:ring-offset-night-900"
            onClick={() => setSelectedIndex(0)}
            aria-label={`Voir ${allPhotos[0].alt}`}
          >
            <Image
              src={allPhotos[0].src}
              alt={allPhotos[0].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          {/* Top right - group descent */}
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-2 md:col-span-3 aspect-video relative cursor-pointer group overflow-hidden rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2 focus:ring-offset-night-900"
            onClick={() => setSelectedIndex(1)}
            aria-label={`Voir ${allPhotos[1].alt}`}
          >
            <Image
              src={allPhotos[1].src}
              alt={allPhotos[1].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          {/* Bottom row - 3 cells */}
          {[2, 3, 4].map((index, i) => (
            <motion.button
              key={allPhotos[index].src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.05 }}
              className="col-span-1 aspect-square relative cursor-pointer group overflow-hidden rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2 focus:ring-offset-night-900"
              onClick={() => setSelectedIndex(index)}
              aria-label={index === 4 ? `Voir toutes les ${allPhotos.length} photos` : `Voir ${allPhotos[index].alt}`}
            >
              <Image
                src={allPhotos[index].src}
                alt={allPhotos[index].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 17vw"
              />
              {index === 4 ? (
                <div className="absolute inset-0 bg-night-900/70 flex flex-col items-center justify-center text-white transition-all group-hover:bg-night-900/50">
                  <Images className="w-5 h-5 md:w-6 md:h-6 mb-1" />
                  <span className="text-xs md:text-sm font-medium">+{allPhotos.length - 5}</span>
                </div>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-t from-night-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sand-500 text-xs md:text-sm mt-4 md:mt-6"
        >
          📸 Crédit : Emmanuelle Perès & participants
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
            aria-label="Galerie photo"
            className="fixed inset-0 z-50 bg-night-900/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Fermer la galerie"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            {/* Navigation */}
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

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-[80vh] mx-4 md:mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allPhotos[selectedIndex].src}
                alt={allPhotos[selectedIndex].alt}
                width={1200}
                height={800}
                className="object-contain max-h-[70vh] md:max-h-[75vh] rounded-lg"
                priority
              />
              <div className="text-center mt-3 md:mt-4 px-4">
                <p className="text-white/80 text-xs md:text-sm mb-1">
                  {allPhotos[selectedIndex].alt}
                </p>
                <p className="text-white/50 text-xs hidden md:block">
                  {selectedIndex + 1} / {allPhotos.length} • ← → pour naviguer • Échap pour fermer
                </p>
                <p className="text-white/50 text-xs md:hidden">
                  {selectedIndex + 1} / {allPhotos.length}
                </p>
              </div>
            </motion.div>

            {/* Thumbnail strip - hidden on small mobile */}
            <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex gap-1.5 md:gap-2 max-w-[90vw] overflow-x-auto pb-2 px-4 scrollbar-hide">
              {allPhotos.map((photo, index) => (
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
