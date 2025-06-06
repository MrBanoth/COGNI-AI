'use client';
import { useEffect } from 'react';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import JOS from 'jos-animation';
import 'swiper/css';
import 'swiper/css/navigation';
import '@/styles/globals.css';
import '@/styles/vendors/menu.css';

const DMSans = localFont({
  src: '../fonts/DMSans-Bold.woff2',
  variable: '--font-DMSans',
});

const ClashDisplay = localFont({
  src: '../fonts/ClashDisplay-Medium.woff2',
  variable: '--font-clash-display',
});

const Raleway = localFont({
  src: '../fonts/Raleway-Bold.woff2',
  variable: '--font-raleway',
});

const SpaceGrotesk = localFont({
  src: '../fonts/SpaceGrotesk-Bold.woff2',
  variable: '--font-space-grotesk',
});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }) {
  useEffect(() => {
    // Initialize JOS animations
    const jos_options = {
      passive: false,
      once: true,
      animation: 'fade-up',
      timingFunction: 'ease',
      threshold: 0,
      delay: 0.5,
      duration: 0.7,
      scrollDirection: 'down',
      rootMargin: '0% 0% 15% 0%',
    };

    JOS.init(jos_options);
    
    // Refresh JOS on route changes
    const handleRouteChange = () => {
      JOS.refresh();
    };

    window.addEventListener('routeChangeComplete', handleRouteChange);
    
    return () => {
      window.removeEventListener('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <html lang='en'>
      <body className={`${DMSans.variable} ${ClashDisplay.variable} ${Raleway.variable} ${SpaceGrotesk.variable} ${inter.variable} relative`}>
        {children}
      </body>
    </html>
  );
}
