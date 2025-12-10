"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { MarocPreview } from "@/components/sections/maroc-preview";
import { NextEdition } from "@/components/sections/next-edition";
import { About } from "@/components/sections/about";
import { Videos } from "@/components/sections/videos";
import { Gallery } from "@/components/sections/gallery";
import { Editions } from "@/components/sections/editions";
import { Team } from "@/components/sections/team";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Hero />
      <MarocPreview />
      <NextEdition />
      <About />
      <Gallery />
      <Videos />
      <Editions />
      <Team />
      <Footer />
    </motion.main>
  );
}
