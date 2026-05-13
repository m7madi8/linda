import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { whatsappUrl } from '../App.jsx';
import logoWhite from '../../logo-white.png';

export default function CTA() {
  return (
    <section className="bg-pink py-20 text-white sm:py-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <img src={logoWhite} alt="Shape Up by Linda" className="mx-auto mb-7 h-24 w-auto object-contain sm:h-28" />
          <h2 className="text-4xl font-black sm:text-6xl">جاهزة للتغيير؟ 💪</h2>
          <p className="mt-5 text-xl font-bold text-white/80">رسالة واحدة وتبدئين.</p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="pricing"
              smooth
              duration={650}
              offset={-80}
              className="cursor-pointer rounded-full bg-white px-8 py-4 text-center font-black text-pink transition hover:-translate-y-1 hover:bg-ink hover:text-white"
            >
              اختاري خطّتك
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="تواصلي عبر واتساب"
              className="rounded-full border border-white/60 px-8 py-4 text-center font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-pink"
            >
              واتساب الآن
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
