"use client";

import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

/* ─── Featured Bundles ─── */
const bundles = [
    {
        title: 'The Aura Lash Lift',
        normalPrice: '$170',
        nowPrice: '$153',
        description:
            'Take your lovely lashes to the next level and ditch the mascara with our fluttering lash lift and lash tint bundle.',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&h=600&auto=format&fit=crop',
    },
    {
        title: 'The Glamour Set',
        normalPrice: '$225',
        nowPrice: '$202',
        description:
            'Our signature full-volume lash set paired with a brow lamination and tint — the ultimate eye-defining experience.',
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=600&h=600&auto=format&fit=crop',
    },
    {
        title: 'The Everyday Flutter',
        normalPrice: '$195',
        nowPrice: '$175',
        description:
            'A step above the rest, this combo features our most popular classic lash set and a lash lift for effortless daily glamour.',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&h=600&auto=format&fit=crop',
    },
];

/* ─── A La Carte Services ─── */
const alaCarteServices = [
    {
        name: 'Lash Lift',
        price: '$135',
        description: 'A semi-permanent treatment that gives your natural lashes an illusion of perfectly curled lashes with added definition.',
    },
    {
        name: 'Lash Tint',
        price: '$35',
        description: 'Enhance your natural lashes with a rich, lasting tint that adds depth and eliminates the need for mascara.',
    },
    {
        name: 'Classic Full Set',
        price: '$180',
        description: 'One-to-one application of premium lash extensions for a natural, elegant look that enhances your eye shape.',
    },
    {
        name: 'Volume Full Set',
        price: '$250',
        description: 'Multi-lash fan technique for a dramatic, full-glam appearance with maximum density and weightless comfort.',
    },
    {
        name: 'Hybrid Full Set',
        price: '$220',
        description: 'The best of both worlds — a mix of classic and volume techniques for a textured, dimensional look.',
    },
    {
        name: 'Lash Fill (2 weeks)',
        price: '$85',
        description: 'Maintain your gorgeous lash set with a refill appointment within two weeks of your initial application.',
    },
    {
        name: 'Lash Fill (3 weeks)',
        price: '$110',
        description: 'A three-week fill to keep your extensions looking full, fresh, and perfectly placed.',
    },
    {
        name: 'Lash Removal',
        price: '$40',
        description: 'Safe, gentle removal of your lash extensions without damaging your natural lashes.',
    },
    {
        name: 'Brow Lamination',
        price: '$130',
        description: 'Restructure your brow hairs to achieve a fuller, more defined shape that stays in place for weeks.',
    },
    {
        name: 'Brow Tint',
        price: '$30',
        description: 'A custom-color brow tint to add richness and definition to your brow shape.',
    },
    {
        name: 'Brow Shaping',
        price: '$45',
        description: 'Our signature brow mapping technique sculpts the ideal brow shape for your unique face structure.',
    },
    {
        name: 'Brow Wax',
        price: '$25',
        description: 'Love your brows but just need a cleanup? A quick, precise wax to keep things tidy.',
    },
];

/* ─── FAQ ─── */
const faqs = [
    {
        question: 'Can I get a facial with my lash or brow service?',
        answer: 'Absolutely! We recommend scheduling your facial before your lash or brow appointment. Our team can help you coordinate both services for the same visit.',
    },
    {
        question: "I'm not sure which lash service to book",
        answer: "No worries — that's what we're here for! Book a complimentary consultation and our lash artists will assess your natural lashes, discuss your desired look, and recommend the perfect service for you.",
    },
    {
        question: 'How long do lash extensions last?',
        answer: 'With proper care, a full set of lash extensions lasts 4-6 weeks. We recommend fills every 2-3 weeks to maintain a full, lush look. Your natural lash growth cycle also plays a role.',
    },
    {
        question: 'Is Aura Bloom by appointment only?',
        answer: 'Yes, all of our lash and brow services are by appointment only. This ensures we can dedicate the time and attention each client deserves. Book online or call us to schedule.',
    },
    {
        question: 'What should I do before my appointment?',
        answer: 'Arrive with clean lashes — no mascara or eye makeup. Avoid caffeine right before your appointment so you can relax. For brow services, avoid tweezing or waxing for at least 2 weeks prior.',
    },
];

