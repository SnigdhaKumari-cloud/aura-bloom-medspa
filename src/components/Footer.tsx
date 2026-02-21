import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-serif tracking-widest text-white flex flex-col leading-none mb-8">
              <span className="text-gold font-light">AURA</span>
              <span className="text-[10px] tracking-[0.4em] opacity-80">BLOOM MEDSPA</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Redefining luxury aesthetics through precision, science, and a commitment to your natural beauty.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/services" className="hover:text-white transition-colors">Treatments</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/gift-cards" className="hover:text-white transition-colors">Gift Cards</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>123 Aesthetic Blvd, Suite 400<br />Luxury Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span>concierge@luminaluxe.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-8">Newsletter</h4>
            <p className="text-white/40 text-xs mb-6">Join our list for exclusive offers and beauty insights.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button className="absolute right-2 top-2 bg-gold text-navy p-1.5 rounded-full hover:bg-gold/90 transition-colors">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.2em] text-white/30">
          <p>© 2026 Aura Bloom MedSpa. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
