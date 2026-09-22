import React, { useState } from 'react';
import { X, Flame, Sparkles, Check, ShoppingBag, Clock, ShieldCheck, Heart } from 'lucide-react';
import { Product } from '../types';
import { displayPrice } from '../config/pricing';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onCustomize: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onCustomize,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    setIsAdded(true);
    onAddToCart(product, quantity);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#17130F] border border-[#3D3023] rounded-3xl overflow-hidden shadow-2xl z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#1F1914]/80 text-[#C9B9A6] hover:text-[#FAF4ED] hover:bg-[#2F241A] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Image */}
          <div className="relative aspect-square md:aspect-auto w-full h-full bg-[#1F1914]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17130F] via-transparent to-transparent md:hidden" />
            
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C49B66] text-[#16120E] shadow-lg">
                {product.badge}
              </span>
            )}
          </div>

          {/* Right Column: Product Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C49B66] font-sans font-medium">
                {product.categoryLabel}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF4ED] mt-1">
                {product.name}
              </h2>

              {/* Price */}
              <div className="mt-3 flex items-baseline space-x-2">
                <span className="text-xs text-[#8C7A6A] font-sans">Price:</span>
                <span className="font-serif text-2xl font-bold text-[#FAF4ED]">
                  {displayPrice(product.pricePlaceholder)}
                </span>
                <span className="text-[11px] text-[#A89888] font-sans">
                  (Demo placeholder)
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm text-[#C9B9A6] font-sans leading-relaxed">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="mt-6 space-y-2.5 pt-5 border-t border-[#2F241B]">
                {product.burnTime && (
                  <div className="flex items-center text-xs text-[#E5D7C7] space-x-2">
                    <Clock className="w-4 h-4 text-[#C49B66]" />
                    <span>Burn Time: <strong className="text-white">{product.burnTime}</strong></span>
                  </div>
                )}
                {product.waxType && (
                  <div className="flex items-center text-xs text-[#E5D7C7] space-x-2">
                    <Flame className="w-4 h-4 text-[#C49B66]" />
                    <span>Wax: <strong className="text-white">{product.waxType}</strong></span>
                  </div>
                )}
                {product.weight && (
                  <div className="flex items-center text-xs text-[#E5D7C7] space-x-2">
                    <Sparkles className="w-4 h-4 text-[#C49B66]" />
                    <span>Weight: <strong className="text-white">{product.weight}</strong></span>
                  </div>
                )}
              </div>

              {/* Fragrance Notes */}
              {product.fragranceNotes && product.fragranceNotes.length > 0 && (
                <div className="mt-5">
                  <span className="text-xs text-[#8C7A6A] font-sans block mb-2 uppercase tracking-wider font-semibold">
                    Aromatic Notes
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.fragranceNotes.map((note, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-[#241C16] text-xs text-[#FAF4ED] border border-[#3C2E22]"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-[#2F241B] space-y-3">
              <div className="flex items-center space-x-3">
                {/* Quantity selector */}
                <div className="flex items-center border border-[#3C2E22] rounded-xl bg-[#201813] px-2 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 flex items-center justify-center text-[#C9B9A6] hover:text-white"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm font-semibold text-[#FAF4ED]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 flex items-center justify-center text-[#C9B9A6] hover:text-white"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart button */}
                <button
                  onClick={handleAdd}
                  disabled={isAdded}
                  className={`flex-1 py-3 px-5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center space-x-2 ${
                    isAdded
                      ? 'bg-[#10B981] text-white'
                      : 'bg-gradient-to-r from-[#C49B66] to-[#A87B48] text-[#16120E] hover:from-[#D4AB76] hover:to-[#B88B58]'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Your Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart ({displayPrice(product.pricePlaceholder)})</span>
                    </>
                  )}
                </button>
              </div>

              {product.isCustomizable && (
                <button
                  onClick={() => {
                    onClose();
                    onCustomize(product);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#C49B66] hover:text-[#FAF4ED] bg-[#221B14] hover:bg-[#2B2117] border border-[#3D3023] transition-colors flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Customize with Anniversary Card & Note</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
