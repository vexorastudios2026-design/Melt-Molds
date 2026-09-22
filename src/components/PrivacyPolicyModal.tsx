import React from 'react';
import { X, Lock, ShieldCheck } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
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
            <Lock className="w-5 h-5 text-[#C49B66]" />
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF4ED]">
                Privacy Policy
              </h2>
              <span className="text-[11px] text-[#A89888] font-sans">
                Melt&Molds Data & Privacy Standards
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

        {/* Short & Clean Privacy Points */}
        <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm font-sans text-[#C9B9A6] max-h-[65vh] overflow-y-auto">
          <div className="space-y-1">
            <h3 className="font-bold text-[#FAF4ED] text-sm">1. Information Collected</h3>
            <p className="text-[#A89888]">We collect necessary details provided during checkout or contact forms, including name, shipping address, contact phone/email, and custom handwritten message text for gifting cards.</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-[#FAF4ED] text-sm">2. How Customer Information Is Used</h3>
            <p className="text-[#A89888]">Your information is solely used to process artisanal orders, hand-transcribe personalized notes, fulfill delivery, and provide order tracking updates.</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-[#FAF4ED] text-sm">3. Payment & Security</h3>
            <p className="text-[#A89888]">Payments are handled securely via PCI-DSS compliant payment gateways. Melt&Molds never stores your credit/debit card numbers or sensitive banking credentials.</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-[#FAF4ED] text-sm">4. Cookies & Basic Analytics</h3>
            <p className="text-[#A89888]">We utilize minimal essential session cookies to remember your active shopping bag items, custom gift box configurations, and website performance.</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-[#FAF4ED] text-sm">5. Third-Party Services</h3>
            <p className="text-[#A89888]">We partner exclusively with reputable logistics carriers (e.g. Blue Dart, Delhivery) to facilitate secure doorstep delivery of your gift boxes.</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-[#FAF4ED] text-sm">6. Data Protection</h3>
            <p className="text-[#A89888]">We implement industry-standard encryption to protect your personal details and custom gift messages against unauthorized access.</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-[#FAF4ED] text-sm">7. Customer Contact & Support</h3>
            <p className="text-[#A89888]">For any data modification or privacy queries, reach out directly to privacy@meltandmolds.demo.</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-[#FAF4ED] text-sm">8. Policy Updates</h3>
            <p className="text-[#A89888]">This privacy policy is subject to routine updates as we scale. Continued use of the website constitutes agreement with the latest published terms.</p>
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
