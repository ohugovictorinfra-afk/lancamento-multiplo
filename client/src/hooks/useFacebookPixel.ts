import { useEffect } from 'react';

// Facebook Pixel ID
const PIXEL_ID = '721048011046778';

// Declare fbq on window with proper types
declare global {
  interface Window {
    fbq?: {
      (action: string, ...args: any[]): void;
      callMethod?: (...args: any[]) => void;
      push?: (...args: any[]) => void;
      loaded?: boolean;
      version?: string;
      queue?: any[];
    };
    _fbq?: any;
  }
}

// Initialize Facebook Pixel
export const initFacebookPixel = () => {
  if (typeof window === 'undefined') return;

  // Prevent duplicate initialization
  if (window.fbq) return;

  const fbq = function (this: any, ...args: any[]) {
    if ((fbq as any).callMethod) {
      (fbq as any).callMethod.apply(fbq, args);
    } else {
      (fbq as any).queue.push(args);
    }
  } as any;

  window.fbq = fbq;
  window._fbq = fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];

  // Load the Facebook Pixel script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';

  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  }

  // Initialize with Pixel ID
  if (window.fbq) {
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
  }
};

// Hook to track events
export const useFacebookPixel = () => {
  useEffect(() => {
    initFacebookPixel();
  }, []);

  const trackEvent = (eventName: string, data?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, data);
    }
  };

  const trackPageView = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  };

  const trackLead = (data?: Record<string, any>) => {
    trackEvent('Lead', data);
  };

  const trackPurchase = (value: number, currency: string = 'BRL') => {
    trackEvent('Purchase', { value, currency });
  };

  const trackViewContent = (contentId: string, contentName: string) => {
    trackEvent('ViewContent', { content_id: contentId, content_name: contentName });
  };

  const trackInitiateCheckout = (value: number, currency: string = 'BRL') => {
    trackEvent('InitiateCheckout', { value, currency });
  };

  return {
    trackEvent,
    trackPageView,
    trackLead,
    trackPurchase,
    trackViewContent,
    trackInitiateCheckout,
  };
};
