"use client";

import { motion } from 'motion/react';
import { Crown, Star, Shield, ArrowRight } from 'lucide-react';

const tiers = [
    {
        name: 'Aura Essential',
        price: '$149',
        period: 'per month',
        description: 'Perfect for maintaining your glow with customized monthly treatments.',
        icon: Star,
        features: [
            'One Signature Facial or Peel per month',
            '10% off all skincare products',
            '$10/unit Botox (normally $12)',
            'Complimentary B12 injection monthly'
        ],
        highlighted: false
    },
    {
        name: 'Lumina Premium',
        price: '$299',
        period: 'per month',
        description: 'Our most popular tier for comprehensive aesthetic maintenance.',
        icon: Crown,
        features: [
            'One Premium Laser or advanced Facial',
            '15% off all skincare products',
            '$9/unit Botox (normally $12)',
            '10% off all Dermal Fillers',
            'Priority booking access'
        ],
        highlighted: true
    },
    {
        name: 'Bloom Elite',
        price: '$499',
        period: 'per month',
        description: 'The ultimate VIP experience for complete rejuvenation and anti-aging.',
        icon: Shield,
        features: [
            'Two Premium treatments per month',
            '20% off all skincare products',
            '$8/unit Botox (normally $12)',
            '15% off all Dermal Fillers',
            'VIP concierge and exclusive events'
        ],
        highlighted: false
    }
];

export default function Memberships() {
    return (
        <section id="memberships" className="py-32 bg-navy px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 border border-gold rounded-full" />
                <div className="absolute bottom-10 left-10 w-96 h-96 border border-gold rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4"
                    >
                        Exclusive Access
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl text-white font-light leading-tight mb-6"
                    >
                        Aura Bloom <span className="italic text-accent">Memberships</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-white/60 text-lg max-w-2xl mx-auto font-light"
                    >
                        Commit to your beauty journey with our curated membership tiers. Elevate your routine with consistent care and exclusive member benefits.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-3xl p-10 flex flex-col ${tier.highlighted
                                ? 'bg-gold text-navy shadow-2xl transform md:-translate-y-4'
                                : 'bg-white/5 border border-white/10 text-white backdrop-blur-sm'
                                }`}
                        >
                            {tier.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-navy px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold shadow-md">
                                    Most Popular
                                </div>
                            )}

                            <tier.icon size={32} className={`mb-6 ${tier.highlighted ? 'text-navy' : 'text-gold'}`} />
                            <h3 className="text-2xl font-serif mb-2">{tier.name}</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-4xl font-light">{tier.price}</span>
                                <span className={`text-sm ${tier.highlighted ? 'text-navy/70' : 'text-white/50'}`}>{tier.period}</span>
                            </div>
                            <p className={`text-sm mb-8 line-clamp-2 ${tier.highlighted ? 'text-navy/80' : 'text-white/60'}`}>
                                {tier.description}
                            </p>

                            <div className="flex-grow space-y-4 mb-10">
                                {tier.features.map(feature => (
                                    <div key={feature} className="flex items-start gap-3">
                                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${tier.highlighted ? 'bg-navy' : 'bg-gold'}`} />
                                        <span className={`text-sm ${tier.highlighted ? 'text-navy/90' : 'text-white/80'}`}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={`w-full py-4 rounded-full text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2 group ${tier.highlighted
                                    ? 'bg-navy text-white hover:bg-navy/90'
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                                    }`}
                            >
                                Join Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
