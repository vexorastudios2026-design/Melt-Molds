import React, { useState } from 'react';
import { Heart, Sparkles, Plus, Check } from 'lucide-react';
import { ANNIVERSARY_CARDS } from '../data/products';
import { PRICING_CONFIG, displayPrice } from '../config/pricing';
import { CartItem } from '../types';

interface AnniversaryCardsSectionProps {
  onAddToCart: (item: CartItem) => void;
}

export const AnniversaryCardsSection: React.FC<AnniversaryCardsSectionProps> = ({ onAddToCart }) => {
  const [selectedCardId, setSelectedCardId] = useState(ANNIVERSARY_CARDS[0].id);
  const [recipientName, setRecipientName] = useState('Our 5th Anniversary');
  const [addedCardId, setAddedCardId] = useState<string | null>(null);

  const selectedCard = ANNIVERSARY_CARDS.find((c) => c.id === selectedCardId) || ANNIVERSARY_CARDS[0];

  const handleAddCard = () => {
    const item: CartItem = {
      id: `anniversary-card-${Date.now()}`,
      productId: selectedCard.id,
      title: selectedCard.title,
      subtitle: recipientName ? `Dedication: ${recipientName}` : 'Gold Foil Commemorative Card',
      image: selectedCard.previewImage,
      quantity: 1,
      pricePlaceholder: PRICING_CONFIG.CUSTOMIZATION.ANNIVERSARY_CARD.placeholder,
      numericPrice: 149,
    };
    onAddToCart(item);
    setAddedCardId(selectedCard.id);
    setTimeout(() => setAddedCardId(null), 1500);
  };

  return (
    <section className="py-20 bg-[#15110D] relative border-b border-[#2C2219]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-[#C49B66] text-xs font-sans uppercase tracking-widest font-semibold mb-2">
            <Heart className="w-3.5 h-3.5 text-[#E07A5F]" />
            <span>Dedicated Keepsake Stationery</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF4ED]">
            Make It Personal
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A89888] font-sans leading-relaxed">
            Add an anniversary card with your gift and make the moment even more special.
          </p>
        </div>

        {/* Card Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Card Selection List */}
          <div className="lg:col-span-6 space-y-3.5">
            {ANNIVERSARY_CARDS.map((card) => {
              const isSelected = selectedCardId === card.id;
              return (
                <div
                  key={card.id}
                  onClick={() => setSelectedCardId(card.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center space-x-4 ${
                    isSelected
                      ? 'bg-[#291F16] border-[#C49B66] shadow-lg shadow-[#C49B66]/10'
                      : 'bg-[#1C1611] border-[#312519] hover:border-[#4B3928]'
                  }`}
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#130E0B] flex-shrink-0">
                    <img
                      src={card.previewImage}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-sm font-bold text-[#FAF4ED]">
                        {card.title}
                      </h4>
                      <span className="font-serif text-xs font-bold text-[#C49B66]">
                        {displayPrice(card.pricePlaceholder)}
                      </span>
                    </div>
                    <p className="text-xs text-[#A89888] font-sans mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="pt-2">
              <label className="block text-xs font-sans text-[#C9B9A6] mb-1.5">
                Optional: Custom Card Message / Dedication
              </label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="e.g., Happy 1st Anniversary, Maya!"
                className="w-full px-4 py-2.5 rounded-xl bg-[#1C1611] border border-[#3A2D20] text-xs text-[#FAF4ED] focus:outline-none focus:border-[#C49B66]"
              />
            </div>
          </div>

          {/* Large Card Preview & Action */}
          <div className="lg:col-span-6">
            <div className="bg-[#1C1611] p-6 sm:p-7 rounded-3xl border border-[#33261A] text-center shadow-xl">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden mb-5 relative bg-[#130E0B]">
                <img
                  src={selectedCard.previewImage}
                  alt={selectedCard.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 text-left">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#C49B66] font-semibold">
                    Gold-Foil Print
                  </span>
                  <p className="font-serif text-base font-bold text-white">
                    {selectedCard.title}
                  </p>
                  <p className="text-xs text-[#E5D7C7] font-serif italic mt-1">
                    &ldquo;{selectedCard.sampleMessage}&rdquo;
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between py-2 border-t border-[#2F241A] mb-4">
                <span className="text-xs font-sans text-[#A89888]">Price:</span>
                <span className="font-serif text-xl font-bold text-[#FAF4ED]">
                  {displayPrice(PRICING_CONFIG.CUSTOMIZATION.ANNIVERSARY_CARD.placeholder)}
                </span>
              </div>

              <button
                onClick={handleAddCard}
                className={`w-full py-3 px-6 rounded-2xl text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center space-x-2 ${
                  addedCardId === selectedCard.id
                    ? 'bg-[#10B981] text-white'
                    : 'bg-gradient-to-r from-[#C49B66] to-[#A87B48] text-[#16120E] hover:from-[#D4AB76] hover:to-[#B88B58]'
                }`}
              >
                {addedCardId === selectedCard.id ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Card Added to Order!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Add Anniversary Card ({displayPrice(PRICING_CONFIG.CUSTOMIZATION.ANNIVERSARY_CARD.placeholder)})</span>
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
