"use client";

import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const membershipTiers = [
    {
        name: 'Nourish',
        price: '$149',
        period: '/month',
        tagline: 'The Foundation',
        description:
            'Our essential membership for maintaining your natural radiance. Enjoy one signature treatment per month, tailored to your unique skin needs — the perfect introduction to consistent aesthetic care.',
        treatments: [
            'One Signature Facial or Chemical Peel per month',
            'Choose from Hydra Glow, Classic Dermaplaning, or The Aura Reset',
        ],
    },
    {
        name: 'Enhance',
        price: '$299',
        period: '/month',
        tagline: 'Most Popular',
        description:
            'Our most sought-after tier for those who want more than maintenance — they want transformation. Unlock premium treatments, advanced modalities, and deeper, longer-lasting results each month.',
        treatments: [
            'One Premium Laser or Advanced Facial per month',
            'Choose from Laser Resurfacing, IPL Photofacial, or Microneedling with PRP',
        ],
    },
    {
        name: 'Elevate',
        price: '$499',
        period: '/month',
        tagline: 'The Ultimate',
        description:
            'The pinnacle of personalized care. Our Elevate members receive VIP-level access to our most advanced treatments, dedicated concierge scheduling, and exclusive events throughout the year.',
        treatments: [
            'Two Premium treatments per month (mix & match)',
            'Priority access to all new treatments and exclusive member events',
        ],
    },
];

const memberBenefits = [
    '10% off all skincare products',
    '10% off all additional add-on services',
    'Exclusive member-only discounts and seasonal specials',
    'Billed monthly — no long-term contracts required',
    'Memberships can be paused anytime for up to 90 days',
    'Priority booking and dedicated concierge scheduling',
];

const termsAndConditions = [
    'Aura Bloom memberships begin with an initial 3-month term, after which membership auto-renews on a month-to-month basis. Unused credits roll over to the following month and do not expire, so long as you have an active membership in good standing.',
    'In the event that a member fails to show up for a scheduled appointment without 24-hour notice, the monthly treatment credit is forfeited.',
    'Cancellation of membership requires written notice 30 days in advance. Membership will be cancelled 30 days from approval of cancellation. Any remaining treatment credits will expire.',
    'Membership credits are not transferable, exchangeable, or refundable. All services, dues, and fees are subject to change, though we will make every effort to inform our valued members in advance.',
];

