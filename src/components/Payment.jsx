import { motion } from 'framer-motion';

const methods = [
  { label: 'כאש', icon: '💵' },
  { label: 'بطاقة', icon: '💳' },
  { label: 'تحويل بنكي', icon: '🏦' },
  { label: 'Bit', icon: '📱' },
  { label: 'הוראת קבע', icon: '🔄' },
];

export default function Payment() {
  return (
    <section className="section-padding bg-soft">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.35em] text-pink">طرق الدفع</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">دفع سهل وسريع</h2>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {methods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -8 }}
              className="rounded-[1.75rem] border border-black/5 bg-white p-5 text-center shadow-xl transition hover:border-pink hover:shadow-glow sm:p-6"
            >
              <div className="text-4xl leading-none">{method.icon}</div>
              <h3 className="mt-4 text-lg font-black">{method.label}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-pink/20 bg-pink/10 p-6 text-center"
        >
          <p className="font-heebo text-lg font-black text-ink">הוראת קבע = no credit block needed</p>
        </motion.div>
      </div>
    </section>
  );
}
