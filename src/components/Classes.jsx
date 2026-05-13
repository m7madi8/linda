import { motion } from 'framer-motion';

const classes = [
  { title: 'Tabata', icon: '💥', schedule: 'Mon/Wed 18:00', days: ['الإثنين', 'الأربعاء'], accent: 'حرق عالي' },
  { title: 'HIIT', icon: '🚀', schedule: 'Thu 18:00, Sat 10:00', days: ['الخميس', 'السبت'], accent: 'قوة وسرعة' },
  {
    title: 'Strong Station',
    icon: '🏋🏻‍♀️',
    schedule: 'Daily 19:00 + Morning 10:00',
    days: ['يومي', 'صباحي'],
    accent: 'محطات مقاومة',
  },
  {
    title: 'עיצוב דינאמי',
    icon: '✨',
    schedule: 'Tue 18:00',
    days: ['שלישי', 'مسائي'],
    accent: 'עיצוב וחיטוב',
    hebrew: true,
  },
  {
    title: 'ישבן ובטן',
    icon: '🎯',
    schedule: 'Sun 18:00',
    days: ['ראשון', 'مسائي'],
    accent: 'בטן וישבן',
    hebrew: true,
  },
  { title: 'تدريب زوجي', icon: '🤝', schedule: 'by appointment', days: ['بموعد مسبق'], accent: 'متابعة شخصية' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Classes() {
  return (
    <section id="classes" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.25rem] bg-ink p-6 text-white shadow-2xl sm:p-8 lg:flex lg:items-end lg:justify-between lg:gap-10"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink-radial blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-pink-light">تمارين الاستوديو</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">تمارين تشد، تحرق، وتقوّي</h2>
            <p className="mt-4 text-lg font-bold leading-8 text-white/65">6 حصص متنوعة. هدف واضح. طاقة أعلى وجسم أقوى.</p>
          </div>
          <div className="relative mt-6 grid grid-cols-3 gap-3 text-center lg:mt-0 lg:min-w-72">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-3xl font-black text-pink-light">6</p>
              <p className="text-xs font-black text-white/55">أنواع</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-3xl font-black text-pink-light">AM</p>
              <p className="text-xs font-black text-white/55">صباحي</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-3xl font-black text-pink-light">PM</p>
              <p className="text-xs font-black text-white/55">مسائي</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {classes.map((item, index) => (
            <motion.article
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/10 bg-soft p-5 shadow-[0_18px_45px_rgba(13,13,13,0.07)] transition hover:border-pink hover:bg-white hover:shadow-glow"
            >
              <span className="absolute left-5 top-4 text-5xl font-black leading-none text-black/[0.04]">0{index + 1}</span>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-pink/10 text-2xl">
                    {item.icon}
                  </span>
                  <h3 className={`text-xl font-black ${item.hebrew ? 'font-heebo' : ''}`}>{item.title}</h3>
                </div>
                <span className="relative rounded-full bg-ink px-3 py-1.5 text-xs font-black text-white group-hover:bg-pink">
                  {item.accent}
                </span>
              </div>
              <p className="mt-4 text-base font-extrabold text-pink">{item.schedule}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {item.days.map((day) => (
                  <span key={day} className="rounded-full bg-white px-3.5 py-1.5 text-xs font-black text-black/60 shadow-sm">
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
