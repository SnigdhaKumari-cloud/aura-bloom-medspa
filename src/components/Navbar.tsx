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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const pathname = usePathname();

  const navLinks = [
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'About', href: '/about' },
    { name: 'Memberships', href: '/memberships' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'Testimonials', href: '/testimonials' }
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  const renderNavLink = (link: typeof navLinks[0]) => {
    const active = isActive(link.href);

    if (link.hasDropdown) {
      return (
        <div key={link.name} className="relative" ref={dropdownRef}>
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className={cn(
              "text-[14px] uppercase tracking-[0.25em] transition-all duration-300 font-light flex items-center gap-1.5 py-2 px-4 -mx-4 rounded-sm",
              active
                ? "bg-navy text-white"
                : "text-navy hover:bg-navy/5"
            )}
          >
            {link.name}
            <ChevronDown
              size={14}
              strokeWidth={1.5}
              className={cn(
                "transition-transform duration-300",
                servicesOpen ? "rotate-180" : ""
              )}
            />
          </button>

          {/* Dropdown */}
          <AnimatePresence>
            {servicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute top-full left-0 mt-2 bg-white border border-navy/10 rounded-lg shadow-lg min-w-[220px] overflow-hidden z-50"
              >
                <div className="py-2">
                  {serviceSubLinks.map((subLink) => (
                    <Link
                      key={subLink.name}
                      href={subLink.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-6 py-3 text-[13px] tracking-[0.15em] text-navy/80 hover:bg-cream hover:text-navy transition-colors font-light"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                  <div className="border-t border-navy/5 mt-1 pt-1">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="block px-6 py-3 text-[13px] tracking-[0.15em] text-glass-teal hover:bg-cream transition-colors font-medium"
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
          "text-[14px] uppercase tracking-[0.25em] transition-all duration-300 font-light py-2 px-4 -mx-4 rounded-sm",
          active
            ? "bg-navy text-white"
            : "text-navy hover:bg-navy/5"
        )}
      >
        {link.name}
      </Link>
    );
  };

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
          'sticky top-0 left-0 right-0 z-50 transition-all duration-500 px-6 border-b border-navy/5',
          scrolled ? 'bg-glass-cream/95 backdrop-blur-md py-3 shadow-sm' : 'bg-glass-cream py-4'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Left: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            {navLinks.slice(0, 3).map((link) => renderNavLink(link))}
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

          {/* Right: Nav Links & Utility Icons (Desktop) */}
          <div className="hidden md:flex items-center justify-end gap-8 flex-1">
            {navLinks.slice(3).map((link) => renderNavLink(link))}
            <div className="flex items-center gap-6 ml-4 pl-6 border-l border-navy/10">
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
      </nav>
    </>
  );
}
