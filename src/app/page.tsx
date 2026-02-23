"use client";

import Hero from '../components/Hero';
import Services from '../components/Services';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const beforeAfterCases = [
    {
        id: 1,
        treatment: 'Dermal Fillers',
        area: 'Lips & Jawline',
        before: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=500&h=600&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=500&h=600&auto=format&fit=crop',
    },
    {
        id: 2,
        treatment: 'Laser Resurfacing',
        area: 'Full Face',
        before: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=500&h=600&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=500&h=600&auto=format&fit=crop',
    },
    {
        id: 3,
        treatment: 'Chemical Peel',
        area: 'Skin Texture',
        before: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=500&h=600&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=500&h=600&auto=format&fit=crop',
    },
];

export default function Home() {
    const [activeCase, setActiveCase] = useState(0);

    return (
        <main>
            <Hero />

            {/* About / Philosophy Section */}
            <section className="py-24 bg-white px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&h=1000&auto=format&fit=crop"
                                    alt="Aura Bloom Interior"
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-navy p-10 rounded-3xl shadow-2xl hidden md:block max-w-xs z-10">
                                <p className="text-gold font-serif text-4xl mb-2">15+</p>
                                <p className="text-white/60 text-xs uppercase tracking-widest leading-loose">
                                    Years of combined expertise in medical aesthetics and skin health.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold">Our Philosophy</span>
                            <h2 className="text-4xl md:text-6xl text-navy mt-4 mb-8 font-light leading-tight">
                                Where <span className="italic">Science</span> Meets <br />
                                Artistic <span className="italic text-accent">Vision.</span>
                            </h2>
                            <p className="text-charcoal/70 text-lg mb-10 leading-relaxed font-light">
                                At Aura Bloom, we believe beauty is a personal journey. Our boutique approach
                                ensures that every treatment is tailored to your unique features, enhancing
                                rather than altering. We combine the latest medical advancements with a
                                refined aesthetic eye to deliver results that are as natural as they are
                                transformative. Enjoy an experience dedicated to both effective results and
                                deep relaxation.
                            </p>

                            <div className="space-y-6 mb-12">
                                {[
                                    'Bespoke treatment plans for every client',
                                    'Medical-grade technology & premium products',
                                    'Highly trained & certified aesthetic specialists',
                                    'A sanctuary designed for your ultimate comfort'
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-4">
                                        <CheckCircle2 className="text-gold shrink-0" size={20} />
                                        <span className="text-navy font-medium text-sm tracking-wide">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/about" className="text-navy font-bold uppercase tracking-widest text-xs flex items-center gap-3 group inline-flex mt-4">
                                Learn More About Our Story
                                <div className="w-10 h-px bg-navy group-hover:w-16 transition-all" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Showcase Section */}
            <Services />

            {/* Before & After Section */}
            <section className="py-32 bg-white px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4"
                        >
                            Real Results
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl text-navy font-light leading-tight"
                        >
                            The <span className="italic text-accent">Transformation</span><br />
                            Gallery
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-charcoal/50 mt-6 max-w-lg mx-auto text-lg font-light"
                        >
                            See the stunning results our clients experience with our expert treatments.
                        </motion.p>
                    </div>

                    {/* Case Selector Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {beforeAfterCases.map((item, idx) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveCase(idx)}
                                className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all border ${activeCase === idx
                                    ? 'bg-navy text-white border-navy shadow-lg'
                                    : 'bg-transparent text-navy/60 border-navy/10 hover:border-navy/30'
                                    }`}
                            >
                                {item.treatment}
                            </button>
                        ))}
                    </div>

                    {/* Before / After Display */}
                    <motion.div
                        key={activeCase}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    >
                        {/* Before */}
                        <div className="relative group">
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={beforeAfterCases[activeCase].before}
                                    alt={`Before ${beforeAfterCases[activeCase].treatment}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                            </div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <span className="bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-xs uppercase tracking-widest font-bold border border-white/20">
                                    Before
                                </span>
                            </div>
                        </div>

                        {/* After */}
                        <div className="relative group">
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={beforeAfterCases[activeCase].after}
                                    alt={`After ${beforeAfterCases[activeCase].treatment}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                            </div>
                            <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                                <span className="bg-gold/90 backdrop-blur-md text-navy px-5 py-2 rounded-full text-xs uppercase tracking-widest font-bold">
                                    After
                                </span>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} className="text-gold fill-gold" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Treatment Info */}
                    <motion.div
                        key={`info-${activeCase}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-center mt-12"
                    >
                        <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-2">
                            {beforeAfterCases[activeCase].area}
                        </p>
                        <h3 className="text-3xl md:text-4xl text-navy font-serif">
                            {beforeAfterCases[activeCase].treatment}
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-16 text-center"
                    >
                        <Link
                            href="/testimonials"
                            className="border-b border-navy/20 pb-2 text-navy uppercase tracking-[0.3em] text-xs font-bold hover:text-gold hover:border-gold transition-all"
                        >
                            See More Client Results
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-cream px-6">
                <div className="max-w-5xl mx-auto bg-navy rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#C5A059,transparent_70%)]" />
                    </div>

                    <div className="relative z-10">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-gold uppercase tracking-[0.4em] text-xs font-bold"
                        >
                            Begin Your Transformation
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl text-white mt-6 mb-10 font-light leading-tight">
                            Ready to reveal your <br />
                            <span className="italic text-accent">most radiant self?</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/memberships" className="bg-gold hover:bg-gold/90 text-navy px-12 py-5 rounded-full text-sm uppercase tracking-widest font-bold transition-all shadow-xl block">
                                Explore Memberships
                            </Link>
                            <Link href="/gift-cards" className="text-white/80 hover:text-white text-sm uppercase tracking-widest font-medium transition-all flex items-center gap-2">
                                Gift a Treatment <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
