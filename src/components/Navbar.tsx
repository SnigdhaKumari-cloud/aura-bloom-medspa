"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar, Search, User, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
    <>
      {/* Announcement Bar */}
      <div className="bg-glass-teal text-white py-2 px-4 text-center">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold">
          Book Your Transformation Today - Limited Availability
        </p>
      </div>

      <nav
        className={cn(
          'sticky top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 border-b border-navy/5',
          scrolled ? 'bg-glass-cream/95 backdrop-blur-md py-3 shadow-sm' : 'bg-glass-cream'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Left: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-10 flex-1">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[13px] uppercase tracking-[0.2em] transition-colors font-medium",
                  pathname === link.href ? "text-glass-peach" : "text-navy hover:text-glass-peach"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center: Brand Logo */}
          <div className="flex items-center justify-center flex-1">
            <Link
              href="/"
              className="text-3xl font-serif tracking-[0.2em] text-navy flex flex-col items-center leading-none"
            >
              <span className="text-gold font-light">AURA</span>
              <span className="text-[11px] tracking-[0.5em] text-navy/80 font-bold mt-1">BLOOM MEDSPA</span>
            </Link>
          </div>

          {/* Right: Utility Icons & Second Row Nav (Desktop) */}
          <div className="hidden md:flex items-center justify-end gap-10 flex-1">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[13px] uppercase tracking-[0.2em] transition-colors font-medium",
                  pathname === link.href ? "text-glass-peach" : "text-navy hover:text-glass-peach"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-6 ml-6 pl-6 border-l border-navy/10">
              <button className="text-navy hover:text-glass-peach transition-colors">
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button className="text-navy hover:text-glass-peach transition-colors">
                <User size={20} strokeWidth={1.5} />
              </button>
              <Link href="/cart" className="text-navy hover:text-glass-peach transition-colors flex items-center gap-1">
                <ShoppingBag size={20} strokeWidth={1.5} />
                <span className="text-[11px] font-bold tracking-normal">(0)</span>
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-navy"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 bg-[#fbfcf7] border-t border-navy/5 overflow-hidden md:hidden"
            >
              <div className="flex flex-col p-8 gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-sm uppercase tracking-[0.2em] font-bold",
                      pathname === link.href ? "text-glass-peach" : "text-navy hover:text-glass-peach"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-4 pt-6 border-t border-navy/10">
                  <button className="text-navy flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                    <Search size={18} /> Search
                  </button>
                  <button className="text-navy flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                    <User size={18} /> Account
                  </button>
                </div>
                <Link
                  href="/memberships"
                  onClick={() => setIsOpen(false)}
                  className="bg-glass-teal text-white py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold text-center mt-4"
                >
                  Join the Experience
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
