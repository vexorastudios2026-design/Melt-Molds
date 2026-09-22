import React, { useState } from 'react';
import { PenTool, Check, Plus, Sparkles } from 'lucide-react';
import { PRICING_CONFIG, displayPrice } from '../config/pricing';
import { CartItem } from '../types';

interface HandwrittenNotesSectionProps {
  onAddToCart: (item: CartItem) => void;
}

export const HandwrittenNotesSection: React.FC<HandwrittenNotesSectionProps> = ({ onAddToCart }) => {
  const [recipient, setRecipient] = useState('Ananya');
  const [message, setMessage] = useState(
    'May the soft glow of this candle remind you of how deeply you are cherished. Thank you for making every day feel like poetry.'
  );
  const [sender, setSender] = useState('With all my heart');
  const [isAdded, setIsAdded] = useState(false);

  const handleAddNote = () => {
    const item: CartItem = {
      id: `handwritten-note-${Date.now()}`,
      productId: 'handwritten-note-standalone',
      title: 'Personalized Handwritten Note',
      subtitle: `For ${recipient || 'Recipient'} • Wax Sealed Parchment`,
      image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80',
      quantity: 1,
      pricePlaceholder: PRICING_CONFIG.CUSTOMIZATION.HANDWRITTEN_NOTE.placeholder,
      numericPrice: 99,
      customizationDetails: {
        handwrittenNote: `To: ${recipient} | "${message}" | From: ${sender}`,
        customizationChargeText: 'Artisan transcription and wax seal',
      },
    };
    onAddToCart(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <section id="notes" className="py-20 bg-[#120E0B] relative border-b border-[#2C2219]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-[#C49B66] text-xs font-sans uppercase tracking-widest font-semibold mb-2">
            <PenTool className="w-3.5 h-3.5" />
            <span>Calligraphy Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF4ED]">
            Words They Can Keep
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A89888] font-sans leading-relaxed">
            Add a personalized handwritten-style note to your gift.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Note Customization Form */}
          <div className="lg:col-span-6 space-y-4 bg-[#18130F] p-6 sm:p-7 rounded-3xl border border-[#2E241B]">
            <h3 className="font-serif text-lg font-bold text-[#FAF4ED] flex items-center justify-between">
              <span>Compose Your Note</span>
              <span className="text-xs font-sans text-[#C49B66] font-semibold">
                Price: {displayPrice(PRICING_CONFIG.CUSTOMIZATION.HANDWRITTEN_NOTE.placeholder)}
              </span>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-sans text-[#A89888] mb-1">To</label>
                <input
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="Recipient Name"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#221B15] border border-[#382B1F] text-xs text-[#FAF4ED] focus:outline-none focus:border-[#C49B66]"
                />
              </div>
              <div>
                <label className="block text-xs font-sans text-[#A89888] mb-1">Sign-off / From</label>
                <input
                  type="text"
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                  placeholder="Your Name / Sign-off"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#221B15] border border-[#382B1F] text-xs text-[#FAF4ED] focus:outline-none focus:border-[#C49B66]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-sans text-[#A89888] mb-1">Message Text</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your personal heartfelt message..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#221B15] border border-[#382B1F] text-xs text-[#FAF4ED] focus:outline-none focus:border-[#C49B66] leading-relaxed"
              />
            </div>

            <div className="pt-2">
              <button
                onClick={handleAddNote}
                className={`w-full py-3 px-5 rounded-2xl text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center space-x-2 ${
                  isAdded
                    ? 'bg-[#10B981] text-white'
                    : 'bg-gradient-to-r from-[#C49B66] to-[#A87B48] text-[#16120E] hover:from-[#D4AB76] hover:to-[#B88B58]'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Handwritten Note Added!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Add Handwritten Note ({displayPrice(PRICING_CONFIG.CUSTOMIZATION.HANDWRITTEN_NOTE.placeholder)})</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Realistic Parchment Note Live Preview */}
          <div className="lg:col-span-6">
            <div className="relative p-7 sm:p-9 rounded-3xl bg-[#F4E9DC] text-[#241B13] shadow-2xl border border-[#D8C4B0] overflow-hidden transform rotate-[-0.8deg] hover:rotate-0 transition-transform duration-300">
              {/* Gold Wax Seal Stamp in corner */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#8C5E35] to-[#5C3D23] border border-[#D4A373] shadow-md flex items-center justify-center text-[#F5EBE1] text-[10px] font-serif font-bold uppercase tracking-wider">
                M&M
              </div>

              <div className="text-[11px] font-sans uppercase tracking-widest text-[#7C6856] font-semibold mb-4">
                Artisanal Parchment Note Preview
              </div>

              <div className="font-handwriting text-xl sm:text-2xl text-[#1E1711] leading-relaxed min-h-[140px] flex flex-col justify-between">
                <div>
                  <p className="font-bold text-2xl sm:text-3xl text-[#140F0B]">
                    {recipient ? `Dearest ${recipient},` : 'Dearest,'}
                  </p>
                  <p className="mt-3">
                    {message || 'Your personal words will be rendered here in authentic flowing cursive script on heavy handmade parchment paper.'}
                  </p>
                </div>
                <div className="mt-6 text-right">
                  <p className="text-xl sm:text-2xl italic font-bold">
                    {sender || 'Forever yours'}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D5C1AD] flex items-center justify-between text-[11px] font-sans text-[#756353]">
                <span>✓ 300 GSM Heavy Cotton Deckle Edge</span>
                <span>Hand-pressed Wax Seal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
