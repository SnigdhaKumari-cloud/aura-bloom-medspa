"use client";

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-navy flex items-center -mt-[130px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1920&h=1080&auto=format&fit=crop"
          alt="Luxury MedSpa Interior"
          className="w-full h-full object-cover opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-gold uppercase tracking-[0.3em] text-xs mb-4 font-semibold">
              Elegance in Every Detail
            </span>
            <h1 className="text-6xl md:text-8xl text-white leading-[0.9] mb-8 font-light">
              Refined <br />
              <span className="italic font-serif text-accent">Aesthetics</span> <br />
              for the Modern Soul
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed">
              Experience the pinnacle of luxury care. From precision laser treatments to
              bespoke lash artistry, we redefine beauty through science and soul.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="bg-gold hover:bg-gold/90 text-navy px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-3 group">
                Explore Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="text-center border border-white/20 hover:bg-white/10 text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest font-medium transition-all inline-block">
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl max-w-xs"
        >
          <p className="text-gold text-xs uppercase tracking-widest mb-2">Featured Treatment</p>
          <h3 className="text-white font-serif text-xl mb-2">Aura Glow Laser</h3>
          <p className="text-white/40 text-sm">Advanced skin rejuvenation for a flawless, radiant complexion.</p>
        </motion.div>
      </div>
    </section>
  );
}
