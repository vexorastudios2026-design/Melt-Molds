import React from 'react';
import { Flame, Instagram, Facebook, Twitter, Mail, MapPin, Phone, Heart, Sparkles } from 'lucide-react';
import { PRICING_CONFIG } from '../config/pricing';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenHelpCenter: () => void;
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenHelpCenter,
  onOpenTerms,
  onOpenPrivacy,
}) => {
  return (
    <footer className="bg-[#0D0A08] border-t border-[#291F16] text-[#A89888] font-sans">
      {/* Top Banner / Newsletter */}
      <div className="border-b border-[#241B13] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[#C49B66] text-xs font-sans uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Inner Circle</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF4ED] mt-1">
                Receive Whispers of New Scents
              </h3>
              <p className="text-xs sm:text-sm text-[#8C7A6A] mt-1 max-w-md">
                Be the first to unbox seasonal mystery candles and limited handcrafted anniversary editions.
              </p>
            </div>

            <div className="flex sm:flex-row flex-col gap-2.5 max-w-md md:ml-auto w-full">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="w-full px-4 py-3 rounded-full bg-[#18130F] border border-[#33261A] text-xs text-[#FAF4ED] placeholder-[#6D5D50] focus:outline-none focus:border-[#C49B66]"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert('Thank you for subscribing to Melt&Molds updates! (Demo)');
                }}
                className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#C49B66] to-[#A87B48] text-[#16120E] hover:from-[#D4AB76] hover:to-[#B88B58] transition-all whitespace-nowrap"
              >
                Join Circle
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#C49B66] text-[#16120E] flex items-center justify-center">
                <Flame className="w-4 h-4 animate-flame" />
              </div>
              <span className="font-serif text-2xl font-bold text-[#FAF4ED]">
                Melt<span className="text-[#C49B66]">&</span>Molds
              </span>
            </div>

            <p className="font-cormorant italic text-xl text-[#E8D1B5] tracking-wide">
              &ldquo;Light the moment. Melt the memory.&rdquo;
            </p>

            <p className="text-xs text-[#8C7A6A] leading-relaxed max-w-sm">
              Artisanal hand-poured soy candles, handcrafted floral resin keepsakes, and bespoke gift boxes made for romantic milestones, anniversaries, and personal surprises.
            </p>

            {/* Social Media Placeholder Icons */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-[#1A140F] border border-[#2E2318] flex items-center justify-center text-[#C49B66] hover:bg-[#C49B66] hover:text-[#16120E] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-[#1A140F] border border-[#2E2318] flex items-center justify-center text-[#C49B66] hover:bg-[#C49B66] hover:text-[#16120E] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-[#1A140F] border border-[#2E2318] flex items-center justify-center text-[#C49B66] hover:bg-[#C49B66] hover:text-[#16120E] transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#FAF4ED] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#FAF4ED] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-[#FAF4ED] transition-colors"
                >
                  Shop
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gift-boxes')}
                  className="hover:text-[#FAF4ED] transition-colors"
                >
                  Gift Boxes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('builder')}
                  className="hover:text-[#FAF4ED] transition-colors"
                >
                  Customize
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FAF4ED] transition-colors"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care & Policies Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#FAF4ED] uppercase tracking-wider">
              Assistance & Policies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenHelpCenter}
                  className="hover:text-[#FAF4ED] transition-colors text-left"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-[#FAF4ED] transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-[#FAF4ED] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenHelpCenter}
                  className="hover:text-[#FAF4ED] transition-colors text-left text-[#C49B66]"
                >
                  Contact Support
                </button>
              </li>
            </ul>

            <div className="pt-3 text-[11px] text-[#786657] border-t border-[#231A13]">
              <p>{PRICING_CONFIG.DISCLAIMERS.DEMO_NOTICE}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-[#241B13] flex flex-col sm:flex-row items-center justify-between text-xs text-[#786657]">
          <p>© 2026 Melt&Molds. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center gap-1">
            Handcrafted with <Heart className="w-3 h-3 text-[#E07A5F] fill-[#E07A5F]" /> for your special moments.
          </p>
        </div>
      </div>
    </footer>
  );
};
