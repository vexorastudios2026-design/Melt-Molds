import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Gift, Truck, Flame, Sparkles } from 'lucide-react';
import { CartItem } from '../types';
import { PRICING_CONFIG, displayPrice } from '../config/pricing';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderComplete,
}) => {
  const [formData, setFormData] = useState({
    fullName: 'Aditi Sharma',
    email: 'aditi.demo@example.com',
    phone: '+91 98765 43210',
    address: 'Flat 402, Lotus Boulevards, Indiranagar',
    city: 'Bengaluru',
    pincode: '560038',
    deliveryDate: 'As soon as handcrafted',
    giftPackagingRibbon: 'Gold Silk',
    paymentMethod: 'upi',
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = `MM-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);
    setOrderConfirmed(true);
    onOrderComplete();
  };

  const handleCloseAndReset = () => {
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#17130F] border border-[#3D3023] rounded-3xl overflow-hidden shadow-2xl z-10 my-8">
        {!orderConfirmed ? (
          <div>
            {/* Header */}
            <div className="p-6 bg-[#1F1914] border-b border-[#2F241A] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C49B66] font-sans font-semibold">
                  Melt&Molds Concierge Checkout
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#FAF4ED] mt-0.5">
                  Complete Your Order (Demo)
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-[#271F18] text-[#C9B9A6] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitOrder} className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Order Items Snapshot */}
              <div className="p-4 rounded-2xl bg-[#201812] border border-[#312519] space-y-2">
                <span className="text-[11px] font-sans uppercase tracking-widest text-[#C49B66] font-semibold block">
                  Items to be Handcrafted ({items.length})
                </span>
                <div className="space-y-1 text-xs text-[#E5D7C7] font-sans">
                  {items.map((it) => (
                    <div key={it.id} className="flex justify-between">
                      <span className="truncate pr-2">
                        {it.quantity}x {it.title} {it.subtitle ? `(${it.subtitle})` : ''}
                      </span>
                      <span className="font-serif font-bold text-white">
                        {displayPrice(it.pricePlaceholder)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-[#312519] flex justify-between text-xs font-bold text-[#FAF4ED]">
                  <span>Total Amount (Demo):</span>
                  <span className="text-[#C49B66] font-serif text-sm">
                    {displayPrice(PRICING_CONFIG.PLACEHOLDER_TOKEN)}
                  </span>
                </div>
              </div>

              {/* Recipient Details */}
              <div className="space-y-4">
                <h3 className="font-serif text-base font-bold text-[#FAF4ED] flex items-center gap-2">
                  <Gift className="w-4 h-4 text-[#C49B66]" />
                  <span>Recipient & Delivery Address</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-sans text-[#A89888] mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#201812] border border-[#382B1E] text-xs text-[#FAF4ED] focus:outline-none focus:border-[#C49B66]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans text-[#A89888] mb-1">Phone Number (For Tracking)</label>
                    <input
                      required
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#201812] border border-[#382B1E] text-xs text-[#FAF4ED] focus:outline-none focus:border-[#C49B66]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans text-[#A89888] mb-1">Street Address</label>
                  <input
                    required
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#201812] border border-[#382B1E] text-xs text-[#FAF4ED] focus:outline-none focus:border-[#C49B66]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-sans text-[#A89888] mb-1">City</label>
                    <input
                      required
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#201812] border border-[#382B1E] text-xs text-[#FAF4ED] focus:outline-none focus:border-[#C49B66]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans text-[#A89888] mb-1">Pincode</label>
                    <input
                      required
                      type="text"
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#201812] border border-[#382B1E] text-xs text-[#FAF4ED] focus:outline-none focus:border-[#C49B66]"
                    />
                  </div>
                </div>
              </div>

              {/* Demo Payment Notice */}
              <div className="p-4 rounded-2xl bg-[#261D15] border border-[#C49B66]/30 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#D4A373]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Demo Mode Active</span>
                </div>
                <p className="text-[11px] text-[#C9B9A6] font-sans leading-relaxed">
                  This demo checkout simulates real e-commerce ordering. No actual payment will be deducted.
                </p>
              </div>

              {/* Action */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl text-xs uppercase tracking-wider font-semibold bg-gradient-to-r from-[#C49B66] via-[#D4AB76] to-[#A87B48] text-[#16120E] hover:from-[#D8AF7B] hover:to-[#B58752] transition-all shadow-xl shadow-[#C49B66]/20 font-sans"
              >
                Confirm & Place Demo Order
              </button>
            </form>
          </div>
        ) : (
          /* Order Confirmation Screen */
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#C49B66] font-sans font-semibold">
                Thank you for choosing Melt&Molds
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#FAF4ED] mt-1">
                Order Confirmed!
              </h2>
              <p className="font-sans text-xs text-[#8C7A6A] mt-1">
                Order ID: <strong className="text-[#FAF4ED] font-mono">{orderId}</strong>
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#C9B9A6] font-sans max-w-md mx-auto leading-relaxed">
              We have received your gift requirements for <strong className="text-white">{formData.fullName}</strong>. Our studio chandler is preparing the wax and your handwritten note with care.
            </p>

            <div className="p-4 rounded-2xl bg-[#1E1712] border border-[#2F241A] text-left text-xs font-sans text-[#A89888] space-y-1.5 max-w-md mx-auto">
              <div className="flex items-center space-x-2 text-[#C49B66] font-semibold mb-1">
                <Truck className="w-3.5 h-3.5" />
                <span>Next Steps:</span>
              </div>
              <p>• Hand-poured curing & wax-sealing: 24–48 hours</p>
              <p>• Delivery destination: {formData.city} ({formData.pincode})</p>
              <p>• Demo status: Verified simulated dispatch</p>
            </div>

            <button
              onClick={handleCloseAndReset}
              className="px-8 py-3 rounded-full text-xs font-semibold bg-[#2A2016] text-[#C49B66] border border-[#C49B66]/40 hover:bg-[#C49B66] hover:text-[#16120E] transition-all"
            >
              Continue Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
