import { motion } from 'framer-motion';
import { whatsappUrl } from '../App.jsx';

const entries = [
  { titleHe: 'כניסה בודדת', titleAr: 'دخول مرة واحدة', price: '₪30', detail: 'حصة واحدة / אימון אחד' },
  { titleHe: 'חודשי חופשי', titleAr: 'دخول حر شهري', price: '₪250', detail: 'شهر كامل / חודש חופשי' },
  { titleHe: 'שלושה חודשים', titleAr: 'دخول حر 3 أشهر', price: '₪690', detail: 'ثلاثة أشهر / שלושה חודשים' },
];

export default function FreeEntry() {
  return (
    <section className="section-padding relative overflow-hidden bg-ink text-white">
      <div className="absolute -right-20 top-12 h-72 w-72 rounded-full bg-pink-radial blur-3xl" />
      <div className="absolute -left-24 bottom-8 h-80 w-80 rounded-full bg-pink-radial opacity-60 blur-3xl" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-heebo text-sm font-black uppercase tracking-[0.35em] text-pink-light">כניסה חופשית</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            دخول حر <span className="font-heebo text-pink-light">— כניסה חופשית</span>
          </h2>
          <p className="mt-5 text-lg font-bold leading-8 text-white/60">مرونة كاملة بدون التزام أسبوعي / גמישות מלאה בלי התחייבות שבועית.</p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {entries.map((entry, index) => (
            <motion.a
              key={entry.titleHe}
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`سؤال عن ${entry.titleAr}`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-dark flex h-full flex-col rounded-[2rem] p-7 transition hover:border-pink hover:shadow-glow sm:p-8"
            >
              <p className="font-heebo text-lg font-black text-pink-light">{entry.titleHe}</p>
              <h3 className="mt-2 text-2xl font-black">{entry.titleAr}</h3>
              <p className="mt-6 text-5xl font-black text-pink-light">{entry.price}</p>
              <p className="mt-auto pt-4 text-base font-bold leading-7 text-white/60">{entry.detail}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
