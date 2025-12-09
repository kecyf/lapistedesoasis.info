'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

// All photos for lightbox
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

// Featured photos for grid display (indices into allPhotos)
const featuredIndices = [0, 1, 2, 3, 4];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % allPhotos.length);
    }
  };
  
  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + allPhotos.length) % allPhotos.length);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') goNext();
    if (e.key === 'ArrowLeft') goPrev();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <section id="gallery" className="py-20 bg-night-900 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-terracotta-400 font-medium tracking-wider uppercase text-sm">
            Cap Vert 2025
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            L'Aventure en Images
          </h2>
          <p className="text-sand-400 max-w-xl mx-auto">
            Des paysages volcaniques à couper le souffle, des sourires et une aventure humaine unique.
          </p>
        </motion.div>

        {/* Bento Grid - 5 photos only */}
        <div className="grid grid-cols-6 grid-rows-2 gap-3 md:gap-4 max-w-5xl mx-auto h-[400px] md:h-[500px]">
          {/* Large featured - group celebration (spans 3 cols, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-3 row-span-2 relative cursor-pointer group overflow-hidden rounded-2xl"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={allPhotos[0].src}
              alt={allPhotos[0].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Top right - group descent (spans 3 cols, 1 row) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-3 row-span-1 relative cursor-pointer group overflow-hidden rounded-2xl"
            onClick={() => openLightbox(1)}
          >
            <Image
              src={allPhotos[1].src}
              alt={allPhotos[1].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Bottom row - 3 small squares */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="col-span-1 row-span-1 relative cursor-pointer group overflow-hidden rounded-xl"
            onClick={() => openLightbox(2)}
          >
            <Image
              src={allPhotos[2].src}
              alt={allPhotos[2].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="17vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 row-span-1 relative cursor-pointer group overflow-hidden rounded-xl"
            onClick={() => openLightbox(3)}
          >
            <Image
              src={allPhotos[3].src}
              alt={allPhotos[3].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="17vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Last cell - "See more" overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="col-span-1 row-span-1 relative cursor-pointer group overflow-hidden rounded-xl"
            onClick={() => openLightbox(4)}
          >
            <Image
              src={allPhotos[4].src}
              alt={allPhotos[4].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="17vw"
            />
            {/* "See more" overlay */}
            <div className="absolute inset-0 bg-night-900/70 flex flex-col items-center justify-center text-white transition-all group-hover:bg-night-900/50">
              <Images className="w-6 h-6 mb-1" />
              <span className="text-sm font-medium">+{allPhotos.length - 5}</span>
            </div>
          </motion.div>
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sand-500 text-sm mt-6"
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
            className="fixed inset-0 z-50 bg-night-900/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation */}
            <button 
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
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
                src={allPhotos[selectedIndex].src}
                alt={allPhotos[selectedIndex].alt}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] rounded-lg"
              />
              <div className="text-center mt-4">
                <p className="text-white/80 text-sm mb-1">
                  {allPhotos[selectedIndex].alt}
                </p>
                <p className="text-white/50 text-xs">
                  {selectedIndex + 1} / {allPhotos.length} • Utilisez ← → pour naviguer
                </p>
              </div>
            </motion.div>

            {/* Thumbnail strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto pb-2 px-4">
              {allPhotos.map((photo, index) => (
                <button
                  key={photo.src}
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex(index); }}
                  className={`relative w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden shrink-0 transition-all ${
                    index === selectedIndex 
                      ? 'ring-2 ring-terracotta-500 ring-offset-2 ring-offset-night-900' 
                      : 'opacity-50 hover:opacity-100'
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