export default function LashesPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className="bg-cream">
            {/* ─── Hero ─── */}
            <section className="pt-40 pb-16 text-center px-6">
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
                    className="text-5xl md:text-7xl lg:text-8xl text-navy font-light leading-[0.95] uppercase tracking-wide"
                >
                    Lash & Brow<br />
                    <span className="font-serif italic text-accent normal-case">Services</span>
                </motion.h1>
            </section>

            {/* ─── Featured Bundles (3-column grid with images) ─── */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {bundles.map((bundle, i) => (
                            <motion.div
                                key={bundle.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                {/* Image */}
                                <div className="aspect-square rounded-sm overflow-hidden mb-8">
                                    <img
                                        src={bundle.image}
                                        alt={bundle.title}
                                        className="w-full h-full object-cover"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-navy uppercase tracking-[0.2em] text-sm font-bold mb-3">
                                    {bundle.title}
                                </h3>

                                {/* Pricing */}
                                <p className="text-charcoal/60 text-sm mb-4">
                                    <span className="line-through mr-2">Normally {bundle.normalPrice}</span>
                                    <span className="text-navy font-semibold">Now {bundle.nowPrice}</span>
                                </p>

                                {/* Description */}
                                <p className="text-charcoal/60 text-sm leading-relaxed mb-8 max-w-sm mx-auto font-light">
                                    {bundle.description}
                                </p>

                                {/* Book Button */}
                                <Link
                                    href="/services"
                                    className="inline-block border border-navy/30 hover:bg-navy hover:text-white text-navy px-10 py-3 uppercase tracking-[0.2em] text-xs font-bold transition-all"
                                >
                                    Book
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── A La Carte Section ─── */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl md:text-3xl text-navy uppercase tracking-[0.15em] font-light leading-relaxed">
                            No Bundle? No Problem!<br />
                            <span className="font-bold">A La Carte Lash & Brow Services</span>
                        </h2>
                        <div className="w-12 h-0.5 bg-navy/20 mx-auto mt-6" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
                        {alaCarteServices.map((service, i) => (
                            <motion.div
                                key={service.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: (i % 3) * 0.08 }}
                                className="text-center"
                            >
                                <h3 className="text-navy uppercase tracking-[0.2em] text-xs font-bold mb-2">
                                    {service.name}
                                </h3>
                                <p className="text-navy text-lg font-light mb-3">{service.price}</p>
                                <p className="text-charcoal/50 text-sm leading-relaxed font-light max-w-xs mx-auto mb-6">
                                    {service.description}
                                </p>
                                <Link
                                    href="/services"
                                    className="inline-block border border-navy/30 hover:bg-navy hover:text-white text-navy px-8 py-2.5 uppercase tracking-[0.2em] text-[10px] font-bold transition-all"
                                >
                                    Book
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FAQ Accordion ─── */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-navy uppercase tracking-[0.2em] text-sm font-bold mb-12"
                    >
                        Frequently Asked Questions
                    </motion.h2>

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

            {/* ─── Cancellation Policy ─── */}
            <section className="py-16 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-navy uppercase tracking-[0.2em] text-xs font-bold mb-6">
                        Cancellation Policy
                    </h3>
                    <p className="text-charcoal/40 text-sm leading-relaxed font-light">
                        We require at least 24 hours&apos; notice for cancellations or rescheduling.
                        Late cancellations or no-shows will be subject to a fee equal to 50% of the
                        service price. We understand that life happens — please reach out to us as
                        soon as possible so we can accommodate your needs.
                    </p>
                </div>
            </section>

            {/* ─── Full-width Image Divider ─── */}
            <section className="relative h-[50vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1920&h=800&auto=format&fit=crop"
                    alt="Beautiful lash treatment result"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Link
                        href="/services"
                        className="bg-white hover:bg-gold hover:text-navy text-navy px-12 py-5 uppercase tracking-[0.2em] text-sm font-bold transition-all shadow-2xl"
                    >
                        View Full Service Menu
                    </Link>
                </div>
            </section>
        </main>
    );
}
