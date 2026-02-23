"use client";

import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

/* ─── Procedures Data ─── */
const procedures = [
    {
        id: 'neuromodulators',
        name: 'Neuromodulators',
        subtitle: 'Botox · Dysport · Xeomin',
        price: 'From $12/unit',
        description:
            'Precision-placed neuromodulators relax targeted muscles to smooth dynamic wrinkles — crow\'s feet, forehead lines, and glabellar creases — while maintaining complete natural expressivity. Results appear within 3–7 days and last 3–4 months.',
        details: [
            'Forehead & frown lines',
            'Crow\'s feet & eye area',
            'Lip flip & lip lines',
            'Jawline slimming (masseter)',
            'Neck bands (platysmal bands)',
            'Hyperhidrosis (excessive sweating)',
        ],
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&h=600&auto=format&fit=crop',
        tag: 'Most Popular',
    },
    {
        id: 'dermal-fillers',
        name: 'Dermal Fillers',
        subtitle: 'Juvederm · Restylane · Sculptra',
        price: 'From $600/syringe',
        description:
            'Hyaluronic acid and bio-stimulatory fillers restore lost volume, contour facial structure, and soften deep folds with immediate, natural-looking results that last 9–24 months depending on the product and treatment area.',
        details: [
            'Lip augmentation & definition',
            'Cheek volumisation',
            'Under-eye hollows (tear trough)',
            'Jawline & chin contouring',
            'Nasolabial & marionette folds',
            'Hand rejuvenation',
        ],
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&h=600&auto=format&fit=crop',
        tag: 'Signature',
    },
    {
        id: 'prp-therapy',
        name: 'PRP Therapy',
        subtitle: 'Platelet-Rich Plasma',
        price: 'From $750',
        description:
            'Harness your body\'s own growth factors to stimulate collagen, accelerate healing, and rejuvenate skin from within. PRP is combined with microneedling or injected directly for hair restoration and skin-tightening results.',
        details: [
            'Facial skin rejuvenation',
            'Hair loss restoration',
            'Microneedling enhancement',
            'Under-eye dark circles',
            'Skin texture & tone',
            'Post-procedure healing',
        ],
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&h=600&auto=format&fit=crop',
        tag: 'Advanced',
    },
    {
        id: 'skin-boosters',
        name: 'Skin Boosters',
        subtitle: 'Profhilo · Skinvive · Radiesse',
        price: 'From $500',
        description:
            'Next-generation bio-remodelling injectables that deeply hydrate, improve skin laxity, and stimulate long-term collagen and elastin production — delivering a luminous, glass-skin finish without adding volume.',
        details: [
            'Deep skin hydration',
            'Skin laxity improvement',
            'Fine line reduction',
            'Neck & décolletage',
            'Hand & arm rejuvenation',
            'Bio-stimulation & longevity',
        ],
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&h=600&auto=format&fit=crop',
        tag: 'Trending',
    },
    {
        id: 'chemical-peels',
        name: 'Chemical Peels',
        subtitle: 'VI Peel · TCA · Jessner',
        price: 'From $250',
        description:
            'Medical-grade chemical exfoliation accelerates cell turnover to reveal brighter, smoother, and more even-toned skin. From superficial lunchtime peels to deeper treatments for acne scarring and pigmentation.',
        details: [
            'Hyperpigmentation & melasma',
            'Acne & post-acne marks',
            'Fine lines & texture',
            'Sun damage & age spots',
            'Uneven skin tone',
            'Overall skin luminosity',
        ],
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&h=600&auto=format&fit=crop',
        tag: 'Rejuvenating',
    },
    {
        id: 'iv-therapy',
        name: 'IV Therapy',
        subtitle: 'Wellness Drips · NAD+',
        price: 'From $175',
        description:
            'Targeted intravenous vitamin and nutrient infusions for cellular recovery, immune support, anti-aging, and peak performance. Our clinical team formulates each drip to your unique wellness goals.',
        details: [
            'Immunity & energy boost',
            'Hydration & recovery',
            'Glutathione skin brightening',
            'NAD+ longevity therapy',
            'Hangover & fatigue relief',
            'Custom wellness formulations',
        ],
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&h=600&auto=format&fit=crop',
        tag: 'Wellness',
    },
];

