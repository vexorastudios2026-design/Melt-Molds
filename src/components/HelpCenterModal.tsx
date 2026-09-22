import React, { useState } from 'react';
import { X, Search, Package, Sparkles, CreditCard, Truck, MessageCircle, Mail, Phone, Clock } from 'lucide-react';

interface HelpCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpCenterModal: React.FC<HelpCenterModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'customization' | 'payments' | 'delivery'>('orders');
  const [inquirySent, setInquirySent] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#17130F] border border-[#3D3023] rounded-3xl overflow-hidden shadow-2xl z-10 my-8">
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#1F1914] border-b border-[#2F241A] flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C49B66] font-sans font-semibold">
              Customer Concierge
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF4ED] mt-1">
              How can we help?
            </h2>
            <p className="text-xs text-[#A89888] font-sans mt-1">
              Browse assistance categories or contact our dedicated gifting team.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#271F18] text-[#C9B9A6] hover:text-white hover:bg-[#342A20]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Navigation Category Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button
              onClick={() => setActiveTab('orders')}
              className={`p-3.5 rounded-2xl text-left border transition-all flex items-center space-x-2.5 ${
                activeTab === 'orders'
                  ? 'bg-[#291F16] border-[#C49B66] text-[#FAF4ED]'
                  : 'bg-[#1C1611] border-[#2D2319] text-[#A89888] hover:text-[#FAF4ED]'
              }`}
            >
              <Package className="w-4 h-4 text-[#C49B66]" />
              <span className="font-serif text-xs font-bold">Orders</span>
            </button>

            <button
              onClick={() => setActiveTab('customization')}
              className={`p-3.5 rounded-2xl text-left border transition-all flex items-center space-x-2.5 ${
                activeTab === 'customization'
                  ? 'bg-[#291F16] border-[#C49B66] text-[#FAF4ED]'
                  : 'bg-[#1C1611] border-[#2D2319] text-[#A89888] hover:text-[#FAF4ED]'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#C49B66]" />
              <span className="font-serif text-xs font-bold">Customization</span>
            </button>

            <button
              onClick={() => setActiveTab('payments')}
              className={`p-3.5 rounded-2xl text-left border transition-all flex items-center space-x-2.5 ${
                activeTab === 'payments'
                  ? 'bg-[#291F16] border-[#C49B66] text-[#FAF4ED]'
                  : 'bg-[#1C1611] border-[#2D2319] text-[#A89888] hover:text-[#FAF4ED]'
              }`}
            >
              <CreditCard className="w-4 h-4 text-[#C49B66]" />
              <span className="font-serif text-xs font-bold">Payments</span>
            </button>

            <button
              onClick={() => setActiveTab('delivery')}
              className={`p-3.5 rounded-2xl text-left border transition-all flex items-center space-x-2.5 ${
                activeTab === 'delivery'
                  ? 'bg-[#291F16] border-[#C49B66] text-[#FAF4ED]'
                  : 'bg-[#1C1611] border-[#2D2319] text-[#A89888] hover:text-[#FAF4ED]'
              }`}
            >
              <Truck className="w-4 h-4 text-[#C49B66]" />
              <span className="font-serif text-xs font-bold">Delivery</span>
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="bg-[#1C1611] p-6 rounded-2xl border border-[#2D2319] space-y-4 text-xs sm:text-sm font-sans text-[#C9B9A6]">
            {activeTab === 'orders' && (
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#FAF4ED]">Orders & Inquiries</h3>
                <div>
                  <h4 className="font-bold text-[#FAF4ED] text-xs">How to place an order:</h4>
                  <p className="mt-0.5 text-[#A89888]">Browse our candle catalog or use the custom gift box builder to configure your packaging, card, and handwritten note. Add to cart and complete checkout.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#FAF4ED] text-xs">Order customization:</h4>
                  <p className="mt-0.5 text-[#A89888]">Personalization requests are confirmed within 12 hours. We double-check all transcribed calligraphy before wax-sealing.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#FAF4ED] text-xs">Order status:</h4>
                  <p className="mt-0.5 text-[#A89888]">Once shipped, a live tracking link is sent via WhatsApp/SMS and email.</p>
                </div>
              </div>
            )}

            {activeTab === 'customization' && (
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#FAF4ED]">Gift Box & Stationery Customization</h3>
                <div>
                  <h4 className="font-bold text-[#FAF4ED] text-xs">Gift box customization:</h4>
                  <p className="mt-0.5 text-[#A89888]">Choose between Luxury Rigid Boxes, Artisan Pine Wood chests, and Eco Kraft sets with custom bedding.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#FAF4ED] text-xs">Anniversary cards:</h4>
                  <p className="mt-0.5 text-[#A89888]">Printed on heavy 350 GSM Italian cotton stock with debossed hot-foil calligraphy.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#FAF4ED] text-xs">Handwritten notes:</h4>
                  <p className="mt-0.5 text-[#A89888]">Our calligraphy artists transcribe your personal sentiments by hand in flowing cursive script with an authentic stamped wax seal.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#FAF4ED] text-xs">Mystery candles:</h4>
                  <p className="mt-0.5 text-[#A89888]">A surprise seasonal candle profile chosen by our master chandler, shrouded in darkness until lit.</p>
                </div>
              </div>
            )}

            {activeTab === 'payments' && (
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#FAF4ED]">Payments & Pricing Policy</h3>
                <div>
                  <h4 className="font-bold text-[#FAF4ED] text-xs">Payment methods:</h4>
                  <p className="mt-0.5 text-[#A89888]">In commercial launch, we support UPI (Google Pay, PhonePe, Paytm), Credit/Debit cards, Net Banking, and Secure Wallets.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#FAF4ED] text-xs">Pricing:</h4>
                  <p className="mt-0.5 text-[#A89888]">All current pricing displayed as ₹XYZ represents placeholder demo valuations and will be finalized prior to live operations.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#FAF4ED] text-xs">Additional customization charges:</h4>
                  <p className="mt-0.5 text-[#A89888]">Customization charges are additional depending on bespoke packaging, handwritten calligraphy notes, and decorative additions selected.</p>
                </div>
              </div>
            )}

            {activeTab === 'delivery' && (
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#FAF4ED]">Shipping & Safe Transit</h3>
                <div>
                  <h4 className="font-bold text-[#FAF4ED] text-xs">Delivery timeline:</h4>
                  <p className="mt-0.5 text-[#A89888]">Standard orders ship in 2-3 business days. Personalized handwritten calligraphy gift boxes dispatch within 3-4 days. Transit across metro cities typically takes 2-4 days.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#FAF4ED] text-xs">Shipping information:</h4>
                  <p className="mt-0.5 text-[#A89888]">All candles and resin items are wrapped in shock-absorbing honeycomb eco-wrap and rigid outer protection.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#FAF4ED] text-xs">Damaged product support:</h4>
                  <p className="mt-0.5 text-[#A89888]">In the rare event of transit damage, share an unboxing photo within 48 hours for immediate priority replacement.</p>
                </div>
              </div>
            )}
          </div>

          {/* Contact Support Section per prompt */}
          <div className="pt-4 border-t border-[#2F241A]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#211913] border border-[#35271A]">
              <div>
                <h4 className="font-serif text-base font-bold text-[#FAF4ED]">
                  Still need help?
                </h4>
                <p className="text-xs text-[#A89888] font-sans mt-0.5">
                  Contact Melt&Molds Support directly. (Demo contact details below)
                </p>
                <div className="flex flex-wrap gap-4 mt-3 text-xs text-[#C49B66]">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    support@meltandmolds.demo
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    +91 (0) 98765-DEMO-01
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Mon - Sat (10am - 7pm IST)
                  </span>
                </div>
              </div>

              <button
                onClick={() => setInquirySent(true)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#C49B66] to-[#A87B48] text-[#16120E] hover:from-[#D4AB76] hover:to-[#B88B58] transition-all whitespace-nowrap shadow-md"
              >
                {inquirySent ? '✓ Inquiry Received (Demo)' : 'Contact Melt&Molds Support'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
