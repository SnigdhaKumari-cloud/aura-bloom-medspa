"use client";

import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Filter, Leaf } from 'lucide-react';
import ServicesList from '../../components/Services';
import Link from 'next/link';
import React from 'react';

export default function ServicesPage() {
    return (
        <div className="pt-24 min-h-screen bg-cream">
            {/* Services Header */}
            <section className="py-24 px-6 max-w-7xl mx-auto text-center">
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
                    className="text-5xl md:text-7xl text-navy font-light leading-tight mb-8"
                >
                    Treatments & <span className="italic text-accent">Enhancements</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-charcoal/70 max-w-2xl mx-auto"
                >
                    A curated menu utilizing FDA-cleared devices and premium products to address signs of aging, texture, tone, and overall skin health.
                </motion.p>
            </section>

            {/* Feature Highligh Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { tag: "Injectables", title: "Neuromodulators & Fillers", desc: "Soften dynamic wrinkles and restore volume loss using top-tier products like Botox Cosmetic and Juvederm.", icon: Sparkles },
                        { tag: "Laser & Light", title: "Clinical Skin Rejuvenation", desc: "Address hyperpigmentation, redness, and texture with BBL/Moxi and Fractional CO2 resurfacing.", icon: Filter },
                        { tag: "Aesthetics", title: "Signature Facials & Peels", desc: "Medical-grade skincare routines, DiamondGlow, and customized chemical peels tailored to your unique biology.", icon: Leaf }
                    ].map(feature => (
                        <div key={feature.title} className="p-10 bg-cream/50 rounded-3xl border border-navy/5">
                            <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-6">
                                <feature.icon className="text-gold" size={24} />
                            </div>
                            <span className="text-gold uppercase tracking-widest text-[10px] font-bold block mb-2">{feature.tag}</span>
                            <h3 className="font-serif text-2xl text-navy mb-4">{feature.title}</h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed mb-6">{feature.desc}</p>
                            <Link href="#services" className="text-xs uppercase tracking-widest font-bold text-navy flex items-center gap-2 group">
                                View Pricing <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Re-use the existing Services Cards for category exploration */}
            <div className="py-12 bg-cream">
                <ServicesList />
            </div>
        </div>
    );
}
