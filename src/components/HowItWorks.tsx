import React from 'react';
import { Flame, Sliders, PenTool, CheckCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Flame,
      title: 'Choose Your Candle',
      description: 'Explore our catalog of hand-poured artisanal soy candles or pick a thrilling Mystery Candle.',
    },
    {
      number: '02',
      icon: Sliders,
      title: 'Customize Your Gift',
      description: 'Select luxury keepsake packaging, resin coasters, brass wick trimmers, and celebratory add-ons.',
    },
    {
      number: '03',
      icon: PenTool,
      title: 'Add Your Personal Touch',
      description: 'Choose a gold-foil anniversary card and write a personal message to be transcribed in cursive calligraphy.',
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Place Your Order',
      description: 'Review your live order summary, provide delivery details, and we carefully hand-pack and dispatch with care.',
    },
  ];

  return (
    <section className="py-20 bg-[#15110D] relative border-b border-[#2C2219]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#C49B66] text-xs font-sans uppercase tracking-widest font-semibold">
            Simple & Seamless Gifting
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF4ED] mt-2">
            How It Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A89888] font-sans">
            Crafting a bespoke surprise takes just a few thoughtful moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#1C1611] p-6 rounded-3xl border border-[#2F241A] flex flex-col justify-between group hover:border-[#C49B66]/60 transition-all duration-300 hover:shadow-xl"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-2xl font-bold text-[#443323] group-hover:text-[#C49B66] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#281F17] text-[#D4A373] flex items-center justify-center group-hover:bg-[#C49B66] group-hover:text-[#16120E] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#FAF4ED] group-hover:text-[#E8C49A] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A89888] font-sans mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
