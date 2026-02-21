"use client";

import { motion } from 'motion/react';
import { Gift, ArrowRight } from 'lucide-react';

export default function GiftCards() {
    return (
        <section id="gift-cards" className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-cream rounded-3xl overflow-hidden shadow-sm border border-navy/5">

                    <div className="p-12 md:p-20 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-8">
                                <Gift className="text-gold" size={24} />
                            </div>
                            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4">
                                The Gift of Glow
                            </span>
                            <h2 className="text-4xl md:text-5xl text-navy font-light leading-tight mb-6">
                                Share the <span className="italic text-accent">Experience</span>
                            </h2>
                            <p className="text-charcoal/70 text-lg mb-8 leading-relaxed font-light">
                                Give the ultimate gift of self-care and luxury. Aura Bloom gift cards can be redeemed for any of our bespoke treatments, medical-grade skincare products, or toward a membership tier.
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
                                {['$100', '$250', '$500', '$1000', 'Custom'].map(amount => (
                                    <button key={amount} className="border border-navy/20 rounded-xl py-3 text-navy font-medium text-sm hover:border-gold hover:text-gold transition-colors">
                                        {amount}
                                    </button>
                                ))}
                            </div>

                            <button className="bg-navy hover:bg-navy/90 text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold transition-all shadow-xl flex items-center gap-3 group w-full sm:w-auto justify-center">
                                Purchase Gift Card
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                    <div className="relative h-full min-h-[400px] lg:min-h-full order-1 lg:order-2">
                        <img
                            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop"
                            alt="Luxury Spa Gift Setup"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white max-w-sm">
                            <p className="font-serif italic text-lg opacity-90">"The perfect gift for someone who deserves to be pampered."</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
