/**
 * Centralized Pricing Configuration for Melt&Molds
 * 
 * Per specifications:
 * All prices default to placeholder format "₹XYZ" and can easily be replaced here.
 * Numerical sample values are also provided for calculated totals if needed.
 */

export const PRICING_CONFIG = {
  // Global placeholder token used across the app
  PLACEHOLDER_TOKEN: '₹XYZ',

  // Customization add-on placeholder pricing
  CUSTOMIZATION: {
    BASE_PACKAGING: {
      label: 'Premium Gift Packaging',
      placeholder: '₹XYZ',
      sampleValue: 399,
    },
    ANNIVERSARY_CARD: {
      label: 'Anniversary Card',
      placeholder: '₹XYZ',
      sampleValue: 149,
    },
    HANDWRITTEN_NOTE: {
      label: 'Handwritten Note',
      placeholder: '₹XYZ',
      sampleValue: 99,
    },
    MYSTERY_CANDLE: {
      label: 'Mystery Candle',
      placeholder: '₹XYZ',
      sampleValue: 499,
    },
    CUSTOM_ADDON: {
      label: 'Custom Add-on',
      placeholder: '₹XYZ',
      sampleValue: 199,
    },
  },

  // Base product sample values
  PRODUCTS: {
    STANDARD_CANDLE: {
      placeholder: '₹XYZ',
      sampleValue: 699,
    },
    PREMIUM_CANDLE: {
      placeholder: '₹XYZ',
      sampleValue: 899,
    },
    GIFT_BOX: {
      placeholder: '₹XYZ',
      sampleValue: 1499,
    },
    DELUXE_GIFT_BOX: {
      placeholder: '₹XYZ',
      sampleValue: 2199,
    },
  },

  // Standard disclaimers required by brand guidelines
  DISCLAIMERS: {
    CUSTOMIZATION_ADDITIONAL: 'Customization charges are additional.',
    CUSTOMIZED_PRODUCTS_DISCLAIMER: 'Customized products may have additional charges depending on the selected options.',
    DEMO_NOTICE: 'This demo website contains placeholder information and prices that will be updated before launch.',
  },
};

/**
 * Helper to display prices cleanly.
 * By default returns the placeholder "₹XYZ" or configured token.
 */
export function displayPrice(pricePlaceholder: string = PRICING_CONFIG.PLACEHOLDER_TOKEN, numericValue?: number, showNumericFallback = false): string {
  if (showNumericFallback && numericValue !== undefined) {
    return `₹${numericValue}`;
  }
  return pricePlaceholder || PRICING_CONFIG.PLACEHOLDER_TOKEN;
}
