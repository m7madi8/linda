import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { whatsappUrl } from '../App.jsx';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

function CountStat({ value, suffix = '', prefix = '', decimals = 0, label }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${prefix}${latest.toFixed(decimals)}${suffix}`);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.8, ease: 'easeOut' });
    const unsubscribe = rounded.on('change', setDisplay);
    return () => {
      unsubscribe();
      controls.stop();
    };
  }, [count, rounded, value]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 text-center backdrop-blur sm:p-5">
      <div className="text-3xl font-black text-white sm:text-4xl">{display}</div>
      <div className="mt-1 text-sm font-semibold text-white/60">{label}</div>
    </div>
  );
}

export default function Hero() {
  const schedule = [
    ['اليوم', 'الحصة', 'الوقت'],
    ['الأحد', 'ישבן ובטן', '18:00'],
    ['الإثنين', 'Tabata', '18:00'],
    ['الخميس', 'HIIT', '18:00'],
  ];

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-ink pt-28 text-white">
      <div className="absolute -right-32 top-24 h-80 w-80 rounded-full bg-pink-radial blur-3xl" />
      <div className="absolute -left-28 bottom-16 h-96 w-96 rounded-full bg-pink-radial opacity-70 blur-3xl" />
      <div className="absolute left-1/3 top-1/2 h-56 w-56 rounded-full bg-pink/20 blur-[90px]" />

      <div className="container-page relative grid min-h-[calc(100vh-7rem)] items-center gap-10 pb-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14 lg:pb-20">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white/80 backdrop-blur-xl"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-pink" />
            </span>
            استوديو لياقة نسائي متخصص
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            SCULPTURE
            <span className="block text-pink">YOUR BODY</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-xl text-lg leading-8 text-white/70 sm:text-xl">
            تدريب نسائي قوي مع ليندا غانم وكوثر غانم. شد، حرق، طاقة، ونتائج من أول حصة.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="احجزي مكانك عبر واتساب"
              className="rounded-full bg-pink px-8 py-4 text-center font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-pink-dark hover:shadow-glow-lg"
            >
            احجزي حصتك
            </a>
            <Link
              to="schedule"
              smooth
              duration={650}
              offset={-80}
              className="cursor-pointer rounded-full border border-white/40 px-8 py-4 text-center font-black text-white transition hover:-translate-y-1 hover:border-pink hover:bg-white/10"
            >
              شاهدي الجدول
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9 grid grid-cols-3 gap-3 sm:gap-5">
            <CountStat value={10} prefix="+" label="سنوات خبرة" />
            <CountStat value={4} prefix="+" suffix="K" label="متدربة" />
            <CountStat value={5} prefix="★" decimals={1} label="تقييم" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 90 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.35 }}
          className="relative"
        >
          <div className="glass-dark relative overflow-hidden rounded-[2rem] p-5 sm:p-8">
            <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-pink/30 blur-3xl" />
            <div className="relative">
              <div className="mb-7 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-pink-light">جدول هذا الأسبوع</p>
                  <h2 className="mt-1 text-2xl font-black">حصص قوية. أجواء حماسية.</h2>
                </div>
                <span className="rounded-full bg-pink px-4 py-2 text-sm font-black">LIVE</span>
              </div>

              <div className="space-y-3">
                {schedule.map((row, index) => (
                  <div
                    key={row.join('-')}
                    className={`grid grid-cols-3 gap-3 rounded-2xl px-4 py-4 text-sm ${
                      index === 0 ? 'bg-white text-ink' : 'bg-white/10 text-white/80'
                    }`}
                  >
                    {row.map((cell) => (
                      <span key={cell} className={index === 0 ? 'font-black' : 'font-bold'}>
                        {cell}
                      </span>
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-pink/30 bg-pink/10 p-5 text-center">
                <p className="text-lg font-black text-white">سجلي الآن وابدئي أول حصة</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
