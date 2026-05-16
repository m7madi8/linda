import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import BookLink from './BookLink.jsx';
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
          <p className="mt-5 text-xl font-bold text-white/80">احجزي أونلاين من الموقع — بخطوات بسيطة.</p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <BookLink className="rounded-full bg-white px-8 py-4 text-center font-black text-pink transition hover:-translate-y-1 hover:bg-ink hover:text-white">
              احجزي الآن
            </BookLink>
            <Link
              to="pricing"
              smooth
              duration={650}
              offset={-80}
              className="cursor-pointer rounded-full border border-white/60 px-8 py-4 text-center font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-pink"
            >
              اختاري خطّتك
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
