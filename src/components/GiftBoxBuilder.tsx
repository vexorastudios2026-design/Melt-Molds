import React, { useState } from 'react';
import { Sparkles, Gift, Heart, Flame, PenTool, Check, Plus, Package, HelpCircle, AlertCircle } from 'lucide-react';
import {
  BASE_PACKAGING_OPTIONS,
  ANNIVERSARY_CARDS,
  ADD_ON_OPTIONS,
  SAMPLE_PRODUCTS,
} from '../data/products';
import { PRICING_CONFIG, displayPrice } from '../config/pricing';
import { CustomGiftBoxState, CartItem } from '../types';

interface GiftBoxBuilderProps {
  onAddCustomBoxToCart: (customItem: CartItem) => void;
  initialCandleId?: string;
}

export const GiftBoxBuilder: React.FC<GiftBoxBuilderProps> = ({
  onAddCustomBoxToCart,
  initialCandleId,
}) => {
  const [boxState, setBoxState] = useState<CustomGiftBoxState>({
    packagingId: BASE_PACKAGING_OPTIONS[0].id,
    candleId: initialCandleId || SAMPLE_PRODUCTS[0].id,
    hasAnniversaryCard: true,
    anniversaryCardId: ANNIVERSARY_CARDS[0].id,
    anniversaryRecipient: 'Priya & Rahul',
    hasHandwrittenNote: true,
    handwrittenNoteText: 'Wishing you endless warmth, laughter, and beautiful memories on your special day. Happy Anniversary!',
    handwrittenNoteTo: 'My Dearest',
    handwrittenNoteFrom: 'With Love',
    hasMysteryCandle: false,
    selectedAddOns: [ADD_ON_OPTIONS[0].id, ADD_ON_OPTIONS[1].id],
  });

  const [isSuccessToast, setIsSuccessToast] = useState(false);

  // Selected entities
  const selectedPackaging = BASE_PACKAGING_OPTIONS.find((p) => p.id === boxState.packagingId) || BASE_PACKAGING_OPTIONS[0];
  const selectedCandle = SAMPLE_PRODUCTS.find((c) => c.id === boxState.candleId) || SAMPLE_PRODUCTS[0];
  const selectedCard = ANNIVERSARY_CARDS.find((c) => c.id === boxState.anniversaryCardId) || ANNIVERSARY_CARDS[0];

  const handleToggleAddOn = (addonId: string) => {
    setBoxState((prev) => {
      const exists = prev.selectedAddOns.includes(addonId);
      return {
        ...prev,
        selectedAddOns: exists
          ? prev.selectedAddOns.filter((id) => id !== addonId)
          : [...prev.selectedAddOns, addonId],
      };
    });
  };

  const handleAddToCart = () => {
    const selectedAddonNames = boxState.selectedAddOns.map(
      (id) => ADD_ON_OPTIONS.find((a) => a.id === id)?.name || ''
    ).filter(Boolean);

    const customCartItem: CartItem = {
      id: `custom-box-${Date.now()}`,
      productId: 'custom-gift-box',
      title: 'Custom Gift Box',
      subtitle: `${selectedPackaging.name} with ${selectedCandle.name}`,
      image: selectedPackaging.image,
      quantity: 1,
      pricePlaceholder: PRICING_CONFIG.PLACEHOLDER_TOKEN,
      numericPrice: 1999,
      isCustomGiftBox: true,
      customizationDetails: {
        packagingName: selectedPackaging.name,
        candleName: selectedCandle.name,
        anniversaryCard: boxState.hasAnniversaryCard ? selectedCard.title : undefined,
        handwrittenNote: boxState.hasHandwrittenNote ? `"${boxState.handwrittenNoteText.slice(0, 40)}..."` : undefined,
        mysteryCandleIncluded: boxState.hasMysteryCandle,
        addOns: selectedAddonNames,
        customizationChargeText: 'Customization charges are additional',
      },
    };

    onAddCustomBoxToCart(customCartItem);
    setIsSuccessToast(true);
    setTimeout(() => setIsSuccessToast(false), 3000);
  };

  return (
    <section id="builder" className="py-20 bg-[#120E0B] relative overflow-hidden border-t border-b border-[#2E241B]">
      {/* Background soft ambient glows */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#C49B66]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#934B24]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#271E15] border border-[#C49B66]/30 text-[#D4A373] text-xs font-sans uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Gift Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF4ED]">
            Build Your Own Gift Box
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A89888] font-sans leading-relaxed">
            Curate an unforgettable moment. Select luxury packaging, match your favorite scent, add bespoke anniversary stationery, and include custom handwritten notes.
          </p>
        </div>

        {/* 2-Column Layout: Left Controls, Right Live Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Customization Steps */}
          <div className="lg:col-span-8 space-y-10">
            {/* Step 1: Base Packaging */}
            <div className="bg-[#17130F] p-6 sm:p-7 rounded-3xl border border-[#2E241B]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#C49B66] text-[#16120E] flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#FAF4ED]">
                      Gift Packaging
                    </h3>
                    <p className="text-xs text-[#8C7A6A] font-sans">
                      Select your outer keepsake box style
                    </p>
                  </div>
                </div>
                <span className="text-xs font-sans text-[#C49B66] font-semibold">
                  {displayPrice(PRICING_CONFIG.CUSTOMIZATION.BASE_PACKAGING.placeholder)}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {BASE_PACKAGING_OPTIONS.map((pack) => {
                  const isSelected = boxState.packagingId === pack.id;
                  return (
                    <button
                      key={pack.id}
                      onClick={() => setBoxState({ ...boxState, packagingId: pack.id })}
                      className={`p-3.5 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#291F16] border-[#C49B66] shadow-md shadow-[#C49B66]/15'
                          : 'bg-[#1E1813] border-[#312519] hover:border-[#4B3928]'
                      }`}
                    >
                      <div className="aspect-[4/3] w-full rounded-xl overflow-hidden mb-3 bg-[#130E0B]">
                        <img
                          src={pack.image}
                          alt={pack.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif text-sm font-bold text-[#FAF4ED]">
                            {pack.name}
                          </h4>
                          {isSelected && <Check className="w-4 h-4 text-[#C49B66]" />}
                        </div>
                        <p className="text-[11px] text-[#A89888] font-sans mt-1 line-clamp-2">
                          {pack.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Candle */}
            <div className="bg-[#17130F] p-6 sm:p-7 rounded-3xl border border-[#2E241B]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#C49B66] text-[#16120E] flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#FAF4ED]">
                      Choose Your Candle
                    </h3>
                    <p className="text-xs text-[#8C7A6A] font-sans">
                      Hand-poured 100% natural soy wax centerpiece
                    </p>
                  </div>
                </div>
                <span className="text-xs font-sans text-[#C49B66] font-semibold">
                  Included in Box Base
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SAMPLE_PRODUCTS.filter((p) => p.category === 'exclusive' || p.category === 'customized').map((candle) => {
                  const isSelected = boxState.candleId === candle.id;
                  return (
                    <button
                      key={candle.id}
                      onClick={() => setBoxState({ ...boxState, candleId: candle.id })}
                      className={`p-3 rounded-2xl text-left border transition-all ${
                        isSelected
                          ? 'bg-[#291F16] border-[#C49B66] shadow-md shadow-[#C49B66]/15'
                          : 'bg-[#1E1813] border-[#312519] hover:border-[#4B3928]'
                      }`}
                    >
                      <div className="aspect-square w-full rounded-xl overflow-hidden mb-2 bg-[#130E0B]">
                        <img
                          src={candle.image}
                          alt={candle.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-xs font-bold text-[#FAF4ED] line-clamp-1">
                          {candle.name}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#C49B66] flex-shrink-0" />}
                      </div>
                      <span className="text-[10px] text-[#A89888] font-sans block mt-0.5 line-clamp-1">
                        {candle.fragranceNotes?.[0] || 'Artisanal Soy'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Anniversary Card Option */}
            <div className="bg-[#17130F] p-6 sm:p-7 rounded-3xl border border-[#2E241B]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#C49B66] text-[#16120E] flex items-center justify-center font-bold text-xs">
                    3
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#FAF4ED] flex items-center gap-2">
                      <span>Anniversary Card</span>
                      <span className="text-xs text-[#D4A373] font-normal font-sans">
                        ({displayPrice(PRICING_CONFIG.CUSTOMIZATION.ANNIVERSARY_CARD.placeholder)})
                      </span>
                    </h3>
                    <p className="text-xs text-[#8C7A6A] font-sans">
                      Add an elegant foil-embossed commemorative greeting
                    </p>
                  </div>
                </div>

                {/* Toggle Checkbox */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={boxState.hasAnniversaryCard}
                    onChange={(e) => setBoxState({ ...boxState, hasAnniversaryCard: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[#2B2117] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#C9B9A6] peer-checked:after:bg-[#16120E] after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C49B66]"></div>
                </label>
              </div>

              {boxState.hasAnniversaryCard && (
                <div className="mt-4 pt-4 border-t border-[#2F241B] space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {ANNIVERSARY_CARDS.map((card) => {
                      const isSelected = boxState.anniversaryCardId === card.id;
                      return (
                        <button
                          key={card.id}
                          onClick={() => setBoxState({ ...boxState, anniversaryCardId: card.id })}
                          className={`p-3 rounded-xl text-left border transition-all ${
                            isSelected
                              ? 'bg-[#291F16] border-[#C49B66]'
                              : 'bg-[#1E1813] border-[#312519]'
                          }`}
                        >
                          <div className="aspect-[3/2] w-full rounded-lg overflow-hidden mb-2 bg-[#120E0A]">
                            <img
                              src={card.previewImage}
                              alt={card.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="font-serif text-xs font-bold text-[#FAF4ED] line-clamp-1">
                            {card.title}
                          </h4>
                          <p className="text-[10px] text-[#A89888] font-sans mt-0.5 line-clamp-1">
                            {card.subtitle}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  <div>
                    <label className="block text-xs font-sans text-[#C9B9A6] mb-1">
                      Recipient Names or Custom Title on Card (Optional):
                    </label>
                    <input
                      type="text"
                      value={boxState.anniversaryRecipient}
                      onChange={(e) => setBoxState({ ...boxState, anniversaryRecipient: e.target.value })}
                      placeholder="e.g. Priya & Rahul / To My Love"
                      className="w-full px-3.5 py-2 rounded-xl bg-[#1E1813] border border-[#3A2D20] text-xs text-[#FAF4ED] focus:outline-none focus:border-[#C49B66]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Step 4: Handwritten Note Option */}
            <div className="bg-[#17130F] p-6 sm:p-7 rounded-3xl border border-[#2E241B]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#C49B66] text-[#16120E] flex items-center justify-center font-bold text-xs">
                    4
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#FAF4ED] flex items-center gap-2">
                      <span>Handwritten Note</span>
                      <span className="text-xs text-[#D4A373] font-normal font-sans">
                        ({displayPrice(PRICING_CONFIG.CUSTOMIZATION.HANDWRITTEN_NOTE.placeholder)})
                      </span>
                    </h3>
                    <p className="text-xs text-[#8C7A6A] font-sans">
                      Artisan cursive message transcribed on textured parchment
                    </p>
                  </div>
                </div>

                {/* Toggle Checkbox */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={boxState.hasHandwrittenNote}
                    onChange={(e) => setBoxState({ ...boxState, hasHandwrittenNote: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[#2B2117] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#C9B9A6] peer-checked:after:bg-[#16120E] after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C49B66]"></div>
                </label>
              </div>

              {boxState.hasHandwrittenNote && (
                <div className="mt-4 pt-4 border-t border-[#2F241B] space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-sans text-[#C9B9A6] mb-1">To:</label>
                      <input
                        type="text"
                        value={boxState.handwrittenNoteTo}
                        onChange={(e) => setBoxState({ ...boxState, handwrittenNoteTo: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-[#1E1813] border border-[#3A2D20] text-xs text-[#FAF4ED] focus:outline-none focus:border-[#C49B66]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans text-[#C9B9A6] mb-1">From:</label>
                      <input
                        type="text"
                        value={boxState.handwrittenNoteFrom}
                        onChange={(e) => setBoxState({ ...boxState, handwrittenNoteFrom: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-[#1E1813] border border-[#3A2D20] text-xs text-[#FAF4ED] focus:outline-none focus:border-[#C49B66]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans text-[#C9B9A6] mb-1">Your Personal Message:</label>
                    <textarea
                      rows={3}
                      value={boxState.handwrittenNoteText}
                      onChange={(e) => setBoxState({ ...boxState, handwrittenNoteText: e.target.value })}
                      placeholder="Type the message you want handwritten in your gift box..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1E1813] border border-[#3A2D20] text-xs text-[#FAF4ED] focus:outline-none focus:border-[#C49B66] leading-relaxed"
                    />
                  </div>

                  {/* Parchment Live Note Preview */}
                  <div className="p-4 rounded-2xl bg-[#EFE3D3] text-[#2C2117] shadow-inner border border-[#D5C2AF] relative overflow-hidden">
                    <div className="absolute top-2 right-3 text-[10px] font-sans uppercase tracking-widest text-[#8C7A6A] font-semibold">
                      Live Note Preview
                    </div>
                    <div className="font-handwriting text-lg text-[#1D1610] leading-relaxed pt-2">
                      <p className="font-bold">{boxState.handwrittenNoteTo ? `Dearest ${boxState.handwrittenNoteTo},` : 'Dearest,'}</p>
                      <p className="mt-1">{boxState.handwrittenNoteText || 'Your heartfelt words will be carefully handwritten here...'}</p>
                      <p className="mt-2 text-right italic">{boxState.handwrittenNoteFrom || 'Forever yours'}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Step 5: Mystery Candle Add-on */}
            <div className="bg-[#17130F] p-6 sm:p-7 rounded-3xl border border-[#2E241B]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#C49B66] text-[#16120E] flex items-center justify-center font-bold text-xs">
                    5
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#FAF4ED] flex items-center gap-2">
                      <span>Include Mystery Candle</span>
                      <span className="text-xs text-[#D4A373] font-normal font-sans">
                        ({displayPrice(PRICING_CONFIG.CUSTOMIZATION.MYSTERY_CANDLE.placeholder)})
                      </span>
                    </h3>
                    <p className="text-xs text-[#8C7A6A] font-sans">
                      Add a surprise mystery scented candle inside the gift box
                    </p>
                  </div>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={boxState.hasMysteryCandle}
                    onChange={(e) => setBoxState({ ...boxState, hasMysteryCandle: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[#2B2117] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#C9B9A6] peer-checked:after:bg-[#16120E] after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C49B66]"></div>
                </label>
              </div>
            </div>

            {/* Step 6: Decorative Add-ons */}
            <div className="bg-[#17130F] p-6 sm:p-7 rounded-3xl border border-[#2E241B]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#C49B66] text-[#16120E] flex items-center justify-center font-bold text-xs">
                    6
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#FAF4ED]">
                      Decorative Add-ons
                    </h3>
                    <p className="text-xs text-[#8C7A6A] font-sans">
                      Select little luxury accessories to elevate the unboxing
                    </p>
                  </div>
                </div>
                <span className="text-xs font-sans text-[#C49B66] font-semibold">
                  {displayPrice(PRICING_CONFIG.CUSTOMIZATION.CUSTOM_ADDON.placeholder)} each
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {ADD_ON_OPTIONS.map((addon) => {
                  const isChecked = boxState.selectedAddOns.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => handleToggleAddOn(addon.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center space-x-3 ${
                        isChecked
                          ? 'bg-[#291F16] border-[#C49B66]'
                          : 'bg-[#1E1813] border-[#312519] hover:border-[#4B3928]'
                      }`}
                    >
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#130E0B] flex-shrink-0">
                        <img
                          src={addon.image}
                          alt={addon.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif text-xs font-bold text-[#FAF4ED] truncate">
                            {addon.name}
                          </h4>
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center ml-2 ${
                              isChecked
                                ? 'bg-[#C49B66] border-[#C49B66] text-[#16120E]'
                                : 'border-[#4D3C2D]'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </div>
                        <p className="text-[11px] text-[#A89888] font-sans line-clamp-1 mt-0.5">
                          {addon.description}
                        </p>
                        <span className="text-[10px] text-[#C49B66] font-sans font-semibold">
                          +{displayPrice(addon.pricePlaceholder)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Live-looking Summary Card */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-[#18130F] p-6 sm:p-7 rounded-3xl border border-[#3E3022] shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#2F241B]">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#FAF4ED]">
                    Your Gift Box
                  </h3>
                  <span className="text-[11px] text-[#C49B66] font-sans">
                    Live Customization Summary
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#271E15] flex items-center justify-center text-[#D4A373]">
                  <Gift className="w-5 h-5" />
                </div>
              </div>

              {/* Selected visual preview miniature */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#130E0B] border border-[#312519]">
                <img
                  src={selectedPackaging.image}
                  alt={selectedPackaging.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-sans tracking-widest text-[#D4A373]">
                      Packaging & Candle
                    </span>
                    <p className="font-serif text-xs font-bold text-white line-clamp-1">
                      {selectedPackaging.name} + {selectedCandle.name}
                    </p>
                  </div>
                </div>
              </div>

              {/* Exact Line Item Breakdown per prompt specifications */}
              <div className="space-y-3 text-xs font-sans text-[#C9B9A6] pt-1">
                <div className="flex items-center justify-between py-1 border-b border-[#241C15]">
                  <span className="text-[#FAF4ED] font-medium">Base Gift Box:</span>
                  <span className="font-serif font-bold text-[#FAF4ED]">
                    {displayPrice(PRICING_CONFIG.CUSTOMIZATION.BASE_PACKAGING.placeholder)}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-[#241C15]">
                  <span>Anniversary Card:</span>
                  <span className="font-serif font-bold text-[#FAF4ED]">
                    {boxState.hasAnniversaryCard
                      ? displayPrice(PRICING_CONFIG.CUSTOMIZATION.ANNIVERSARY_CARD.placeholder)
                      : 'None'}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-[#241C15]">
                  <span>Handwritten Note:</span>
                  <span className="font-serif font-bold text-[#FAF4ED]">
                    {boxState.hasHandwrittenNote
                      ? displayPrice(PRICING_CONFIG.CUSTOMIZATION.HANDWRITTEN_NOTE.placeholder)
                      : 'None'}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-[#241C15]">
                  <span>Mystery Candle:</span>
                  <span className="font-serif font-bold text-[#FAF4ED]">
                    {boxState.hasMysteryCandle
                      ? displayPrice(PRICING_CONFIG.CUSTOMIZATION.MYSTERY_CANDLE.placeholder)
                      : 'None'}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-[#241C15]">
                  <span>Custom Add-ons ({boxState.selectedAddOns.length}):</span>
                  <span className="font-serif font-bold text-[#FAF4ED]">
                    {boxState.selectedAddOns.length > 0
                      ? displayPrice(PRICING_CONFIG.CUSTOMIZATION.CUSTOM_ADDON.placeholder)
                      : 'None'}
                  </span>
                </div>
              </div>

              {/* Total Row */}
              <div className="pt-2 border-t border-[#3A2D1F]">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-serif text-lg font-bold text-[#FAF4ED]">Total:</span>
                  <div className="text-right">
                    <span className="font-serif text-2xl font-bold text-[#C49B66]">
                      {displayPrice(PRICING_CONFIG.PLACEHOLDER_TOKEN)}
                    </span>
                  </div>
                </div>

                {/* CRITICAL Prompt Requirement Notice */}
                <div className="p-3 rounded-xl bg-[#2A2016] border border-[#C49B66]/30 flex items-start space-x-2.5">
                  <AlertCircle className="w-4 h-4 text-[#D4A373] flex-shrink-0 mt-0.5" />
                  <p className="text-[11px] text-[#E0D0BF] font-sans leading-snug">
                    <strong className="text-[#FAF4ED] block">Important:</strong>
                    {PRICING_CONFIG.DISCLAIMERS.CUSTOMIZATION_ADDITIONAL}
                  </p>
                </div>
              </div>

              {/* Add to Cart button */}
              <button
                onClick={handleAddToCart}
                className="w-full py-3.5 px-6 rounded-2xl text-xs uppercase tracking-wider font-semibold bg-gradient-to-r from-[#C49B66] via-[#D4AB76] to-[#A87B48] text-[#16120E] hover:from-[#D8AF7B] hover:to-[#B58752] transition-all shadow-xl shadow-[#C49B66]/20 active:scale-95 flex items-center justify-center space-x-2"
              >
                <Gift className="w-4 h-4" />
                <span>Add Customized Box to Cart</span>
              </button>

              {isSuccessToast && (
                <div className="p-3 rounded-xl bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-xs font-sans text-center animate-fade-in">
                  ✓ Custom gift box added to your cart!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
