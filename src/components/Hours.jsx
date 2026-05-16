import { motion } from 'framer-motion';

const hours = [
  { title: 'صباح', time: '09:00-13:00', text: 'ابدئي يومك بطاقة.' },
  { title: 'مساء', time: '16:00-21:00', text: 'تمرّني بعد يومك براحة.' },
];

export default function Hours() {
  return (
    <section className="section-padding relative overflow-hidden bg-ink text-white">
      <div className="absolute right-1/4 top-0 h-80 w-80 rounded-full bg-pink-radial opacity-70 blur-3xl" />
      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.35em] text-pink-light">ساعات الاستوديو</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">صباحاً ومساءً</h2>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {hours.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass-dark rounded-[2rem] p-7 text-center sm:p-8"
            >
              <h3 className="text-3xl font-black text-pink-light">{item.title}</h3>
              <p className="mt-4 text-5xl font-black">{item.time}</p>
              <p className="mt-4 text-lg leading-8 text-white/60">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-pink/30 bg-pink/10 p-6 text-center shadow-glow"
        >
          <p className="text-xl font-black">احجزي من الموقع واضمني مكانك.</p>
        </motion.div>
      </div>
    </section>
  );
}
