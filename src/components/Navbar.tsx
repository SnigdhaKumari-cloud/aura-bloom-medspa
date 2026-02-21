"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, User, ShoppingBag, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '../lib/utils';

const serviceSubLinks = [
  { name: 'Injectables', href: '/services#injectables' },
  { name: 'Laser & Light', href: '/services#laser-light' },
  { name: 'Aesthetics', href: '/services#aesthetics' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  // Determine colors based on scroll + page
  const isTransparent = isHome && !scrolled;
  const textColor = isTransparent ? 'text-white' : 'text-navy';
  const hoverTextColor = isTransparent ? 'hover:text-gold' : 'hover:text-glass-teal';
  const logoColor = isTransparent ? 'text-white' : 'text-gold';
  const subLogoColor = isTransparent ? 'text-white/80' : 'text-navy/80';
  const borderColor = isTransparent ? 'border-white/10' : 'border-navy/8';
  const activeUnderline = isTransparent ? 'bg-gold' : 'bg-navy';

  return (
    <>
      {/* Announcement Bar — Glasskin-style peach/nude bar */}
      <div className="bg-accent text-navy py-2.5 px-4 text-center">
        <p className="text-[11px] uppercase tracking-[0.35em] font-semibold">
          Book Your Transformation Today — Limited Availability
        </p>
      </div>

      {/* Main Header — Two-tier Glasskin style */}
      <header
        className={cn(
          'sticky top-0 left-0 right-0 z-50 transition-all duration-500',
          isTransparent
            ? 'bg-transparent'
            : 'bg-cream/95 backdrop-blur-md shadow-sm'
        )}
      >
        {/* Top Tier: Logo (center) + Utility Icons (right) */}
        <div className={cn(
          'border-b transition-colors duration-500',
          borderColor
        )}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Left spacer for balance */}
            <div className="flex-1" />

            {/* Center: Brand Logo */}
            <Link
              href="/"
              className="flex flex-col items-center leading-none group"
            >
              <span className={cn(
                "text-4xl font-serif tracking-[0.25em] transition-colors duration-300",
                logoColor
              )}>
                AURA
              </span>
              <span className={cn(
                "text-[10px] tracking-[0.6em] font-bold mt-1 uppercase transition-colors duration-300",
                subLogoColor
              )}>
                Bloom Medspa
              </span>
            </Link>

            {/* Right: Utility Icons */}
            <div className="flex-1 flex items-center justify-end gap-6">
              <button className={cn(
                "hidden md:flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300",
                textColor, hoverTextColor
              )}>
                <User size={16} strokeWidth={1.5} />
                Account
              </button>
              <button className={cn(
                "hidden md:flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300",
                textColor, hoverTextColor
              )}>
                <Search size={16} strokeWidth={1.5} />
                Search
              </button>
              <Link href="/cart" className={cn(
                "hidden md:flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300",
                textColor, hoverTextColor
              )}>
                <ShoppingBag size={16} strokeWidth={1.5} />
                Cart (0)
              </Link>

              {/* Mobile Toggle */}
              <button
                className={cn("md:hidden transition-colors", textColor)}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Centered Navigation Links — Desktop only */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-6">
            <nav className="flex items-center justify-center gap-8 py-3">
              {navLinks.map((link) => {
                const active = isActive(link.href);

                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={cn(
                          "text-[12px] uppercase tracking-[0.25em] transition-all duration-300 font-medium flex items-center gap-1 py-1 relative group",
                          textColor, hoverTextColor
                        )}
                      >
                        {link.name}
                        <ChevronDown
                          size={12}
                          strokeWidth={1.5}
                          className={cn(
                            "transition-transform duration-300",
                            servicesOpen ? "rotate-180" : ""
                          )}
                        />
                        {/* Active underline */}
                        {active && (
                          <span className={cn(
                            "absolute -bottom-1 left-0 right-0 h-[1.5px]",
                            activeUnderline
                          )} />
                        )}
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white border border-navy/10 rounded-lg shadow-xl min-w-[220px] overflow-hidden z-50"
                          >
                            <div className="py-2">
                              {serviceSubLinks.map((subLink) => (
                                <Link
                                  key={subLink.name}
                                  href={subLink.href}
                                  onClick={() => setServicesOpen(false)}
                                  className="block px-6 py-3 text-[12px] tracking-[0.15em] text-navy/80 hover:bg-cream hover:text-navy transition-colors font-light"
                                >
                                  {subLink.name}
                                </Link>
                              ))}
                              <div className="border-t border-navy/5 mt-1 pt-1">
                                <Link
                                  href="/services"
                                  onClick={() => setServicesOpen(false)}
                                  className="block px-6 py-3 text-[12px] tracking-[0.15em] text-glass-teal hover:bg-cream transition-colors font-medium"
                                >
                                  View All Services
                                </Link>
                              </div>
                            </div>
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
                    className={cn(
                      "text-[12px] uppercase tracking-[0.25em] transition-all duration-300 font-medium py-1 relative group",
                      textColor, hoverTextColor
                    )}
                  >
                    {link.name}
                    {/* Active underline */}
                    {active && (
                      <span className={cn(
                        "absolute -bottom-1 left-0 right-0 h-[1.5px]",
                        activeUnderline
                      )} />
                    )}
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
              className="absolute top-full left-0 right-0 bg-cream border-t border-navy/5 overflow-hidden md:hidden shadow-lg"
            >
              <div className="flex flex-col p-8 gap-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className={cn(
                            "w-full text-left text-sm uppercase tracking-[0.2em] font-bold flex items-center justify-between py-3 px-4 rounded-lg transition-all",
                            isActive(link.href)
                              ? "bg-navy text-white"
                              : "text-navy hover:bg-navy/5"
                          )}
                        >
                          {link.name}
                          <ChevronDown
                            size={16}
                            className={cn(
                              "transition-transform duration-300",
                              mobileServicesOpen ? "rotate-180" : ""
                            )}
                          />
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
                                    className="text-sm tracking-[0.1em] text-navy/70 hover:text-navy py-2 px-4 rounded-lg hover:bg-navy/5 transition-all"
                                  >
                                    {subLink.name}
                                  </Link>
                                ))}
                                <Link
                                  href="/services"
                                  onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                                  className="text-sm tracking-[0.1em] text-glass-teal font-medium py-2 px-4 rounded-lg hover:bg-navy/5 transition-all"
                                >
                                  View All Services
                                </Link>
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
                          "text-sm uppercase tracking-[0.2em] font-bold py-3 px-4 rounded-lg block transition-all",
                          isActive(link.href)
                            ? "bg-navy text-white"
                            : "text-navy hover:bg-navy/5"
                        )}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="flex flex-col gap-4 pt-6 border-t border-navy/10 mt-4">
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
      </header>
    </>
  );
}
