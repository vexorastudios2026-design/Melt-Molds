import React from 'react';
import { X, ShieldAlert, FileText } from 'lucide-react';

interface TermsAndConditionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsAndConditionsModal: React.FC<TermsAndConditionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#17130F] border border-[#3D3023] rounded-3xl overflow-hidden shadow-2xl z-10 my-8">
        {/* Header */}
        <div className="p-6 bg-[#1F1914] border-b border-[#2F241A] flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <FileText className="w-5 h-5 text-[#C49B66]" />
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF4ED]">
                Terms & Conditions
              </h2>
              <span className="text-[11px] text-[#A89888] font-sans">
                Melt&Molds Policy Guidelines
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#271F18] text-[#C9B9A6] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Short & Clean Points per prompt instructions */}
        <div className="p-6 sm:p-8 space-y-5 text-xs sm:text-sm font-sans text-[#C9B9A6] max-h-[65vh] overflow-y-auto">
          <div className="space-y-1">
            <h3 className="font-bold text-[#FAF4ED] text-sm">1. Orders</h3>
            <p className="text-[#A89888]">Orders are confirmed after successful payment/order confirmation.</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-[#FAF4ED] text-sm">2. Customized Products</h3>
            <p className="text-[#A89888]">Customized products may have additional charges and may not be eligible for cancellation once production has started.</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-[#FAF4ED] text-sm">3. Pricing</h3>
            <p className="text-[#A89888]">Product and customization prices shown on the website are subject to change.</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-[#FAF4ED] text-sm">4. Delivery</h3>
            <p className="text-[#A89888]">Delivery timelines may vary depending on location and order type.</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-[#FAF4ED] text-sm">5. Product Variations</h3>
            <p className="text-[#A89888]">Handmade products may have minor variations in appearance.</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-[#FAF4ED] text-sm">6. Returns & Refunds</h3>
            <p className="text-[#A89888]">Returns/refunds will be handled according to Melt&Molds' applicable return/refund policy.</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-[#FAF4ED] text-sm">7. Contact</h3>
            <p className="text-[#A89888]">Customers can contact Melt&Molds support for order-related questions.</p>
          </div>

          {/* Mandatory Demo Disclaimer per prompt */}
          <div className="mt-6 p-4 rounded-2xl bg-[#281E15] border border-[#C49B66]/30 flex items-start space-x-2.5">
            <ShieldAlert className="w-5 h-5 text-[#D4A373] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#FAF4ED] italic">
              &ldquo;This demo website contains placeholder information and prices that will be updated before launch.&rdquo;
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#1F1914] border-t border-[#2F241A] text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-semibold bg-[#2A2016] text-[#C49B66] border border-[#3E2E20] hover:bg-[#34271A]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
