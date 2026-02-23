"use client";

import TestimonialsComponent from '../../components/Testimonials';
import { motion } from 'motion/react';
import React from 'react';

export default function TestimonialsPage() {
    return (
        <div className="min-h-screen">
            {/* ─── Hero with Background Image ─── */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1920&h=1080&auto=format&fit=crop"
                    alt="Happy clients at Aura Bloom Medspa"
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/70" />

                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4"
                    >
                        Client Experiences
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl text-white font-light leading-tight mb-8"
                    >
                        Real <span className="italic text-accent">Stories</span>,<br />
                        Real Results
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/60 max-w-2xl mx-auto font-light"
                    >
                        Hear from our valued clients about their transformative experiences at Aura Bloom.
                    </motion.p>
                </div>
            </section>

            {/* Testimonials cards */}
            <TestimonialsComponent />
        </div>
    );
}
