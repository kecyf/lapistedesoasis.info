'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  { src: '/photos/runner-panorama-view.jpg', alt: 'Vue panoramique montagnes Cap Vert', featured: true },
  { src: '/photos/group-photo-celebration.jpg', alt: 'Photo de groupe - Célébration', wide: true },
  { src: '/photos/runner-mountain-backdrop.jpg', alt: 'Coureuse devant montagne' },
  { src: '/photos/runner-summit-arms.jpg', alt: 'Coureuse au sommet bras ouverts' },
  { src: '/photos/team-banner-finish.jpg', alt: 'Équipe devant bannière LPO' },
  { src: '/photos/runner-coastal-rocks.jpg', alt: 'Coureuse sur rochers côtiers' },
  { src: '/photos/runners-duo-smiling.jpg', alt: 'Duo de coureuses souriantes' },
  { src: '/photos/selfie-volcano-duo.jpg', alt: 'Selfie devant volcan' },
  { src: '/photos/hikers-volcanic-cliff.jpg', alt: 'Randonneurs sur falaise volcanique' },
  { src: '/photos/runner-desert-path.jpg', alt: 'Coureuse sur piste désertique' },
  { src: '/photos/runners-group-descent.jpg', alt: 'Groupe en descente' },
  { src: '/photos/runner-thumbs-trail.jpg', alt: 'Coureuse thumbs up sur sentier' },
  { src: '/photos/selfie-runners-happy.jpg', alt: 'Selfie coureurs heureux' },
  { src: '/photos/runner-beach-victory.jpg', alt: 'Coureuse victoire plage' },
  { src: '/photos/runners-lava-coast.jpg', alt: 'Coureurs sur côte de lave' },
  { src: '/photos/group-van-transfer.jpg', alt: 'Groupe dans le van' },
  { src: '/photos/chair-desert-tunisie.jpg', alt: 'Chaise désert Tunisie' },
];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  };
  
  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-night-900 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-terracotta-400 font-medium tracking-wider uppercase text-sm">
            Moments Capturés
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            L'Aventure en Images
          </h2>
          <p className="text-sand-400 max-w-2xl mx-auto">
            Revivez les moments forts de nos précédentes éditions. Des paysages à couper 
            le souffle, des sourires et une aventure humaine unique.
          </p>
        </motion.div>

        {/* Photo Grid - Masonry style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.03 }}
              className={`relative cursor-pointer group overflow-hidden rounded-xl ${
                photo.featured 
                  ? 'col-span-2 row-span-2' 
                  : photo.wide 
                    ? 'col-span-2' 
                    : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <div className={`relative ${photo.featured ? 'aspect-square' : photo.wide ? 'aspect-video' : 'aspect-[3/4]'}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes={photo.featured ? '50vw' : photo.wide ? '50vw' : '25vw'}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-night-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sand-500 text-sm mt-8"
        >
          Photos : Cap Vert 2025, Tunisie 2024 • Crédit : Emmanuelle Perès & participants
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-night-900/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation */}
            <button 
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[selectedIndex].src}
                alt={photos[selectedIndex].alt}
                width={1200}
                height={800}
                className="object-contain max-h-[85vh] rounded-lg"
              />
              <p className="text-center text-white/70 text-sm mt-4">
                {photos[selectedIndex].alt} • {selectedIndex + 1} / {photos.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

