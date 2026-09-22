import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/products';

interface FaqSectionProps {
  onOpenHelpCenter: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenHelpCenter }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#15110D] relative border-b border-[#2C2219]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-[#C49B66] text-xs font-sans uppercase tracking-widest font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF4ED]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A89888] font-sans">
            Everything you need to know about our candles, personalized boxes, and unboxing surprises.
          </p>
        </div>

        {/* Expandable Accordion FAQ Cards */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#1C1611] rounded-2xl border border-[#2F241A] overflow-hidden transition-all duration-200 hover:border-[#4D3A29]"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-[#FAF4ED] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#261E17] flex items-center justify-center text-[#D4A373] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#C49B66] text-[#16120E]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#B3A18F] font-sans leading-relaxed border-t border-[#261E17]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#1C1611] border border-[#2F241A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-base font-bold text-[#FAF4ED]">
              Still have a question about custom gifting?
            </h4>
            <p className="text-xs text-[#8C7A6A] font-sans mt-0.5">
              Our customer concierge is happy to assist with bulk wedding favors, custom scents, or timelines.
            </p>
          </div>
          <button
            onClick={onOpenHelpCenter}
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-[#2A2016] text-[#C49B66] border border-[#C49B66]/40 hover:bg-[#C49B66] hover:text-[#16120E] transition-all whitespace-nowrap"
          >
            Visit Help Center
          </button>
        </div>
      </div>
    </section>
  );
};
