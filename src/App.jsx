import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Classes from './components/Classes.jsx';
import Schedule from './components/Schedule.jsx';
import Pricing from './components/Pricing.jsx';
import FreeEntry from './components/FreeEntry.jsx';
import Payment from './components/Payment.jsx';
import About from './components/About.jsx';
import Hours from './components/Hours.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

export const whatsappUrl = 'https://wa.me/972523369262';
export const instagramUrl = 'https://www.instagram.com/shape_up_by_linda';
export const phoneDisplay = '052-3369262';

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen overflow-hidden bg-white font-cairo text-ink">
      <Navbar />
      <main>
        <Hero />
        <Classes />
        <Schedule />
        <Pricing />
        <FreeEntry />
        <Payment />
        <About />
        <Hours />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
