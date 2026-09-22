import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, AlertCircle, Plus, Minus } from 'lucide-react';
import { CartItem } from '../types';
import { PRICING_CONFIG, displayPrice } from '../config/pricing';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: () => void;
  onExploreMore: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onExploreMore,
}) => {
  if (!isOpen) return null;

  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  // Check if any items have customization charges
  const hasCustomizations = items.some(
    (item) => item.isCustomGiftBox || item.customizationDetails
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#16120E] border-l border-[#352A1E] shadow-2xl flex flex-col justify-between">
          {/* Cart Header */}
          <div className="p-5 sm:p-6 border-b border-[#2C2219] flex items-center justify-between bg-[#1B1611]">
            <div className="flex items-center space-x-2.5">
              <ShoppingBag className="w-5 h-5 text-[#C49B66]" />
              <h2 className="font-serif text-xl font-bold text-[#FAF4ED]">
                Your Shopping Bag ({totalItemCount})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#A89888] hover:text-white hover:bg-[#2A2016]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#201812] text-[#8C7A6A] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#FAF4ED]">
                  Your bag is empty
                </h3>
                <p className="text-xs text-[#A89888] font-sans max-w-xs mx-auto">
                  Discover our exclusive candles, mystery fragrances, or curate a bespoke gift box.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onExploreMore();
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#281F16] text-[#C49B66] border border-[#3F3022] hover:bg-[#34271A]"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-[#1D1712] border border-[#2F241A] flex space-x-3.5 relative"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#130E0B] flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between pr-4">
                      <h4 className="font-serif text-sm font-bold text-[#FAF4ED] truncate">
                        {item.title}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#8C7A6A] hover:text-[#EF4444] transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {item.subtitle && (
                      <p className="text-[11px] text-[#A89888] font-sans truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    )}

                    {/* Customization Details Badges */}
                    {item.customizationDetails && (
                      <div className="mt-2 space-y-1 text-[10px] font-sans text-[#C49B66] bg-[#241B13] p-2 rounded-lg border border-[#372A1D]">
                        {item.customizationDetails.candleName && (
                          <div>Candle: {item.customizationDetails.candleName}</div>
                        )}
                        {item.customizationDetails.anniversaryCard && (
                          <div>Card: {item.customizationDetails.anniversaryCard}</div>
                        )}
                        {item.customizationDetails.handwrittenNote && (
                          <div className="italic">Note: {item.customizationDetails.handwrittenNote}</div>
                        )}
                        {item.customizationDetails.addOns && item.customizationDetails.addOns.length > 0 && (
                          <div>Add-ons: {item.customizationDetails.addOns.join(', ')}</div>
                        )}
                      </div>
                    )}

                    {/* Quantity & Price */}
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-[#382B1E] rounded-lg bg-[#221B14] px-1.5 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-5 h-5 flex items-center justify-center text-[#A89888] hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-semibold text-[#FAF4ED]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-5 h-5 flex items-center justify-center text-[#A89888] hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-serif text-sm font-bold text-[#FAF4ED]">
                          {displayPrice(item.pricePlaceholder)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer Summary */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 bg-[#1A1510] border-t border-[#2F241A] space-y-3.5">
              <div className="space-y-1.5 text-xs font-sans text-[#A89888]">
                <div className="flex items-center justify-between">
                  <span>Subtotal:</span>
                  <span className="font-serif font-bold text-[#FAF4ED]">
                    {displayPrice(PRICING_CONFIG.PLACEHOLDER_TOKEN)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Customization Charges:</span>
                  <span className="font-serif font-bold text-[#C49B66]">
                    {hasCustomizations ? displayPrice(PRICING_CONFIG.PLACEHOLDER_TOKEN) : '₹0'}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#2A2016] text-sm">
                  <span className="font-bold text-[#FAF4ED]">Estimated Total:</span>
                  <span className="font-serif text-xl font-bold text-[#C49B66]">
                    {displayPrice(PRICING_CONFIG.PLACEHOLDER_TOKEN)}
                  </span>
                </div>
              </div>

              {/* Customization disclaimer in cart */}
              <div className="p-2.5 rounded-xl bg-[#241B13] border border-[#3E2E1F] flex items-start space-x-2 text-[10px] text-[#C9B9A6] font-sans">
                <AlertCircle className="w-3.5 h-3.5 text-[#C49B66] flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Note:</strong> {PRICING_CONFIG.DISCLAIMERS.CUSTOMIZATION_ADDITIONAL}
                </p>
              </div>

              {/* Checkout Button */}
              <button
                onClick={onProceedToCheckout}
                className="w-full py-3.5 px-6 rounded-2xl text-xs uppercase tracking-wider font-semibold bg-gradient-to-r from-[#C49B66] via-[#D4AB76] to-[#A87B48] text-[#16120E] hover:from-[#D8AF7B] hover:to-[#B58752] transition-all shadow-xl shadow-[#C49B66]/20 flex items-center justify-center space-x-2"
              >
                <span>Proceed to Demo Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
