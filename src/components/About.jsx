import { motion } from 'framer-motion';

const certifications = ['ניהול מערכות ספורט', 'מדריכת חדר כושר', 'קורס פיטנס', 'קורס וים לטפנג'];
const trainers = [
  {
    initials: 'ل',
    name: 'ليندا غانم',
    role: 'Personal Coach',
    description: 'مدربة شخصية بخبرة +10 سنوات',
    items: certifications,
  },
  {
    initials: 'ك',
    name: 'كوثر غانم',
    role: 'Studio Coach',
    description: 'مدربة في Shape Up by Linda',
    items: ['حصص جماعية بطاقة عالية', 'متابعة تقنية أثناء التمرين', 'دعم وتحفيز داخل الاستوديو'],
  },
];
const features = [
  { title: 'خبرة حقيقية', text: 'تدريب واضح ومتابعة قريبة.' },
  { title: 'نساء فقط', text: 'راحة، خصوصية، وطاقة داعمة.' },
  { title: 'حصص متنوعة', text: 'قوة، حرق، شد، ومحطات.' },
  { title: 'نتائج واقعية', text: 'التزام بسيط يغيّر جسمك.' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[2.25rem] bg-ink p-6 text-white shadow-2xl sm:p-8"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink-radial blur-3xl" />
            <div className="relative grid gap-5">
              {trainers.map((trainer) => (
                <article key={trainer.name} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-4 backdrop-blur-xl sm:p-5">
                  <div className="flex items-start gap-4">
                    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-pink text-xl font-black shadow-glow">
                      {trainer.initials}
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.26em] text-pink-light">{trainer.role}</p>
                      <h2 className="mt-2 text-3xl font-black">{trainer.name}</h2>
                      <p className="mt-1 text-base font-bold text-white/70">{trainer.description}</p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2">
                    {trainer.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-bold"
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-pink-light" />
                        <span className={trainer.items === certifications ? 'font-heebo' : ''}>{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.35em] text-pink">عن الفريق</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              ليندا غانم وكوثر غانم: قوة، تقنية، وثقة
            </h2>
            <p className="mt-6 text-lg leading-9 text-black/60">
              فريق نسائي يقودك لتمرين أقوى، حركة أدق، ونتيجة تشعرين بها. بدون تعقيد. بدون أعذار.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-3xl border border-black/10 bg-soft p-5">
                  <h3 className="text-lg font-black">{feature.title}</h3>
                  <p className="mt-2 leading-7 text-black/60">{feature.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
