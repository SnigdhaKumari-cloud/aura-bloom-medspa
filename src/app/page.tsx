"use client";

import Hero from '../components/Hero';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <Hero />

            {/* About / Philosophy Section (Enhanced with milk + honey reference style) */}
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
