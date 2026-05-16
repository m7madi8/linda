import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const classes = [
  {
    title: 'אירובי דאנס',
    icon: '💃',
    accent: 'ריקוד אירובי',
    description: 'رقص إيروبي حماسي لحرق السعرات وتحسين اللياقة والمرونة.',
    hebrew: true,
  },
  {
    title: 'Tabata',
    icon: '💥',
    accent: 'حرق عالي',
    description: 'جولات قصيرة مكثفة لرفع معدل الحرق وتحدي التحمل.',
  },
  {
    title: 'HIIT',
    icon: '🚀',
    accent: 'قوة وسرعة',
    description: 'تدريب متقطع عالي الشدة يجمع بين القوة والكارديو.',
  },
  {
    title: 'Strong Station',
    icon: '🏋🏻‍♀️',
    accent: 'محطات مقاومة',
    description: 'محطات متنوعة لبناء القوة وشد العضلات بوتيرة جماعية.',
  },
  {
    title: 'עיצוב דינאמי',
    icon: '✨',
    accent: 'עיצוב וחיטוב',
    description: 'تمارين ديناميكية لنحت الجسم وتحسين الثبات والتحكم.',
    hebrew: true,
  },
  {
    title: 'ישבן ובטן',
    icon: '🎯',
    accent: 'בטן וישבן',
    description: 'تركيز على منطقة البطن والأرداف لنتائج واضحة ومتناسقة.',
    hebrew: true,
  },
  {
    title: 'تدريب زوجي',
    icon: '🤝',
    accent: 'متابعة شخصية',
    description: 'حصة خاصة لك ولصديقتك مع متابعة أدق وخطة مخصصة.',
  },
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
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">شو نوع التمرين؟</h2>
            <p className="mt-4 text-lg font-bold leading-8 text-white/65">
              هنا تعرفي ماذا تتوقعي من كل حصة. الأيام والأوقات في الجدول الأسبوعي بالأسفل.
            </p>
          </div>
          <div className="relative mt-6 grid grid-cols-3 gap-3 text-center lg:mt-0 lg:min-w-72">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-3xl font-black text-pink-light">7</p>
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
              <p className="mt-4 text-sm font-bold leading-7 text-black/65">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-center"
        >
          <Link
            to="schedule"
            smooth
            duration={650}
            offset={-80}
            className="inline-flex cursor-pointer items-center justify-center rounded-full border-2 border-pink bg-pink/5 px-8 py-3.5 text-sm font-black text-pink transition hover:bg-pink hover:text-white"
          >
            شاهدي الجدول الأسبوعي — الأيام والأوقات
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