export default function MembershipsPage() {
    return (
        <main>
            {/* ─── Hero Section ─── */}
            <section className="py-32 bg-cream px-6 text-center overflow-hidden">
                <div className="max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-6"
                    >
                        Exclusive Membership
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl text-navy font-light leading-[0.95] mb-8"
                    >
                        The Aura Bloom<br />
                        <span className="italic font-serif text-accent">Club</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-charcoal/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10"
                    >
                        Invest in your beauty journey with consistent, expert care.
                        Just as routine wellness leads to lasting health, our membership
                        program is designed with consistency and growth in mind — to help you
                        achieve luminous, youthful skin through curated monthly treatments.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                    >
                        <Link
                            href="#membership-tiers"
                            className="text-navy uppercase tracking-[0.3em] text-xs font-bold border-b border-navy/20 pb-2 hover:text-gold hover:border-gold transition-all"
                        >
                            Explore Memberships
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ─── Full-width Image Divider ─── */}
            <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1920&h=800&auto=format&fit=crop"
                    alt="Luxury skincare treatment"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/20" />
            </section>

            {/* ─── Philosophy Text ─── */}
            <section className="py-24 md:py-32 bg-white px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-6"
                    >
                        Our Philosophy
                    </motion.span>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-charcoal/70 text-lg md:text-xl font-light leading-relaxed"
                    >
                        At Aura Bloom, we don&apos;t believe there is such a thing as &ldquo;perfect&rdquo; skin.
                        Instead, we believe in taking action to enhance your skin&apos;s natural beauty
                        and achieve anti-aging results through consistent maintenance, clean
                        ingredients, and our advanced treatment modalities. Just like regular
                        workouts shape the body, our membership program shapes your skin
                        health — month after month, glow after glow.
                    </motion.p>
                </div>
            </section>

            {/* ─── Membership Tiers ─── */}
            <section id="membership-tiers" className="py-24 md:py-32 bg-cream px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4"
                        >
                            Choose Your Tier
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl text-navy font-light leading-tight"
                        >
                            Curated <span className="italic text-accent">Membership</span><br />
                            Levels
                        </motion.h2>
                    </div>

                    <div className="space-y-0">
                        {membershipTiers.map((tier, index) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="border-t border-navy/10 py-16 md:py-20"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                                    {/* Left: Name + Price */}
                                    <div className="lg:col-span-4">
                                        {tier.tagline === 'Most Popular' && (
                                            <span className="inline-block bg-gold/10 text-gold px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold mb-4">
                                                Most Popular
                                            </span>
                                        )}
                                        <h3 className="text-3xl md:text-4xl text-navy font-serif mb-3">
                                            {tier.name}
                                        </h3>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl md:text-5xl text-navy font-light">
                                                {tier.price}
                                            </span>
                                            <span className="text-charcoal/40 text-sm font-medium">
                                                {tier.period}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Right: Description + Treatments + CTA */}
                                    <div className="lg:col-span-8">
                                        <p className="text-charcoal/60 text-base md:text-lg font-light leading-relaxed mb-8">
                                            {tier.description}
                                        </p>

                                        <div className="space-y-3 mb-10">
                                            {tier.treatments.map((treatment) => (
                                                <div key={treatment} className="flex items-start gap-3">
                                                    <Sparkles className="text-gold shrink-0 mt-1" size={16} />
                                                    <span className="text-navy/80 text-sm font-medium tracking-wide">
                                                        {treatment}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href="/services"
                                            className="bg-gold hover:bg-gold/90 text-navy px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold transition-all inline-flex items-center gap-3 group shadow-xl"
                                        >
                                            Book Now
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        {/* Bottom border */}
                        <div className="border-t border-navy/10" />
                    </div>
                </div>
            </section>

            {/* ─── Membership Benefits ─── */}
            <section className="py-24 md:py-32 bg-white px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {/* Left: Heading */}
                        <div>
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4"
                            >
                                Member Perks
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl text-navy font-light leading-tight mb-6"
                            >
                                All Members<br />
                                <span className="italic text-accent">Enjoy</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-charcoal/50 text-base font-light leading-relaxed"
                            >
                                Every membership tier includes these exclusive benefits,
                                designed to make your Aura Bloom experience truly exceptional.
                            </motion.p>
                        </div>

                        {/* Right: Benefits List */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="space-y-6 pt-2"
                        >
                            {memberBenefits.map((benefit) => (
                                <div key={benefit} className="flex items-start gap-4">
                                    <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={20} />
                                    <span className="text-navy font-medium text-sm tracking-wide leading-relaxed">
                                        {benefit}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── CTA Block ─── */}
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
                            Begin Your Journey
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl text-white mt-6 mb-6 font-light leading-tight">
                            Ready to join the<br />
                            <span className="italic text-accent">Aura Bloom Club?</span>
                        </h2>
                        <p className="text-white/50 text-base md:text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed">
                            Take the first step toward radiant, healthy skin.
                            Book a complimentary consultation to find the perfect membership for you.
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
                                Gift a Membership <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Terms & Conditions ─── */}
            <section className="py-16 bg-cream px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <h3 className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-8">
                            Terms & Conditions
                        </h3>
                        <div className="space-y-4">
                            {termsAndConditions.map((term, i) => (
                                <p key={i} className="text-charcoal/40 text-xs leading-loose font-light">
                                    {term}
                                </p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
