import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { DEMO_REVIEWS } from '../data/products';

export const CustomerExperience: React.FC = () => {
  return (
    <section className="py-20 bg-[#120E0B] relative border-b border-[#2C2219]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-[#C49B66] text-xs font-sans uppercase tracking-widest font-semibold mb-2">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Community Moments</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF4ED]">
            Customer Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A89888] font-sans">
            Hear from our early patrons. (Sample demo reviews from verified surprise unboxings).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {DEMO_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#18130F] p-6 sm:p-7 rounded-3xl border border-[#2E241B] flex flex-col justify-between hover:border-[#C49B66]/40 transition-colors shadow-lg"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>

                {/* Review quote */}
                <p className="font-serif text-base sm:text-lg text-[#FAF4ED] italic leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#292017] flex items-center justify-between">
                <div>
                  <span className="font-serif text-sm font-bold text-[#E5D7C7] block">
                    {review.author}
                  </span>
                  <span className="text-[11px] text-[#8C7A6A] font-sans">
                    {review.location} • {review.productName}
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-[10px] text-[#10B981] font-sans">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Demo Order</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