/* ─── FAQ ─── */
const faqs = [
    {
        question: 'Are MedSpa treatments safe?',
        answer: 'All treatments at Aura Bloom are performed by Board-Certified Nurse Practitioners and Medical Directors under strict clinical protocols. We use only FDA-approved products and medical-grade equipment. Your safety is our first priority.',
    },
    {
        question: 'How do I know which treatment is right for me?',
        answer: 'We begin every client journey with a complimentary consultation. Our clinical team will assess your skin, discuss your goals, and design a bespoke treatment plan — never a one-size-fits-all approach.',
    },
    {
        question: 'How long until I see results?',
        answer: 'Neuromodulators show results in 3–7 days. Fillers are immediate. Skin boosters and PRP require 4–6 weeks to show full results as collagen builds. Our team will set realistic expectations at your consultation.',
    },
    {
        question: 'Is there downtime after treatment?',
        answer: 'Most injectable treatments have minimal to no downtime. You may experience mild redness, swelling, or bruising for 24–72 hours. Deeper chemical peels may require 5–7 days of social downtime. We\'ll prepare you with full aftercare instructions.',
    },
    {
        question: 'Can I combine multiple treatments?',
        answer: 'Absolutely — combination protocols often deliver superior results. Our team will advise on the optimal sequencing and spacing of treatments for your safety and best outcomes.',
    },
];

const sidebarLinks = procedures.map(p => ({ id: p.id, name: p.name }));

