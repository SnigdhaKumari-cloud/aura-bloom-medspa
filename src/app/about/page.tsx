"use client";

import { motion } from 'motion/react';
import { Award, Heart, Shield, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const experienceList = [
    'Unwind in a tranquil, luxurious setting.',
    'Relax, free from judgement and self-care guilt.',
    'Get pampered by certified aesthetic experts.',
    'Feel special — because you are.',
    'Learn the science behind your skin.',
    'Embrace your natural beauty and enhance it.',
    'Leave glowing, refreshed, and confident.',
    'Discover medical-grade skincare that truly works.',
];

export default function About() {
    return (
        <main>
            {/* ─── Hero Section: "A Space for You to..." ─── */}
            <section className="pt-40 pb-24 bg-cream px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Left: Editorial text list */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4">
                                Aura Bloom Medspa
                            </span>
                            <h1 className="text-5xl md:text-7xl text-navy font-light leading-tight mb-12 font-serif">
                                A Space for <br />
                                <span className="italic text-accent">you</span> to ...
                            </h1>

                            <div className="space-y-4 mb-12">
                                {experienceList.map((item, i) => (
                                    <motion.p
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + i * 0.08 }}
                                        className="text-charcoal/70 text-lg font-light leading-relaxed"
                                    >
                                        {item}
                                    </motion.p>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/services"
                                    className="bg-navy hover:bg-navy/90 text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-3 group"
                                >
                                    Book Your Treatment
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/services"
                                    className="border border-navy/20 hover:border-navy/40 text-navy px-10 py-4 rounded-full text-sm uppercase tracking-widest font-medium transition-all text-center"
                                >
                                    Service Menu
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right: Product / Interior image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1540555700478-4be289fbec6b?q=80&w=800&h=1000&auto=format&fit=crop"
                                    alt="Aura Bloom luxury spa interior with curated skincare products"
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            {/* Floating accent card */}
                            <div className="absolute -bottom-8 -left-8 bg-navy p-8 rounded-2xl shadow-2xl hidden lg:block max-w-[250px] z-10">
                                <p className="text-gold font-serif text-3xl mb-1">15+</p>
                                <p className="text-white/60 text-xs uppercase tracking-widest leading-loose">
                                    Years of combined expertise in medical aesthetics.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── Our Philosophy ─── */}
            <section className="py-24 bg-white px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Left: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&h=750&auto=format&fit=crop"
                                alt="Luxury facial treatment at Aura Bloom"
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                        </motion.div>

                        {/* Right: Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4">
                                Our Philosophy
                            </span>
                            <h2 className="text-4xl md:text-5xl text-navy font-light leading-tight mb-8 font-serif">
                                Committed to <span className="italic text-accent">Skincare</span>
                            </h2>
                            <p className="text-charcoal/70 text-lg leading-relaxed mb-6 font-light">
                                We are a premier medspa specializing in precision injectables, advanced laser treatments,
                                expert facials, and bespoke lash artistry. Our boutique approach ensures every client
                                receives personalized care designed around their unique skin biology and aesthetic goals.
                            </p>
                            <p className="text-charcoal/70 text-lg leading-relaxed mb-8 font-light">
                                Our product philosophy is simple: we only use and recommend medical-grade products
                                that have been rigorously tested and proven effective. Every product that
                                touches your skin at Aura Bloom meets our curation and quality standards — because
                                your at-home routine should continue the work done in our treatment rooms.
                            </p>
                            <Link
                                href="/memberships"
                                className="text-navy font-bold uppercase tracking-widest text-xs flex items-center gap-3 group inline-flex"
                            >
                                Join Our Membership
                                <div className="w-10 h-px bg-navy group-hover:w-16 transition-all" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── Led by Medical Excellence ─── */}
            <section className="py-24 bg-cream px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Left: Team Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop"
                                alt="Medical Team"
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                        </motion.div>

                        {/* Right: Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4">
                                Expert Team
                            </span>
                            <h2 className="text-4xl md:text-5xl text-navy font-light leading-tight mb-8 font-serif">
                                Led by <span className="italic text-accent">Medical Excellence</span>
                            </h2>
                            <p className="text-charcoal/70 text-lg leading-relaxed mb-6 font-light">
                                Our team consists of Board-Certified Nurse Practitioners, Master Estheticians,
                                and Medical Directors with decades of combined experience in the aesthetic space.
                            </p>
                            <p className="text-charcoal/70 text-lg leading-relaxed mb-10 font-light">
                                We constantly seek out continuing education, adapting the newest FDA-approved
                                techniques from around the globe to ensure you receive the safest, most
                                effective treatments available.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: Shield, label: 'Safety First' },
                                    { icon: Award, label: 'Board Certified' },
                                    { icon: Heart, label: 'Compassionate Care' },
                                    { icon: Sparkles, label: 'Natural Results' },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center shrink-0">
                                            <item.icon className="text-gold" size={18} />
                                        </div>
                                        <span className="text-navy font-medium text-sm tracking-wide">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
