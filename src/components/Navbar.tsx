import React, { useState, useEffect } from 'react';
import { Flame, ShoppingBag, Search, Menu, X, Sparkles, Heart } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenHelpCenter: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onNavigate,
  onOpenHelpCenter,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Candles', id: 'catalog' },
    { label: 'Gift Boxes', id: 'gift-boxes' },
    { label: 'Customize', id: 'builder' },
    { label: 'Mystery Candles', id: 'mystery' },
    { label: 'About', id: 'about' },
    { label: 'FAQ', id: 'faq' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#15120E]/95 backdrop-blur-md shadow-2xl border-b border-[#352B20]/60 py-3.5'
            : 'bg-gradient-to-b from-[#0E0C0A]/90 via-[#15120E]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => handleLinkClick('hero')}
              className="flex items-center space-x-3 text-left group focus:outline-none"
              aria-label="Melt&Molds Home"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#D4A373] to-[#8C5E35] flex items-center justify-center p-0.5 shadow-md shadow-[#D4A373]/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-[#181410] flex items-center justify-center">
                  <Flame className="w-5 h-5 text-[#EAB308] group-hover:text-[#FBBF24] transition-colors animate-flame" />
                </div>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#FAF4ED] group-hover:text-[#E8C49A] transition-colors">
                  Melt<span className="text-[#C49B66] font-light">&</span>Molds
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-[#B3A18F] font-sans -mt-0.5">
                  Artisanal Candles & Gifting
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="font-sans text-sm tracking-wide text-[#E5D7C7] hover:text-[#D4A373] transition-colors duration-200 relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C49B66] group-hover:w-full transition-all duration-300 ease-out rounded-full" />
                </button>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Search Button */}
              <button
                onClick={onOpenSearch}
                className="p-2 sm:p-2.5 rounded-full text-[#D4C3B3] hover:text-[#FAF4ED] hover:bg-[#2A231C]/60 transition-colors focus:outline-none"
                aria-label="Search candles and gifts"
                title="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={onOpenCart}
                className="relative p-2 sm:p-2.5 rounded-full text-[#D4C3B3] hover:text-[#FAF4ED] hover:bg-[#2A231C]/60 transition-colors focus:outline-none group"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5 text-[#D4A373] group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C49B66] text-[#14110E] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#16120E] shadow-sm animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Shop Now Primary Button */}
              <button
                onClick={() => handleLinkClick('catalog')}
                className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold bg-gradient-to-r from-[#C49B66] to-[#A87B48] text-[#16120E] hover:from-[#D4AB76] hover:to-[#B88B58] transition-all shadow-md shadow-[#C49B66]/20 hover:shadow-[#C49B66]/30 active:scale-95"
              >
                Shop Now
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#D4C3B3] hover:text-[#FAF4ED] hover:bg-[#2A231C]/60 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-[#16120E] border-l border-[#352B20] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#2C231A]">
                <div className="flex items-center space-x-2.5">
                  <Flame className="w-5 h-5 text-[#EAB308] animate-flame" />
                  <span className="font-serif text-lg font-bold text-[#FAF4ED]">Melt&Molds</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full text-[#B3A18F] hover:text-white hover:bg-[#251E17]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="py-6 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-[#E5D7C7] hover:text-[#FAF4ED] hover:bg-[#251E17] transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#C49B66] text-xs">→</span>
                  </button>
                ))}

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenHelpCenter();
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-[#C49B66] hover:bg-[#251E17] transition-colors"
                >
                  Help Center & Support
                </button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#2C231A] space-y-3">
              <button
                onClick={() => handleLinkClick('builder')}
                className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold bg-gradient-to-r from-[#C49B66] to-[#A87B48] text-[#16120E] hover:opacity-95 shadow-lg shadow-[#C49B66]/20 transition-all flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-[#16120E]" />
                <span>Build Custom Gift Box</span>
              </button>
              <p className="text-center text-xs text-[#8A7969]">
                Light the moment. Melt the memory.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
