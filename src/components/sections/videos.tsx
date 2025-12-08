"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  {
    id: "i-s98-mCJYY",
    title: "Mongolie 2016",
    subtitle: "Les steppes infinies",
    year: 2016,
  },
  {
    id: "XQoDxV3TDvc",
    title: "Cap Vert 2013",
    subtitle: "L'archipel volcanique",
    year: 2013,
  },
  {
    id: "exaeETuJtyM",
    title: "Égypte 2011",
    subtitle: "Le Désert Blanc",
    year: 2011,
  },
  {
    id: "RkPQ00dWvXY",
    title: "Cappadoce 2010",
    subtitle: "Les cheminées de fées",
    year: 2010,
  },
  {
    id: "jwbVU5RXVAs",
    title: "Maroc 2009",
    subtitle: "Les dunes du Sahara",
    year: 2009,
  },
];

export function Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="relative py-24 md:py-32 bg-night-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(196 165 116 / 0.5) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-terracotta-400 text-sm font-medium uppercase tracking-widest mb-4">
            Nos Aventures en Images
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
            Revivez les éditions
          </h2>
          <p className="max-w-2xl mx-auto text-sand-400 text-lg">
            Des moments forts capturés au fil des années. Découvrez l'ambiance
            unique de La Piste des Oasis à travers nos films.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setActiveVideo(video.id)}
            >
              {/* Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-night-900 via-night-900/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-terracotta-500 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-terracotta-400">
                  <svg
                    className="w-6 h-6 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-terracotta-400 text-sm font-medium mb-1">
                  {video.year}
                </div>
                <h3 className="font-heading text-xl text-white mb-1">
                  {video.title}
                </h3>
                <p className="text-sand-400 text-sm">{video.subtitle}</p>
              </div>
            </motion.div>
          ))}

          {/* More videos card */}
          <motion.a
            href="https://www.youtube.com/@lapistedesoasis"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="group relative aspect-video rounded-2xl overflow-hidden bg-night-800 border-2 border-dashed border-sand-700 flex items-center justify-center hover:border-terracotta-500 transition-colors"
          >
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sand-700/50 flex items-center justify-center group-hover:bg-terracotta-500/20 transition-colors">
                <svg
                  className="w-6 h-6 text-sand-400 group-hover:text-terracotta-400 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <p className="text-sand-400 group-hover:text-sand-300 transition-colors">
                Voir toutes les vidéos
              </p>
            </div>
          </motion.a>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-night-950/95 p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 text-sand-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* YouTube iframe */}
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Video player"
                className="w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

