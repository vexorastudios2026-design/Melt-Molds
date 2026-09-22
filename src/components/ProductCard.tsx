import React, { useState } from 'react';
import { ShoppingBag, SlidersHorizontal, Sparkles, Flame, Eye, Check } from 'lucide-react';
import { Product } from '../types';
import { displayPrice } from '../config/pricing';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onCustomize?: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onCustomize,
  onQuickView,
}) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    onAddToCart(product);
    setTimeout(() => setIsAdding(false), 900);
  };

  const badgeColorMap: Record<string, string> = {
    'Best Seller': 'bg-[#C49B66] text-[#16120E]',
    'New': 'bg-[#10B981] text-white',
    'Limited': 'bg-[#DC2626] text-white',
    'Handmade': 'bg-[#8B5CF6] text-white',
    'Mystery': 'bg-gradient-to-r from-[#D97706] to-[#7C2D12] text-white',
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative bg-[#17130F] rounded-2xl border border-[#2E241B] overflow-hidden flex flex-col justify-between hover:border-[#D4A373]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 cursor-pointer"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-[#1E1914]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Ambient Dark Gradient on Image for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17130F] via-transparent to-black/30 pointer-events-none" />

        {/* Premium Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`px-2.5 py-1 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider shadow-md ${
                badgeColorMap[product.badge] || 'bg-[#C49B66] text-[#16120E]'
              }`}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick View Button on Image */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#18130F]/80 backdrop-blur-md text-[#FAF4ED] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-[#C49B66] hover:text-[#16120E] shadow-lg"
          aria-label="Quick View"
          title="Quick View"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Burn Time or Scent Pill */}
        {product.burnTime && (
          <div className="absolute bottom-2.5 left-3 z-10">
            <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md bg-[#130F0C]/80 backdrop-blur-md text-[10px] text-[#D8C5B3] font-sans border border-white/10">
              <Flame className="w-2.5 h-2.5 text-[#EAB308]" />
              <span>{product.burnTime}</span>
            </span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Tag */}
          <span className="text-[10px] uppercase tracking-widest text-[#B58D59] font-sans font-medium">
            {product.categoryLabel}
          </span>

          {/* Product Name */}
          <h3 className="font-serif text-lg font-bold text-[#FAF4ED] group-hover:text-[#E8C49A] transition-colors mt-0.5 line-clamp-1">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#A89888] font-sans mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Fragrance Notes Pills */}
          {product.fragranceNotes && product.fragranceNotes.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {product.fragranceNotes.slice(0, 2).map((note, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-[#231C16] text-[10px] text-[#C9B9A6] border border-[#3A2E22] font-sans"
                >
                  {note}
                </span>
              ))}
              {product.fragranceNotes.length > 2 && (
                <span className="px-1.5 py-0.5 rounded-md bg-[#231C16] text-[10px] text-[#8C7A6B] border border-[#3A2E22] font-sans">
                  +{product.fragranceNotes.length - 2}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Pricing & Actions */}
        <div className="mt-5 pt-3.5 border-t border-[#292017]">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-xs text-[#8A7969] font-sans mr-1">Price</span>
              <span className="font-serif text-xl font-bold text-[#FAF4ED] tracking-tight">
                {displayPrice(product.pricePlaceholder)}
              </span>
            </div>
            {product.isCustomizable && (
              <span className="text-[11px] text-[#C49B66] font-sans italic flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                Customizable
              </span>
            )}
          </div>

          {/* Buttons: Add to Cart and optional Customize */}
          <div className="flex items-center space-x-2">
            {product.isCustomizable && onCustomize && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onCustomize(product);
                }}
                className="flex-1 py-2 px-2.5 rounded-xl text-xs font-sans font-medium text-[#E5D7C7] bg-[#221B14] hover:bg-[#31261D] border border-[#3D3124] hover:border-[#C49B66]/60 transition-all flex items-center justify-center space-x-1.5"
                title="Customize this gift"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#C49B66]" />
                <span>Customize</span>
              </button>
            )}

            <button
              onClick={handleAdd}
              disabled={isAdding}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-sans font-semibold transition-all flex items-center justify-center space-x-1.5 ${
                isAdding
                  ? 'bg-[#10B981] text-white'
                  : 'bg-gradient-to-r from-[#C49B66] to-[#A87B48] text-[#16120E] hover:from-[#D4AB76] hover:to-[#B88B58] active:scale-95 shadow-md shadow-[#C49B66]/15'
              }`}
            >
              {isAdding ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
