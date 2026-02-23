"use client";

import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, Heart, ArrowRight, Plus } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { cn } from '../lib/utils';

const categories = ['All', 'MedSpa', 'Lashes', 'Aesthetics'];

const services = [
  {
    id: 'medspa-botox',
    category: 'MedSpa',
    title: 'Neuromodulators',
    description: 'Precision-placed Botox, Dysport, and Xeomin to smooth dynamic wrinkles while maintaining full natural expressivity.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&h=800&auto=format&fit=crop',
    price: 'From $12/unit',
    tags: ['Preventative', 'Smooth', 'Expert'],
    href: '/services/medspa'
  },
  {
    id: 'medspa-filler',
    category: 'MedSpa',
    title: 'Dermal Fillers',
    description: 'Restore volume and contour to lips, cheeks, and jawline for a lifted, youthful look that lasts up to 2 years.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=600&h=800&auto=format&fit=crop',
    price: 'From $600/syringe',
    tags: ['Volume', 'Contour', 'Youthful'],
    href: '/services/medspa'
  },
  {
    id: 'lash-classic',
    category: 'Lashes',
    title: 'Signature Classic Set',
    description: 'One-to-one application for a natural, elegant look that enhances your eye shape.',
    icon: Eye,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&h=800&auto=format&fit=crop',
    price: 'From $120',
    tags: ['Natural', 'Elegant', 'Daily Wear'],
    href: '/services/lashes'
  },
  {
    id: 'lash-volume',
    category: 'Lashes',
    title: 'Russian Volume',
    description: 'Multi-lash technique for a dramatic, full-glam appearance with maximum density.',
    icon: Eye,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&h=800&auto=format&fit=crop',
    price: 'From $180',
    tags: ['Dramatic', 'Fullness', 'Glamour'],
    href: '/services/lashes'
  },
  {
    id: 'medspa-botox',
    category: 'MedSpa',
    title: 'Neuromodulators',
    description: 'Expertly placed injectables to smooth wrinkles and prevent new lines from forming.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=600&h=800&auto=format&fit=crop',
    price: 'From $12/unit',
    tags: ['Preventative', 'Smooth', 'Expert']
  },
  {
    id: 'medspa-filler',
    category: 'MedSpa',
    title: 'Dermal Fillers',
    description: 'Restore volume and contour to lips, cheeks, and jawline for a youthful lift.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&h=800&auto=format&fit=crop',
    price: 'From $600',
    tags: ['Volume', 'Contour', 'Youthful']
  }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-32 bg-cream px-6 relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-20 -right-20 text-[20rem] font-serif text-navy/5 select-none pointer-events-none leading-none">
        Aura
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl text-navy font-light leading-tight"
            >
              Curated <span className="italic text-accent">Beauty</span> <br />
              Solutions
            </motion.h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-8 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all border",
                  activeCategory === cat
                    ? "bg-navy text-white border-navy shadow-lg"
                    : "bg-transparent text-navy/60 border-navy/10 hover:border-navy/30"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-8 shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  <div className="absolute top-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-white">
                      <service.icon size={20} />
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-gold text-xs uppercase tracking-widest font-bold mb-2">{service.category}</p>
                    <h3 className="text-2xl text-white font-serif mb-4">{service.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm font-medium">{service.price}</span>
                      <button className="bg-gold text-navy p-2 rounded-full transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="px-2">
                  <p className="text-charcoal/60 leading-relaxed text-sm mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest text-navy/40 border border-navy/10 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={service.href ?? '/services'} className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-navy group/btn inline-flex">
                    Book Now
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 text-center"
        >
          <Link href="/services" className="border-b border-navy/20 pb-2 text-navy uppercase tracking-[0.3em] text-xs font-bold hover:text-gold hover:border-gold transition-all">
            View Full Treatment Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
