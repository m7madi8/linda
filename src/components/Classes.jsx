import { motion } from 'framer-motion';

const classes = [
  { title: 'Tabata', icon: '🔥', schedule: 'Mon/Wed 18:00', days: ['الإثنين', 'الأربعاء'], accent: 'حرق عالي' },
  { title: 'HIIT', icon: '⚡', schedule: 'Thu 18:00, Sat 10:00', days: ['الخميس', 'السبت'], accent: 'قوة وسرعة' },
  {
    title: 'Strong Station',
    icon: '🏋️',
    schedule: 'Daily 19:00 + Morning 10:00',
    days: ['يومي', 'صباحي'],
    accent: 'محطات مقاومة',
  },
  {
    title: 'עיצוב דינאמי',
    icon: '💃',
    schedule: 'Tue 18:00',
    days: ['שלישי', 'مسائي'],
    accent: 'עיצוב וחיטוב',
    hebrew: true,
  },
  {
    title: 'ישבן ובטן',
    icon: '🍑',
    schedule: 'Sun 18:00',
    days: ['ראשון', 'مسائي'],
    accent: 'בטן וישבן',
    hebrew: true,
  },
  { title: 'تدريب زوجي', icon: '👫', schedule: 'by appointment', days: ['بموعد مسبق'], accent: 'متابعة شخصية' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Classes() {
  return (
    <section id="classes" className="section-padding bg-white">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.35em] text-pink">تمارين الاستوديو</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">تمارين تشد، تحرق، وتقوّي</h2>
          <p className="mt-5 text-lg leading-8 text-black/60">كل حصة لها هدف واضح: طاقة أعلى وجسم أقوى.</p>
        </motion.div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {classes.map((item) => (
            <motion.article
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group flex h-full flex-col rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_20px_55px_rgba(13,13,13,0.08)] transition hover:border-pink hover:shadow-glow sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-pink/10 text-3xl">
                    {item.icon}
                  </span>
                  <h3 className={`text-2xl font-black ${item.hebrew ? 'font-heebo' : ''}`}>{item.title}</h3>
                </div>
                <span className="rounded-full bg-black px-4 py-2 text-xs font-black text-white group-hover:bg-pink">
                  {item.accent}
                </span>
              </div>
              <p className="mt-5 text-lg font-extrabold text-pink">{item.schedule}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {item.days.map((day) => (
                  <span key={day} className="rounded-full bg-black/5 px-4 py-2 text-sm font-bold text-black/60">
                    {day}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
