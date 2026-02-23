"use client";

import { motion } from 'motion/react';
import { Award, Heart, Shield, Sparkles } from 'lucide-react';
import React from 'react';

export default function About() {
    return (
        <div className="pt-24 min-h-screen bg-cream selection:bg-gold selection:text-navy">
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4"
                    >
                        Our Story
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl text-navy font-light leading-tight mb-8"
                    >
                        Redefining <span className="italic text-accent">Aesthetic</span> Care
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-charcoal/70 max-w-3xl mx-auto leading-relaxed"
                    >
                        Aura Bloom was founded on a simple premise: medical aesthetics should be an experience of luxury, not clinical coldness. We prioritize undetectable enhancements that celebrate your unique beauty.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop"
                            alt="Medical Team"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-serif text-navy mb-6">Led by Medical Excellence</h2>
                        <p className="text-charcoal/70 leading-relaxed mb-6">
                            Our team consists of Board-Certified Nurse Practitioners, Master Estheticians, and Medical Directors with decades of combined experience in the aesthetic space.
                        </p>
                        <p className="text-charcoal/70 leading-relaxed">
                            We constantly seek out continuing education, adapting the newest FDA-approved techniques from around the globe to ensure you receive the safest, most effective treatments available.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { icon: Shield, title: 'Safety First', desc: 'Rigorous medical protocols and hygiene standards.' },
                        { icon: Award, title: 'Expertise', desc: 'Highly trained professionals practicing at the top of their licenses.' },
                        { icon: Heart, title: 'Compassion', desc: 'A judgment-free zone tailored to your comfort.' },
                        { icon: Sparkles, title: 'Results', desc: 'Natural, glowing outcomes you can feel confident in.' }
                    ].map((val, i) => (
                        <motion.div
                            key={val.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-navy/5 text-center"
                        >
                            <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
                                <val.icon className="text-gold" size={24} />
                            </div>
                            <h3 className="font-serif text-xl text-navy mb-3">{val.title}</h3>
                            <p className="text-sm text-charcoal/60 leading-relaxed">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
