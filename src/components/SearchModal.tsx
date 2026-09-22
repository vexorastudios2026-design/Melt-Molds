import React, { useState } from 'react';
import { X, Search, Sparkles, Flame, Gift, ArrowRight } from 'lucide-react';
import { SAMPLE_PRODUCTS } from '../data/products';
import { Product } from '../types';
import { displayPrice } from '../config/pricing';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = SAMPLE_PRODUCTS.filter((p) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      (p.fragranceNotes && p.fragranceNotes.some((n) => n.toLowerCase().includes(q)))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-20 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#17130F] border border-[#3E3022] rounded-3xl overflow-hidden shadow-2xl z-10">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#2C231A] flex items-center space-x-3 bg-[#1D1712]">
          <Search className="w-5 h-5 text-[#C49B66]" />
          <input
            type="text"
            autoFocus
            placeholder="Search candles, anniversary boxes, vanilla, rose..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-[#FAF4ED] placeholder-[#7D6E60] focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#8C7A6A] hover:text-white px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#A89888] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-5 py-3 bg-[#140F0C] border-b border-[#241C15] flex items-center space-x-2 overflow-x-auto text-xs font-sans text-[#8C7A6A]">
          <span className="text-[10px] uppercase tracking-wider font-semibold">Popular:</span>
          {['Vanilla', 'Rose', 'Mystery Candle', 'Anniversary Box', 'Gift Box'].map((term) => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="px-2.5 py-1 rounded-lg bg-[#201812] hover:bg-[#2A2016] text-[#C9B9A6] border border-[#302519] whitespace-nowrap transition-colors"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-3">
          {results.length > 0 ? (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="p-3 rounded-2xl bg-[#1E1712] border border-[#2E241B] hover:border-[#C49B66]/60 transition-all cursor-pointer flex items-center space-x-3.5 group"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#130E0B] flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-sm font-bold text-[#FAF4ED] group-hover:text-[#E8C49A] transition-colors truncate">
                      {product.name}
                    </h4>
                    <span className="font-serif text-xs font-bold text-[#C49B66]">
                      {displayPrice(product.pricePlaceholder)}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#A89888] font-sans truncate mt-0.5">
                    {product.shortDescription}
                  </p>
                  <span className="text-[10px] uppercase font-sans tracking-widest text-[#B58D59]">
                    {product.categoryLabel}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8C7A6A] group-hover:text-[#C49B66] group-hover:translate-x-1 transition-all" />
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-[#8C7A6A] text-xs font-sans">
              No products found matching &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
