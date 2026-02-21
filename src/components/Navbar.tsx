"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pathname = usePathname();

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Memberships', href: '/memberships' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'Testimonials', href: '/testimonials' }
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        scrolled ? 'bg-navy/95 backdrop-blur-lg py-3 shadow-xl' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-2xl font-serif tracking-widest text-white flex flex-col leading-none"
          >
            <span className="text-gold font-light">AURA</span>
            <span className="text-[10px] tracking-[0.4em] opacity-80">BLOOM MEDSPA</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-widest transition-colors",
                pathname === link.href ? "text-gold font-bold" : "text-white/80 hover:text-gold"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/memberships" className="bg-gold hover:bg-gold/90 text-navy px-6 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all flex items-center gap-2">
            <Calendar size={14} />
            Join Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-navy border-t border-white/10 p-6 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-serif",
                pathname === link.href ? "text-gold" : "text-white/90 hover:text-gold"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/memberships" onClick={() => setIsOpen(false)} className="bg-gold text-navy px-6 py-3 rounded-full text-sm uppercase tracking-widest font-semibold w-full text-center">
            View Memberships
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
