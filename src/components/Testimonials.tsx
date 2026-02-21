"use client";

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Eleanor Vance',
    role: 'Loyal Client',
    content: 'The attention to detail at Aura Bloom is unparalleled. My skin has never looked better after their laser rejuvenation series.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&h=100&auto=format&fit=crop'
  },
  {
    name: 'Julianne Moore',
    role: 'Lash Enthusiast',
    content: 'I\'ve tried many lash artists, but the artistry here is on another level. They look natural yet incredibly striking.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&h=100&auto=format&fit=crop'
  },
  {
    name: 'Sophia Chen',
    role: 'MedSpa Patient',
    content: 'A truly boutique experience. They took the time to understand my goals and delivered results that exceeded my expectations.',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=100&h=100&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-navy overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border border-gold rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-gold rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold">Voices of Beauty</span>
            <h2 className="text-4xl md:text-6xl text-white mt-4 font-light leading-tight">
              Trusted by those who <br />
              <span className="italic text-accent">value excellence.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-gold">
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
            <span className="text-white/60 text-sm ml-2 tracking-widest uppercase">5.0 Google Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl relative"
            >
              <Quote className="text-gold/20 absolute top-8 right-8" size={48} />
              <p className="text-white/80 text-lg italic font-serif leading-relaxed mb-8">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-gold/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-white font-medium tracking-wide">{t.name}</h4>
                  <p className="text-gold text-xs uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
