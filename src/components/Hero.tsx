import React from 'react';
import { Sparkles, ArrowDown, Gift, Flame, ShieldCheck, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onExploreCandles: () => void;
  onCreateGift: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCandles, onCreateGift }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0C0A]"
    >
      {/* Cinematic Candle Photography Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=2000&q=85"
          alt="Artisanal burning candle in warm mood lighting"
          className="w-full h-full object-cover object-center scale-105 transform filter brightness-65 contrast-110"
        />

        {/* Realistic Warm Candlelight Radial Aura & Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C09] via-[#0E0C09]/70 to-[#0E0C09]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C09]/85 via-transparent to-[#0E0C09]/85" />
        
        {/* Soft Golden Ambient Light Pool */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-r from-[#F59E0B]/20 via-[#D97706]/15 to-transparent rounded-full blur-3xl pointer-events-none animate-warm-pulse" />
      </div>

      {/* Realistic Burning Flame & Smoke Element Anchor */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 pointer-events-none z-10 hidden md:block">
        {/* Rising subtle smoke */}
        <div className="w-2.5 h-16 bg-gradient-to-t from-white/20 via-white/5 to-transparent blur-md rounded-full mx-auto -mb-6 animate-smoke" />
        
        {/* Candle Flame Assembly */}
        <div className="relative w-8 h-14 mx-auto animate-flame">
          {/* Flame outer glow */}
          <div className="absolute inset-0 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] bg-gradient-to-t from-[#EA580C] via-[#F59E0B] to-[#FEF08A] filter blur-[1px] shadow-[0_0_24px_#F59E0B,0_0_50px_#D97706]" />
          {/* Flame inner bright core */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3.5 h-7 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] bg-gradient-to-t from-[#3B82F6]/60 via-[#FDE047] to-[#FFFFFF]" />
          {/* Wick */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-[#241F1A] rounded-full" />
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Small Brand Eyebrow Tag */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#2A2218]/80 border border-[#D4A373]/30 backdrop-blur-md mb-6 shadow-lg shadow-black/40">
          <Flame className="w-3.5 h-3.5 text-[#F59E0B] animate-pulse" />
          <span className="font-sans text-xs tracking-widest uppercase font-medium text-[#EAD5BE]">
            Artisanal Wax & Handcrafted Resin Gifts
          </span>
          <Sparkles className="w-3 h-3 text-[#D4A373]" />
        </div>

        {/* Hero Main Heading */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#FAF5EF] drop-shadow-2xl">
          Melt<span className="text-[#C49B66] font-normal">&</span>Molds
        </h1>

        {/* Hero Emotional Tagline */}
        <p className="mt-4 sm:mt-5 font-cormorant italic text-2xl sm:text-3xl md:text-4xl text-[#E8D1B5] tracking-wide max-w-3xl mx-auto">
          &ldquo;Light the moment. Melt the memory.&rdquo;
        </p>

        {/* Hero Supporting Description */}
        <p className="mt-4 sm:mt-6 font-sans text-base sm:text-lg md:text-xl text-[#C9B9A6] max-w-2xl mx-auto leading-relaxed">
          Exclusive candles, personalized gifts and little details made especially for your special moments.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-md mx-auto">
          {/* Explore Candles Button */}
          <button
            onClick={onExploreCandles}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-sans text-sm uppercase tracking-wider font-semibold bg-gradient-to-r from-[#C49B66] via-[#D4AB76] to-[#A87B48] text-[#16120E] hover:from-[#D8AF7B] hover:to-[#B58752] transition-all duration-300 shadow-xl shadow-[#C49B66]/25 hover:shadow-[#C49B66]/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2"
          >
            <Flame className="w-4 h-4 text-[#16120E]" />
            <span>Explore Candles</span>
          </button>

          {/* Create a Gift Button */}
          <button
            onClick={onCreateGift}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-sans text-sm uppercase tracking-wider font-semibold bg-[#251E17]/80 hover:bg-[#342A20] text-[#FAF4ED] border border-[#D4A373]/40 hover:border-[#D4A373] transition-all duration-300 backdrop-blur-md shadow-xl shadow-black/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2"
          >
            <Gift className="w-4 h-4 text-[#C49B66]" />
            <span>Create a Gift</span>
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 pt-8 border-t border-[#352B20]/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center justify-center space-y-1 p-2">
            <span className="text-[#C49B66] font-semibold text-xs tracking-wider uppercase font-sans">
              100% Soy Wax
            </span>
            <span className="text-[#8E7E70] text-xs font-sans">Clean, soot-free burn</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1 p-2">
            <span className="text-[#C49B66] font-semibold text-xs tracking-wider uppercase font-sans">
              Artisanal Resin
            </span>
            <span className="text-[#8E7E70] text-xs font-sans">Everlasting keepsakes</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1 p-2">
            <span className="text-[#C49B66] font-semibold text-xs tracking-wider uppercase font-sans">
              Customized Gifting
            </span>
            <span className="text-[#8E7E70] text-xs font-sans">Handwritten cursive notes</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1 p-2">
            <span className="text-[#C49B66] font-semibold text-xs tracking-wider uppercase font-sans">
              Pan-India Safe Delivery
            </span>
            <span className="text-[#8E7E70] text-xs font-sans">Luxury shockproof boxing</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Animation Indicator */}
      <button
        onClick={onExploreCandles}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-[#B3A18F] hover:text-[#FAF4ED] transition-colors group cursor-pointer focus:outline-none"
        aria-label="Scroll down to explore"
      >
        <span className="text-[11px] font-sans uppercase tracking-widest text-[#9C8B7B] group-hover:text-[#D4A373] transition-colors mb-1.5">
          Scroll to explore
        </span>
        <div className="w-5 h-8 rounded-full border border-[#D4A373]/40 flex items-start justify-center p-1 group-hover:border-[#D4A373] transition-colors">
          <div className="w-1.5 h-2 rounded-full bg-[#C49B66] animate-bounce" />
        </div>
      </button>
    </section>
  );
};
