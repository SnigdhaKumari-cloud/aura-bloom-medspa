"use client";

import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Filter, Leaf } from 'lucide-react';
import ServicesList from '../../components/Services';
import Link from 'next/link';
import React from 'react';

const features = [
    {
        tag: "Injectables",
        title: "Neuromodulators & Fillers",
        desc: "Soften dynamic wrinkles and restore volume loss using top-tier products like Botox Cosmetic and Juvederm.",
        icon: Sparkles,
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&h=400&auto=format&fit=crop',
    },
    {
        tag: "Laser & Light",
        title: "Clinical Skin Rejuvenation",
        desc: "Address hyperpigmentation, redness, and texture with BBL/Moxi and Fractional CO2 resurfacing.",
        icon: Filter,
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=600&h=400&auto=format&fit=crop',
    },
    {
        tag: "Aesthetics",
        title: "Signature Facials & Peels",
        desc: "Medical-grade skincare routines, DiamondGlow, and customized chemical peels tailored to your unique biology.",
        icon: Leaf,
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&h=400&auto=format&fit=crop',
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-cream">
            {/* ─── Hero with Background Image ─── */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1920&h=1080&auto=format&fit=crop"
                    alt="Luxury medspa treatment room"
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/60" />

                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4"
                    >
                        Comprehensive Menu
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl text-white font-light leading-tight mb-8"
                    >
                        Treatments & <span className="italic text-accent">Enhancements</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/70 max-w-2xl mx-auto font-light"
                    >
                        A curated menu utilizing FDA-cleared devices and premium products to address signs of aging, texture, tone, and overall skin health.
                    </motion.p>
                </div>
            </section>

            {/* ─── Feature Highlight Section with Images ─── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map(feature => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="group rounded-3xl overflow-hidden border border-navy/5 bg-cream/50"
                            >
                                {/* Feature Image */}
                                <div className="relative aspect-[3/2] overflow-hidden">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                                            <feature.icon className="text-white" size={18} />
                                        </div>
                                    </div>
                                </div>

                                {/* Feature Text */}
                                <div className="p-8">
                                    <span className="text-gold uppercase tracking-widest text-[10px] font-bold block mb-2">{feature.tag}</span>
                                    <h3 className="font-serif text-2xl text-navy mb-4">{feature.title}</h3>
                                    <p className="text-charcoal/70 text-sm leading-relaxed mb-6">{feature.desc}</p>
                                    <Link href="#services" className="text-xs uppercase tracking-widest font-bold text-navy flex items-center gap-2 group/btn">
                                        View Pricing <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Re-use the existing Services Cards for category exploration */}
            <div className="py-12 bg-cream">
                <ServicesList />
            </div>
        </div>
    );
}
