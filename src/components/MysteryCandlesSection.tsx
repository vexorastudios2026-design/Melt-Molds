import React, { useState } from 'react';
import { HelpCircle, Sparkles, Gift, Check, Flame, Eye } from 'lucide-react';
import { PRICING_CONFIG, displayPrice } from '../config/pricing';
import { CartItem } from '../types';

interface MysteryCandlesSectionProps {
  onAddToCart: (item: CartItem) => void;
}

export const MysteryCandlesSection: React.FC<MysteryCandlesSectionProps> = ({ onAddToCart }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const mysteryTeasers = [
    { label: 'Scent Family', hint: 'Smoked Vanilla Oud & Rare Velvet Florals' },
    { label: 'Wax Vessel', hint: 'Matte Obsidian or Textured Sandstone Jar' },
    { label: 'Hidden Keepsake', hint: 'Polished gemstone or wax crystal cluster' },
  ];

  const handleAddMysteryCandle = () => {
    const item: CartItem = {
      id: `mystery-candle-${Date.now()}`,
      productId: 'midnight-mystery',
      title: 'Midnight Mystery Candle',
      subtitle: 'Surprise curated fragrance & custom wax seal packaging',
      image: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80',
      quantity: 1,
      pricePlaceholder: PRICING_CONFIG.CUSTOMIZATION.MYSTERY_CANDLE.placeholder,
      numericPrice: 549,
      customizationDetails: {
        mysteryCandleIncluded: true,
        customizationChargeText: 'Surprise experience packaging included',
      },
    };
    onAddToCart(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <section id="mystery" className="py-20 bg-gradient-to-b from-[#14100C] via-[#100D0A] to-[#14100C] relative border-b border-[#2C2219] overflow-hidden">
      {/* Background Mystery Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none animate-warm-pulse" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#7C2D12]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#271E15] border border-[#D97706]/40 text-[#F59E0B] text-xs font-sans uppercase tracking-widest font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>The Sensory Enigma</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF4ED]">
            What&rsquo;s Inside?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#E0CEBB] font-sans font-medium">
            &ldquo;You choose the surprise. We choose the candle.&rdquo;
          </p>
          <p className="mt-2 text-xs sm:text-sm text-[#A89888] font-sans max-w-xl mx-auto">
            An exhilarating sensory journey where the scent notes and candle artistry are secret until unboxed and lit.
          </p>
        </div>

        {/* Mystery Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto bg-[#18130F] rounded-3xl border border-[#3A2E22] p-6 sm:p-10 shadow-2xl">
          {/* Visual Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-square w-full rounded-2xl overflow-hidden relative bg-[#0E0B08] border border-[#2F241A] group">
              <img
                src="https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80"
                alt="Mystery Candle in dark ambient lighting"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isRevealed ? 'filter brightness-105 scale-105' : 'filter brightness-75 blur-[1px]'
                }`}
              />

              {/* Mystery Question Overlay */}
              {!isRevealed && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D97706] to-[#78350F] flex items-center justify-center text-white mb-3 shadow-xl shadow-[#D97706]/30 animate-pulse">
                    <HelpCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#FAF4ED]">
                    Top-Secret Fragrance
                  </h4>
                  <p className="text-xs text-[#C9B9A6] font-sans mt-1 max-w-xs">
                    Curated seasonal formula sealed in black wax
                  </p>
                  <button
                    onClick={() => setIsRevealed(true)}
                    className="mt-4 px-4 py-2 rounded-full text-xs font-sans font-semibold bg-[#261E17] text-[#D4A373] border border-[#483727] hover:border-[#D4A373] transition-all flex items-center space-x-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Peek at Possibilities</span>
                  </button>
                </div>
              )}

              {isRevealed && (
                <div className="absolute bottom-3 right-3">
                  <button
                    onClick={() => setIsRevealed(false)}
                    className="px-3 py-1 rounded-full text-[11px] font-sans bg-black/70 text-white backdrop-blur-md hover:bg-black"
                  >
                    Hide Teaser
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* 4 Feature Points & Action */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3.5 p-3 rounded-2xl bg-[#201812] border border-[#312519]">
                <div className="w-9 h-9 rounded-xl bg-[#2E2218] text-[#D4A373] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Flame className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#FAF4ED]">
                    Mystery Candle
                  </h4>
                  <p className="text-xs text-[#A89888] font-sans mt-0.5">
                    Full-size 220g artisanal candle with 45+ hours burn time.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-3 rounded-2xl bg-[#201812] border border-[#312519]">
                <div className="w-9 h-9 rounded-xl bg-[#2E2218] text-[#D4A373] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#D4A373]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#FAF4ED]">
                    Mystery Fragrance & Design
                  </h4>
                  <p className="text-xs text-[#A89888] font-sans mt-0.5">
                    Uniquely blended aroma and secret vessel color unknown until opened.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-3 rounded-2xl bg-[#201812] border border-[#312519]">
                <div className="w-9 h-9 rounded-xl bg-[#2E2218] text-[#D4A373] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Gift className="w-4 h-4 text-[#C49B66]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#FAF4ED]">
                    Premium Packaging
                  </h4>
                  <p className="text-xs text-[#A89888] font-sans mt-0.5">
                    Black silk wrapping with hand-stamped crimson wax seal.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-3 rounded-2xl bg-[#201812] border border-[#312519]">
                <div className="w-9 h-9 rounded-xl bg-[#2E2218] text-[#D4A373] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HelpCircle className="w-4 h-4 text-[#E07A5F]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#FAF4ED]">
                    Surprise Experience
                  </h4>
                  <p className="text-xs text-[#A89888] font-sans mt-0.5">
                    The ultimate unboxing gift for birthdays, parties, or curious minds.
                  </p>
                </div>
              </div>
            </div>

            {/* Price & Add to Cart */}
            <div className="pt-4 border-t border-[#2F241B]">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-xs text-[#8C7A6A] font-sans block">Price</span>
                  <span className="font-serif text-2xl font-bold text-[#FAF4ED]">
                    {displayPrice(PRICING_CONFIG.CUSTOMIZATION.MYSTERY_CANDLE.placeholder)}
                  </span>
                </div>
                <span className="text-[11px] text-[#A89888] font-sans">
                  Demo placeholder price
                </span>
              </div>

              <button
                onClick={handleAddMysteryCandle}
                className={`w-full py-3.5 px-6 rounded-2xl text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center space-x-2 ${
                  isAdded
                    ? 'bg-[#10B981] text-white'
                    : 'bg-gradient-to-r from-[#D97706] to-[#92400E] text-white hover:from-[#EA580C] hover:to-[#A16207] shadow-xl shadow-[#D97706]/20'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Mystery Candle Added!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Order Mystery Candle ({displayPrice(PRICING_CONFIG.CUSTOMIZATION.MYSTERY_CANDLE.placeholder)})</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
