import React from 'react';
import { Flame, Sparkles, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#16110D] relative border-b border-[#2C2219]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left: Atmospheric Workshop Photography */}
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-[#3C2F22] shadow-2xl relative bg-[#1D1712]">
              <img
                src="https://images.unsplash.com/photo-1596433809252-260c2745dfdd?auto=format&fit=crop&w=800&q=80"
                alt="Artisanal candle maker hand pouring soy wax"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16110D] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#18130F]/90 backdrop-blur-md border border-[#382B1E]">
                <div className="flex items-center space-x-2 text-[#C49B66] text-xs font-semibold">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Small Batch Studio</span>
                </div>
                <p className="text-[11px] text-[#A89888] font-sans mt-0.5">
                  Hand-poured with non-toxic, eco-conscious materials
                </p>
              </div>
            </div>
          </div>

          {/* Right: Brand Story per prompt specifications */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-[#C49B66] text-xs font-sans uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF4ED] leading-tight">
              About Melt<span className="text-[#C49B66]">&</span>Molds
            </h2>

            {/* Prompt requested core text */}
            <p className="font-serif text-lg sm:text-xl text-[#E8D1B5] leading-relaxed italic border-l-2 border-[#C49B66] pl-4">
              &ldquo;Melt&Molds is built around the idea that gifts should feel personal. From beautifully crafted candles to customized gift boxes, every piece is designed to turn ordinary moments into memorable ones.&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-[#A89888] font-sans leading-relaxed">
              We started Melt&Molds because mass-produced gifts often lack soul. By combining the slow, therapeutic warmth of clean-burning soy candles with permanent, handcrafted resin art and handwritten cursive notes, we help you give a gift that lingers in the heart long after the candle is lit.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#2F241A] text-center">
              <div>
                <span className="font-serif text-2xl font-bold text-[#FAF4ED] block">100%</span>
                <span className="text-[11px] text-[#8C7A6A] font-sans">Soy & Botanicals</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#FAF4ED] block">Artisan</span>
                <span className="text-[11px] text-[#8C7A6A] font-sans">Handmade in India</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#FAF4ED] block">Zero</span>
                <span className="text-[11px] text-[#8C7A6A] font-sans">Harsh Chemicals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
