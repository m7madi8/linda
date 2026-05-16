import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const steps = [
  { num: '01', title: 'اختاري الخطة', text: 'اشتراك أو برنامج معيّن' },
  { num: '02', title: 'اختاري الحصة', text: 'من الجدول الأسبوعي' },
  { num: '03', title: 'أرسلي الطلب', text: 'يصلنا مباشرة للاستوديو' },
];

export default function Booking() {
  return (
    <section id="booking" className="section-padding relative overflow-hidden bg-soft">
      <motion.div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-pink-radial opacity-50 blur-3xl" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.35em] text-pink">طلب الحجز أونلاين</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">قدّمي طلبك من الموقع</h2>
          <p className="mt-4 text-lg font-bold leading-8 text-black/60">
            اختاري البرنامج أو الحصة وأرسلي طلبك — نستقبله ونتواصل معك لتأكيد التفاصيل.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-black/[0.06] bg-white p-5 text-center shadow-[0_16px_40px_rgba(13,13,13,0.06)]"
            >
              <span className="text-3xl font-black text-pink/25">{step.num}</span>
              <h3 className="mt-2 text-lg font-black">{step.title}</h3>
              <p className="mt-1 text-sm font-bold text-black/50">{step.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Link
            to="pricing"
            smooth
            duration={650}
            offset={-80}
            className="w-full cursor-pointer rounded-full bg-pink px-8 py-4 text-center text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-pink-dark sm:w-auto"
          >
            قدّمي طلب الحجز
          </Link>
          <Link
            to="schedule"
            smooth
            duration={650}
            offset={-80}
            className="w-full cursor-pointer rounded-full border-2 border-ink/15 bg-white px-8 py-4 text-center text-sm font-black text-ink transition hover:border-pink hover:text-pink sm:w-auto"
          >
            شوفي الجدول
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
