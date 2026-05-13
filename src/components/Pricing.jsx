import { motion } from 'framer-motion';
import { whatsappUrl } from '../App.jsx';

const plans = [
  { name: '1x/week', monthly: '₪200/mo', term: '3mo: ₪600', featured: false },
  { name: '2x/week', monthly: '₪400/mo', term: '3mo: ₪900 = ₪300/mo', featured: false },
  { name: '3x/week', monthly: '₪500/mo', term: '3mo: ₪1200', featured: true },
  { name: '4x/week', monthly: '₪600/mo', term: '3mo: ₪1500', featured: false },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.35em] text-pink">الأسعار</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">خطط واضحة. نتائج أقوى.</h2>
          <p className="mt-5 text-lg leading-8 text-black/60">اختاري عدد الحصص المناسب لهدفك والتزمي بالتغيير.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative flex h-full flex-col rounded-[2rem] border p-6 shadow-[0_20px_55px_rgba(13,13,13,0.08)] transition sm:p-7 ${
                plan.featured ? 'border-pink bg-pink/5 shadow-glow' : 'border-black/10 bg-white hover:border-pink'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-4 right-7 rounded-full bg-pink px-5 py-2 text-sm font-black text-white shadow-glow">
                  الأكثر شعبية 🔥
                </span>
              )}
              <h3 className="text-2xl font-black">{plan.name}</h3>
              <p className="mt-7 text-4xl font-black text-pink">{plan.monthly}</p>
              <p className="mt-3 min-h-8 text-base font-bold text-black/60">{plan.term}</p>
              <ul className="mt-7 space-y-3 text-sm font-bold text-black/60">
                <li>مجموعة نسائية داعمة</li>
                <li>قوة، حرق، ولياقة</li>
                <li>تسجيل سريع</li>
              </ul>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`اختيار خطة ${plan.name}`}
                className={`mt-auto block rounded-full px-6 py-4 text-center font-black transition ${
                  plan.featured
                    ? 'bg-pink text-white hover:bg-pink-dark'
                    : 'bg-ink text-white hover:bg-pink hover:shadow-glow'
                }`}
              >
                ابدئي الآن
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
