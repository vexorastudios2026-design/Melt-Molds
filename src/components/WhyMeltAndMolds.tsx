import React from 'react';
import { Hammer, Sparkles, Gift, HeartHandshake } from 'lucide-react';

export const WhyMeltAndMolds: React.FC = () => {
  const features = [
    {
      icon: Hammer,
      title: 'Handmade & Carefully Crafted',
      description: 'Every candle is hand-poured in micro-batches using 100% natural soy wax, lead-free cotton wicks, and IFRA-certified therapeutic fragrances.',
    },
    {
      icon: Sparkles,
      title: 'Personalized Gifting',
      description: 'No two love stories are identical. Customize scents, choose anniversary stationery, and include custom transcribed calligraphy notes.',
    },
    {
      icon: Gift,
      title: 'Premium Packaging',
      description: 'Rigid gold-embossed keepsake boxes, textured silk ribbons, and luxury unboxing that turns the receipt of your gift into a memorable event.',
    },
    {
      icon: HeartHandshake,
      title: 'Made For Special Moments',
      description: 'Thoughtfully designed for anniversaries, milestones, intimate dinners, and quiet self-care evenings when memories are made.',
    },
  ];

  return (
    <section className="py-20 bg-[#120E0B] relative border-b border-[#2C2219]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#C49B66] text-xs font-sans uppercase tracking-widest font-semibold">
            The Melt&Molds Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF4ED] mt-2">
            Why Melt&Molds
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A89888] font-sans">
            Crafting gifts that evoke genuine emotion, warmth, and timeless aesthetic delight.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-[#18130F] p-6 sm:p-7 rounded-3xl border border-[#2E241B] hover:border-[#C49B66]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#251E17] text-[#D4A373] flex items-center justify-center mb-5 group-hover:bg-[#C49B66] group-hover:text-[#16120E] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#FAF4ED] group-hover:text-[#E8C49A] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A89888] font-sans mt-2.5 leading-relaxed">
                    {feature.description}
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
