"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '../lib/utils';

const serviceSubLinks = [
  { name: 'Injectables', href: '/services#injectables' },
  { name: 'Laser & Light', href: '/services#laser-light' },
  { name: 'Aesthetics', href: '/services#aesthetics' },
  { name: 'View All Services', href: '/services' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'About', href: '/about' },
    { name: 'Memberships', href: '/memberships' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'Testimonials', href: '/testimonials' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  // Glasskin-style: teal text on solid bg, white text over hero
  const teal = '#27899D';
  const peachBg = '#F6DFD6';
  const mintBg = '#E8EDE5';

  return (
    <>
      {/* Announcement Bar — peach bg, teal text, hides on scroll */}
      <div
        className={cn(
          'fixed top-0 left-0 right-0 z-[60] text-center py-2.5 px-4 transition-all duration-500',
          scrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        )}
        style={{ backgroundColor: peachBg }}
      >
        <p
          className="text-[11px] uppercase font-semibold"
          style={{ color: teal, letterSpacing: '2.8px' }}
        >
          Book Your Transformation Today
        </p>
      </div>

      {/* Main Header — Fixed, two-tier (logo + nav) */}
      <header
        className={cn(
          'fixed left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'top-0' : 'top-[38px]'
        )}
        style={{
          backgroundColor: scrolled ? mintBg : 'transparent',
        }}
      >
        {/* Top Tier: Logo (center) + Utility Icons (right) */}
        <div className="max-w-[1400px] mx-auto px-8 pt-4 pb-2 flex items-center justify-between relative">
          {/* Left spacer */}
          <div className="flex-1" />

          {/* Center: Logo */}
          <Link
            href="/"
            className="flex flex-col items-center leading-none"
          >
            <span
              className="text-4xl font-serif tracking-[0.25em] transition-colors duration-300"
              style={{ color: scrolled ? teal : 'white' }}
            >
              AURA
            </span>
            <span
              className="text-[10px] tracking-[0.5em] font-bold mt-0.5 uppercase transition-colors duration-300"
              style={{ color: scrolled ? teal : 'rgba(255,255,255,0.8)' }}
            >
              Bloom Medspa
            </span>
          </Link>

          {/* Right: Utility Links */}
          <div className="flex-1 flex items-center justify-end gap-7">
            <button
              className="hidden md:flex items-center gap-1.5 text-[11px] uppercase font-medium transition-colors duration-300"
              style={{ color: scrolled ? teal : 'white', letterSpacing: '2.8px' }}
            >
              <User size={15} strokeWidth={1.5} />
              Account
            </button>
            <button
              className="hidden md:flex items-center gap-1.5 text-[11px] uppercase font-medium transition-colors duration-300"
              style={{ color: scrolled ? teal : 'white', letterSpacing: '2.8px' }}
            >
              <Search size={15} strokeWidth={1.5} />
              Search
            </button>
            <Link
              href="/cart"
              className="hidden md:flex items-center gap-1.5 text-[11px] uppercase font-medium transition-colors duration-300"
              style={{ color: scrolled ? teal : 'white', letterSpacing: '2.8px' }}
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              Cart (0)
            </Link>

            {/* Mobile Toggle */}
            <button
              className="md:hidden transition-colors"
              style={{ color: scrolled ? teal : 'white' }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Bottom Tier: Centered Nav Links — Desktop */}
        <div className="hidden md:block">
          <div className="max-w-[1400px] mx-auto px-8">
            <nav className="flex items-center justify-center gap-10 py-3 relative">
              {navLinks.map((link) => {
                const active = isActive(link.href);

                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        onMouseEnter={() => setServicesOpen(true)}
                        className="text-[13px] uppercase font-medium py-1 relative transition-colors duration-300"
                        style={{
                          color: scrolled ? teal : 'white',
                          letterSpacing: '2.8px',
                        }}
                      >
                        {link.name}
                        {/* Active / hover underline */}
                        <span
                          className={cn(
                            "absolute -bottom-1 left-0 right-0 h-[1.5px] transition-opacity duration-300",
                            active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          )}
                          style={{ backgroundColor: scrolled ? teal : 'white' }}
                        />
                      </button>

                      {/* Dropdown — Glasskin-style: inline, same bg as header */}
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -2 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -2 }}
                            transition={{ duration: 0.15, ease: 'easeOut' }}
                            onMouseLeave={() => setServicesOpen(false)}
                            className="absolute top-full left-0 mt-2 min-w-[200px] py-3 z-50 rounded-sm shadow-lg"
                            style={{ backgroundColor: mintBg }}
                          >
                            {serviceSubLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                href={subLink.href}
                                onClick={() => setServicesOpen(false)}
                                className="block px-5 py-2.5 text-[12px] uppercase font-normal transition-colors duration-200 hover:opacity-70"
                                style={{ color: teal, letterSpacing: '2px' }}
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[13px] uppercase font-medium py-1 relative group transition-colors duration-300"
                    style={{
                      color: scrolled ? teal : 'white',
                      letterSpacing: '2.8px',
                    }}
                  >
                    {link.name}
                    {/* Active underline */}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 right-0 h-[1.5px] transition-opacity duration-300",
                        active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      )}
                      style={{ backgroundColor: scrolled ? teal : 'white' }}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 overflow-hidden md:hidden shadow-lg"
              style={{ backgroundColor: mintBg }}
            >
              <div className="flex flex-col p-8 gap-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="w-full text-left text-[13px] uppercase font-semibold flex items-center justify-between py-3 px-4 rounded-lg transition-all"
                          style={{ color: teal, letterSpacing: '2.8px' }}
                        >
                          {link.name}
                          <span
                            className={cn(
                              "text-sm transition-transform duration-300",
                              mobileServicesOpen ? "rotate-180" : ""
                            )}
                          >
                            ▾
                          </span>
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-6 py-2 flex flex-col gap-1">
                                {serviceSubLinks.map((subLink) => (
                                  <Link
                                    key={subLink.name}
                                    href={subLink.href}
                                    onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                                    className="text-[12px] uppercase py-2 px-4 rounded-lg transition-all hover:opacity-70"
                                    style={{ color: teal, letterSpacing: '2px' }}
                                  >
                                    {subLink.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-[13px] uppercase font-semibold py-3 px-4 rounded-lg block transition-all",
                          isActive(link.href) ? "underline underline-offset-4" : "hover:opacity-70"
                        )}
                        style={{ color: teal, letterSpacing: '2.8px' }}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="flex flex-col gap-4 pt-6 border-t mt-4" style={{ borderColor: `${teal}20` }}>
                  <button
                    className="flex items-center gap-2 text-[11px] uppercase font-bold"
                    style={{ color: teal, letterSpacing: '2.8px' }}
                  >
                    <Search size={18} /> Search
                  </button>
                  <button
                    className="flex items-center gap-2 text-[11px] uppercase font-bold"
                    style={{ color: teal, letterSpacing: '2.8px' }}
                  >
                    <User size={18} /> Account
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

    </>
  );
}
