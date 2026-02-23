"use client";

import { motion, AnimatePresence } from 'motion/react';
import { Zap, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

/* ─── Procedures Data ─── */
const procedures = [
    {
        id: 'hair-removal',
        name: 'Laser Hair Removal',
        subtitle: 'Diode · Nd:YAG · IPL',
        price: 'From $150/session',
        description:
            'Permanent hair reduction using the latest diode laser technology safe for all Fitzpatrick skin types. Our precision-targeted pulses destroy follicles at the root while leaving surrounding skin untouched, delivering smooth, stubble-free results that last.',
        details: [
            'Face, lip & chin',
            'Underarms & bikini area',
            'Legs, arms & back',
            'Chest & stomach',
            'All skin tones & hair types',
            'Package plans available',
        ],
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&h=600&auto=format&fit=crop',
        tag: 'Most Popular',
    },
    {
        id: 'skin-resurfacing',
        name: 'Laser Skin Resurfacing',
        subtitle: 'Fractional CO2 · Erbium',
        price: 'From $450/session',
        description:
            'Fractional CO2 and erbium laser technology creates controlled micro-injuries to stimulate intensive collagen remodelling. This targets fine lines, wrinkles, acne scarring, enlarged pores, and sun damage — revealing dramatically smoother, tighter skin.',
        details: [
            'Fine lines & wrinkles',
            'Acne & surgical scars',
            'Sun damage & age spots',
            'Enlarged pores',
            'Uneven skin texture',
            'Skin tightening & laxity',
        ],
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&h=600&auto=format&fit=crop',
        tag: 'Transformative',
    },
    {
        id: 'ipl-photofacial',
        name: 'IPL Photofacial',
        subtitle: 'Intense Pulsed Light',
        price: 'From $300/session',
        description:
            'Intense Pulsed Light targets melanin and haemoglobin simultaneously — correcting redness, broken capillaries, age spots, and sun damage while stimulating collagen production. A lunchtime treatment with virtually no downtime.',
        details: [
            'Rosacea & facial redness',
            'Broken capillaries & spider veins',
            'Sun damage & pigmentation',
            'Age spots & freckles',
            'Skin tone evening',
            'No downtime required',
        ],
        image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800&h=600&auto=format&fit=crop',
        tag: 'No Downtime',
    },
    {
        id: 'rf-microneedling',
        name: 'RF Microneedling',
        subtitle: 'Morpheus8 · Potenza',
        price: 'From $600/session',
        description:
            'Combining radiofrequency energy with microneedling creates deep dermal heating that tightens skin, dissolves fat, and stimulates powerful collagen production. Ideal for facial contouring, neck laxity, and body tightening.',
        details: [
            'Facial & neck tightening',
            'Jawline contouring',
            'Acne scar revision',
            'Stretch marks & body',
            'Skin texture refinement',
            'Long-lasting collagen boost',
        ],
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&h=600&auto=format&fit=crop',
        tag: 'Contouring',
    },
    {
        id: 'laser-toning',
        name: 'Laser Toning',
        subtitle: 'Q-Switch · Picosecond',
        price: 'From $200/session',
        description:
            'Sub-threshold laser toning uses gentle, repetitive pulses to break down pigment clusters and stimulate collagen without ablating the skin. This highly safe, comfortable treatment is ideal for melasma and overall skin brightening.',
        details: [
            'Melasma & pigmentation',
            'Tattoo lightening',
            'Overall skin brightening',
            'Pore refinement',
            'Safe for Asian skin tones',
            'Zero downtime protocol',
        ],
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&h=600&auto=format&fit=crop',
        tag: 'Brightening',
    },
    {
        id: 'vascular-laser',
        name: 'Vascular Laser',
        subtitle: 'Nd:YAG · KTP',
        price: 'From $250/session',
        description:
            'Targeted vascular laser treatments selectively destroy unwanted blood vessels — including leg veins, spider veins, port wine stains, and facial telangiectasia — with precision that leaves surrounding tissue unaffected.',
        details: [
            'Spider veins & leg veins',
            'Facial telangiectasia',
            'Port wine stains',
            'Cherry angiomas',
            'Rosacea management',
            'Minimal recovery time',
        ],
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&h=600&auto=format&fit=crop',
        tag: 'Vascular',
    },
];

/* ─── FAQ ─── */
const faqs = [
    {
        question: 'Is laser treatment painful?',
        answer: 'Most laser treatments feel like a warm snap or brief tingling sensation. We apply topical numbing cream before more intensive treatments and use built-in cooling systems to maximise comfort throughout your session.',
    },
    {
        question: 'How many sessions will I need?',
        answer: 'This depends on the treatment and your skin. Laser hair removal typically requires 6–8 sessions. Resurfacing and IPL are often done in series of 3–5. We\'ll create a personalised plan at your consultation.',
    },
    {
        question: 'Is there downtime after laser treatments?',
        answer: 'IPL, laser toning, and vascular treatments typically have minimal to no downtime. Fractional CO2 resurfacing and RF microneedling may require 3–7 days of social downtime. We\'ll fully prepare you with pre- and post-care instructions.',
    },
    {
        question: 'Are laser treatments safe for darker skin tones?',
        answer: 'Yes — we have laser technologies specifically calibrated for all Fitzpatrick skin types, including darker skin tones. Our clinical team will select the most appropriate device and settings for your skin at your consultation.',
    },
    {
        question: 'When will I see results?',
        answer: 'Some treatments like IPL show results within 1–2 weeks as pigment rises and fades. Collagen-stimulating treatments (CO2, RF microneedling) show progressive improvement over 3–6 months as new collagen builds.',
    },
];

const sidebarLinks = procedures.map(p => ({ id: p.id, name: p.name }));

export default function LaserPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [activeProcedure, setActiveProcedure] = useState(procedures[0].id);

    const featured = procedures.find(p => p.id === activeProcedure) ?? procedures[0];

    return (
        <main className="bg-cream">

            {/* ─── Hero ─── */}
            <section className="relative pt-40 pb-0 overflow-hidden">
                <div className="absolute inset-0 top-0">
                    <img
                        src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1920&h=700&auto=format&fit=crop"
                        alt="Laser treatments"
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
                        Laser &<br />
                        <span className="font-serif italic text-gold">Light Therapy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25 }}
                        className="text-white/60 text-lg font-light max-w-xl mx-auto"
                    >
                        Advanced laser technology for permanent results — skin perfected with precision.
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
                                Laser Treatments
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
                                    Book a complimentary laser consultation with our clinical team.
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

                                    <div>
                                        <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4">
                                            Treats & Targets
                                        </span>
                                        <ul className="space-y-3">
                                            {featured.details.map((detail) => (
                                                <li key={detail} className="flex items-center gap-3">
                                                    <Zap size={14} className="text-gold shrink-0" />
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

            {/* ─── All Treatments Quick Grid ─── */}
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
                            All <span className="italic text-accent font-serif">Laser</span> Treatments
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
                            Reveal Your <span className="font-serif italic text-gold">Best Skin.</span>
                        </h2>
                        <p className="text-white/50 text-base font-light mb-10 max-w-lg mx-auto">
                            Book a complimentary laser consultation and let our specialists design your personalised treatment programme.
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
