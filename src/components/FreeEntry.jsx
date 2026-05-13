import { motion } from 'framer-motion';
import { whatsappUrl } from '../App.jsx';

const entries = [
  { title: 'כניסה בודדת', price: '₪30', detail: 'single' },
  { title: 'חודשי חופשי', price: '₪250', detail: 'monthly' },
  { title: 'שלושה חודשים', price: '₪690', detail: 'three months' },
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
          <p className="text-sm font-black uppercase tracking-[0.35em] text-pink-light">כניסה חופשית</p>
          <h2 className="mt-4 font-heebo text-4xl font-black sm:text-5xl">כניסה חופשית — دخول حر</h2>
          <p className="mt-5 text-lg leading-8 text-white/60">مرونة كاملة بدون التزام أسبوعي.</p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {entries.map((entry, index) => (
            <motion.a
              key={entry.title}
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`سؤال عن ${entry.title}`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-dark flex h-full flex-col rounded-[2rem] p-7 transition hover:border-pink hover:shadow-glow sm:p-8"
            >
              <h3 className="font-heebo text-2xl font-black">{entry.title}</h3>
              <p className="mt-6 text-5xl font-black text-pink-light">{entry.price}</p>
              <p className="mt-auto pt-4 text-lg font-bold text-white/60">{entry.detail}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