export default function MedSpaPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [activeProcedure, setActiveProcedure] = useState(procedures[0].id);

    const featured = procedures.find(p => p.id === activeProcedure) ?? procedures[0];

    return (
        <main className="bg-cream">

            {/* ─── Hero ─── */}
            <section className="relative pt-40 pb-0 overflow-hidden">
                <div className="absolute inset-0 top-0">
                    <img
                        src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1920&h=700&auto=format&fit=crop"
                        alt="MedSpa treatments"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-cream" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 pb-32 pt-16 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4"
                    >
                        Aura Bloom Medspa
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl text-white font-light leading-[0.9] mb-6"
                    >
                        Medical<br />
                        <span className="font-serif italic text-gold">Aesthetics</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25 }}
                        className="text-white/60 text-lg font-light max-w-xl mx-auto"
                    >
                        Clinical precision. Artistic vision. Results that speak for themselves.
                    </motion.p>
                </div>
            </section>

            {/* ─── Main Content: Sidebar + Procedure Detail ─── */}
            <section className="py-24 px-6 bg-cream">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">

                        {/* ─── Sidebar Navigation ─── */}
                        <aside className="lg:sticky lg:top-32 self-start">
                            <p className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6">
                                Our Procedures
                            </p>
                            <nav className="flex flex-col border-t border-navy/10">
                                {sidebarLinks.map((link) => (
                                    <button
                                        key={link.id}
                                        onClick={() => setActiveProcedure(link.id)}
                                        className={`flex items-center justify-between py-4 px-0 text-left border-b border-navy/10 group transition-all ${activeProcedure === link.id
                                                ? 'text-navy font-semibold'
                                                : 'text-charcoal/50 hover:text-navy'
                                            }`}
                                    >
                                        <span className="text-sm uppercase tracking-[0.15em]">{link.name}</span>
                                        <ChevronRight
                                            size={16}
                                            className={`transition-all ${activeProcedure === link.id ? 'text-gold translate-x-1' : 'text-navy/20'}`}
                                        />
                                    </button>
                                ))}
                            </nav>

                            {/* Booking CTA in sidebar */}
                            <div className="mt-10 bg-navy rounded-2xl p-8">
                                <p className="text-gold text-xs uppercase tracking-widest font-bold mb-3">Ready to Begin?</p>
                                <p className="text-white/60 text-xs leading-relaxed mb-6 font-light">
                                    Book a complimentary consultation with our clinical team.
                                </p>
                                <Link
                                    href="/services"
                                    className="block text-center bg-gold hover:bg-gold/90 text-navy px-6 py-3 text-xs uppercase tracking-widest font-bold transition-all rounded-full"
                                >
                                    Book Consultation
                                </Link>
                            </div>
                        </aside>

                        {/* ─── Procedure Detail Panel ─── */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={featured.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35 }}
                            >
                                {/* Image */}
                                <div className="relative aspect-[16/7] rounded-3xl overflow-hidden shadow-2xl mb-12">
                                    <img
                                        src={featured.image}
                                        alt={featured.name}
                                        className="w-full h-full object-cover"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-gold text-navy text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full">
                                            {featured.tag}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <p className="text-white/60 text-xs uppercase tracking-widest mb-2">{featured.subtitle}</p>
                                        <div className="flex items-end justify-between">
                                            <h2 className="text-4xl text-white font-serif font-light">{featured.name}</h2>
                                            <span className="text-gold font-bold text-lg">{featured.price}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                    {/* Left: Description */}
                                    <div>
                                        <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4">
                                            About This Treatment
                                        </span>
                                        <p className="text-charcoal/70 text-lg leading-relaxed font-light mb-8">
                                            {featured.description}
                                        </p>
                                        <Link
                                            href="/services"
                                            className="inline-flex items-center gap-3 bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold transition-all group"
                                        >
                                            Book Now
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>

                                    {/* Right: Treats list */}
                                    <div>
                                        <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4">
                                            Treats & Targets
                                        </span>
                                        <ul className="space-y-3">
                                            {featured.details.map((detail) => (
                                                <li key={detail} className="flex items-center gap-3">
                                                    <Sparkles size={14} className="text-gold shrink-0" />
                                                    <span className="text-charcoal/70 text-sm font-light">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* ─── All Procedures Quick Grid ─── */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4">
                            Full Menu
                        </span>
                        <h2 className="text-4xl md:text-6xl text-navy font-light">
                            All <span className="italic text-accent font-serif">MedSpa</span> Treatments
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {procedures.map((proc, i) => (
                            <motion.button
                                key={proc.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.07 }}
                                onClick={() => {
                                    setActiveProcedure(proc.id);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="group text-left relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
                            >
                                <img
                                    src={proc.image}
                                    alt={proc.name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-gold/90 text-navy text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
                                        {proc.tag}
                                    </span>
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-white/60 text-[10px] uppercase tracking-widest mb-1">{proc.subtitle}</p>
                                    <h3 className="text-white text-xl font-serif mb-1">{proc.name}</h3>
                                    <p className="text-gold text-xs font-semibold">{proc.price}</p>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <section className="py-24 px-6 bg-cream">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-5xl text-navy font-light">
                            Your Questions, <span className="italic text-accent font-serif">Answered</span>
                        </h2>
                    </motion.div>

                    <div className="border-t border-navy/10">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="border-b border-navy/10"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full text-left py-6 flex items-center justify-between gap-4 group"
                                >
                                    <span className="text-navy text-base md:text-lg font-light group-hover:text-gold transition-colors">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        size={20}
                                        className={`text-navy/40 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-charcoal/60 text-sm leading-relaxed pb-6 font-light max-w-2xl">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Booking CTA ─── */}
            <section className="py-16 px-6 bg-navy">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                        <p className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4">Begin Your Journey</p>
                        <h2 className="text-4xl md:text-6xl text-white font-light mb-8">
                            Ready for <span className="font-serif italic text-gold">Results?</span>
                        </h2>
                        <p className="text-white/50 text-base font-light mb-10 max-w-lg mx-auto">
                            Book a complimentary clinical consultation and let our experts craft your personalised treatment plan.
                        </p>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-3 bg-gold hover:bg-gold/90 text-navy px-12 py-5 rounded-full text-sm uppercase tracking-widest font-bold transition-all group shadow-xl"
                        >
                            Book Your Consultation
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
