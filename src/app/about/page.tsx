"use client";

import { motion } from 'motion/react';
import { Award, Heart, Shield, Sparkles, Star, ArrowRight, CheckCircle2, Zap, Eye, Leaf } from 'lucide-react';
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

const services = [
    {
        title: 'Expert Facials',
        desc: 'Medical-grade facials customized to your unique skin, from DiamondGlow to signature chemical peels.',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&h=800&auto=format&fit=crop',
        href: '/services',
    },
    {
        title: 'Injectables & Fillers',
        desc: 'Precision Botox, lip fillers, and dermal contouring by board-certified practitioners.',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&h=800&auto=format&fit=crop',
        href: '/services',
    },
    {
        title: 'Laser Treatments',
        desc: 'BBL, Moxi, CO2 resurfacing, and laser hair removal for flawless skin rejuvenation.',
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=600&h=800&auto=format&fit=crop',
        href: '/services',
    },
    {
        title: 'Lash & Brow Artistry',
        desc: 'From classic lash sets to Russian Volume and brow lamination — effortless, everyday glamour.',
        image: 'https://images.unsplash.com/photo-1512496015851-a1fbaf6928e4?q=80&w=600&h=800&auto=format&fit=crop',
        href: '/services',
    },
    {
        title: 'Body Contouring',
        desc: 'Non-invasive body sculpting and skin tightening for a confident, refined silhouette.',
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=600&h=800&auto=format&fit=crop',
        href: '/services',
    },
    {
        title: 'IV Therapy & Wellness',
        desc: 'Replenish, rehydrate, and rejuvenate from within with our signature vitamin infusions.',
        image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=600&h=800&auto=format&fit=crop',
        href: '/services',
    },
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

            {/* ─── Committed to Your Skin ─── */}
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
                                Our Commitment
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

            {/* ─── Led by Medical Excellence (User's existing section) ─── */}
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

            {/* ─── Social Proof Bar (Dark) ─── */}
            <section className="py-20 bg-navy px-6 relative overflow-hidden">
                {/* Decorative radial */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,#C5A059,transparent_70%)]" />
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl text-white font-light tracking-wide uppercase mb-4">
                            The Reviews Are <span className="italic text-accent font-serif lowercase">Glowing</span>
                        </h2>
                        <div className="w-12 h-0.5 bg-gold mx-auto" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {[
                            { platform: 'Google', count: '200+', label: 'five star reviews' },
                            { platform: 'Yelp', count: '150+', label: 'five star reviews' },
                            { platform: 'RealSelf', count: '100+', label: 'five star reviews' },
                        ].map((review, i) => (
                            <motion.div
                                key={review.platform}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <h3 className="text-white uppercase tracking-[0.3em] text-sm font-bold mb-3">
                                    {review.platform}
                                </h3>
                                <p className="text-white/60 text-sm mb-4 font-light">{review.count} {review.label}</p>
                                <div className="flex items-center justify-center gap-1 mb-4">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} size={14} className="text-gold fill-gold" />
                                    ))}
                                </div>
                                <Link
                                    href="/testimonials"
                                    className="text-white/50 hover:text-white text-xs uppercase tracking-widest font-medium transition-colors underline underline-offset-4"
                                >
                                    Read More
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Clean Commitment + Product Philosophy ─── */}
            <section className="py-24 bg-white px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Left: Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4">
                                Our Philosophy
                            </span>
                            <h2 className="text-4xl md:text-5xl text-navy font-light leading-tight mb-8 font-serif">
                                Clean <span className="italic text-accent">Commitment</span>
                            </h2>
                            <p className="text-charcoal/70 text-lg leading-relaxed mb-6 font-light">
                                At Aura Bloom, &lsquo;clean&rsquo; means every product has been vetted for safety, efficacy,
                                and ethical sourcing. We trust in the integrity of our brand partners and would never
                                use a product or ingredient that could compromise your skin&rsquo;s health.
                            </p>
                            <p className="text-charcoal/70 text-lg leading-relaxed mb-6 font-light">
                                We partner with brands that are female-founded, science-backed, and committed to
                                innovation. Our curation standards extend into the treatment room — each product
                                that touches your skin at Aura Bloom is held to the same standards as those
                                we recommend for home use.
                            </p>
                            <p className="text-charcoal/70 text-lg leading-relaxed font-light">
                                Our aesthetic specialists are here to help you build the perfect routine —
                                walking you through best practices and ensuring each product fits your unique needs.
                            </p>
                        </motion.div>

                        {/* Right: Dramatic image */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&h=1000&auto=format&fit=crop"
                                    alt="Premium skincare products and clean beauty philosophy"
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-gold/10 border border-gold/20 p-6 rounded-2xl hidden lg:block max-w-[220px] backdrop-blur-sm">
                                <p className="text-navy text-xs uppercase tracking-widest font-bold mb-1">Our Pledge</p>
                                <p className="text-charcoal/60 text-xs leading-relaxed">
                                    Medical-grade. Ethically sourced. Science-backed results.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── Our Skincare Services Grid ─── */}
            <section className="py-24 bg-cream px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4">
                            What We Offer
                        </span>
                        <h2 className="text-3xl md:text-4xl text-navy font-light tracking-wide uppercase">
                            Our Skincare <span className="italic text-accent font-serif lowercase">Services</span>
                        </h2>
                        <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="group"
                            >
                                <Link href={service.href}>
                                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mb-6">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            referrerPolicy="no-referrer"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <h3 className="text-white font-serif text-xl mb-1">{service.title}</h3>
                                            <p className="text-white/60 text-sm font-light">{service.desc}</p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-16 text-center"
                    >
                        <Link
                            href="/services"
                            className="bg-gold hover:bg-gold/90 text-navy px-12 py-5 rounded-full text-sm uppercase tracking-widest font-bold transition-all shadow-xl inline-flex items-center gap-3 group"
                        >
                            View Full Service Menu
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ─── Values Grid ─── */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4">
                            Our Values
                        </span>
                        <h2 className="text-3xl md:text-4xl text-navy font-light tracking-wide uppercase">
                            What Makes Us <span className="italic text-accent font-serif lowercase">Different</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: 'Safety First', desc: 'Rigorous medical protocols, FDA-approved technology, and the highest hygiene standards in every procedure.' },
                            { icon: Award, title: 'Expertise', desc: 'Board-certified practitioners with decades of combined experience, trained in the latest global techniques.' },
                            { icon: Heart, title: 'Compassion', desc: 'A welcoming, judgment-free sanctuary where every client is treated with warmth and discretion.' },
                            { icon: Sparkles, title: 'Natural Results', desc: 'We enhance your unique features — never alter. Subtle, glowing results that look and feel authentically you.' },
                        ].map((val, i) => (
                            <motion.div
                                key={val.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-cream p-8 rounded-2xl border border-navy/5 text-center"
                            >
                                <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                                    <val.icon className="text-gold" size={24} />
                                </div>
                                <h3 className="font-serif text-xl text-navy mb-3">{val.title}</h3>
                                <p className="text-sm text-charcoal/60 leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA Block ─── */}
            <section className="py-24 bg-cream px-6">
                <div className="max-w-5xl mx-auto bg-navy rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#C5A059,transparent_70%)]" />
                    </div>
                    <div className="relative z-10">
                        <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold">
                            Begin Your Journey
                        </span>
                        <h2 className="text-4xl md:text-5xl text-white mt-6 mb-6 font-light leading-tight font-serif">
                            Ready to reveal your most <br />
                            <span className="italic text-accent">radiant self?</span>
                        </h2>
                        <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto font-light">
                            Visit us and experience the Aura Bloom difference — where luxury meets science
                            in a sanctuary designed for your transformation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/services"
                                className="bg-gold hover:bg-gold/90 text-navy px-12 py-5 rounded-full text-sm uppercase tracking-widest font-bold transition-all shadow-xl"
                            >
                                Book Now
                            </Link>
                            <Link
                                href="/gift-cards"
                                className="text-white/80 hover:text-white text-sm uppercase tracking-widest font-medium transition-all flex items-center gap-2"
                            >
                                Gift a Treatment <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
