import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Loader from './components/Loader.jsx';
import Hero from './components/Hero.jsx';
import TrainersIntro from './components/TrainersIntro.jsx';
import Classes from './components/Classes.jsx';
import Schedule from './components/Schedule.jsx';
import Pricing from './components/Pricing.jsx';
import FreeEntry from './components/FreeEntry.jsx';
import Payment from './components/Payment.jsx';
import Hours from './components/Hours.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

export const whatsappUrl = 'https://wa.me/972523369262';
export const instagramUrl = 'https://www.instagram.com/shape_up_by_linda';
export const phoneDisplay = '052-3369262';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timeout = window.setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 1800);

    return () => {
      window.clearTimeout(timeout);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div dir="rtl" className="min-h-screen overflow-hidden bg-white font-cairo text-ink">
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <TrainersIntro />
        <Classes />
        <Schedule />
        <Pricing />
        <FreeEntry />
        <Payment />
        <Hours />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
