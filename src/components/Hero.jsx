import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import BookLink from './BookLink.jsx';

const highlights = [
  { id: 'morning', title: 'صباحي', text: 'Strong Station يومياً', detail: '10:00', Icon: IconMorning },
  { id: 'evening', title: 'مسائي', text: 'حصص متنوعة من 18:00', detail: '+ Strong 19:00', Icon: IconEvening },
  { id: 'women', title: 'نسائي', text: 'مجموعات نسائية حصرية', detail: 'مدربات محترفات', Icon: IconWomen },
];

function IconMorning() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path
        d="M12 5a5 5 0 00-5 5h10a5 5 0 00-5-5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M12 3V2M7 5.5 6 4.5M17 5.5 18 4.5M5 8H3M21 8h-2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconEvening() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M20 14.5A7.5 7.5 0 0110.5 5 6 6 0 0014.5 20 7.5 7.5 0 0020 14.5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M18 4l1 1M20 8h1M18 12l1-1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconWomen() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M16 6l2-2M18 10h2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 8h14M7 2v3M13 2v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M7 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StudioCard() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/[0.14] via-white/[0.08] to-white/[0.03] p-5 shadow-[0_32px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-7">
      <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-pink/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-10 h-40 w-40 rounded-full bg-pink/20 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-pink/30 bg-pink/10 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-light" />
              <span className="text-[0.65rem] font-black uppercase tracking-[0.28em] text-pink-light">Shape Up Studio</span>
            </div>
            <h2 className="text-2xl font-black leading-tight text-white sm:text-[1.65rem]">تدريب يناسب جدولك</h2>
            <p className="mt-2 text-sm font-bold leading-6 text-white/55">صباحاً أو مساءً — اختاري الوقت المناسب لكِ</p>
          </div>

          <div className="flex shrink-0 flex-col items-end gap-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-wider text-white shadow-glow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80 opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-white" />
              </span>
              Live
            </span>
            <span className="text-[0.65rem] font-bold text-white/40">مفتوح للحجز</span>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 + index * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-pink/30 hover:bg-white/[0.09]"
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-[0.6rem] font-black text-white/25">0{index + 1}</span>
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-pink/15 text-pink-light">
                  <item.Icon />
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs font-black uppercase tracking-wider text-white/50">{item.title}</p>
                <p className="mt-0.5 text-sm font-black text-white">{item.text}</p>
                <p className="mt-1 inline-flex rounded-lg border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs font-black tabular-nums text-white/70">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
            to="schedule"
            smooth
            duration={650}
            offset={-80}
            className="group mt-6 flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-sm font-black text-white transition hover:border-pink/30 hover:bg-white/[0.09]"
        >
            <span className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-pink/15 text-pink-light transition group-hover:bg-pink group-hover:text-white">
                <IconCalendar />
              </span>
              <span className="text-right leading-snug">
                الجدول الأسبوعي
                <span className="mt-0.5 block text-xs font-bold text-white/45">أيام · أوقات · مدربات</span>
              </span>
            </span>
            <span className="text-white/50 transition group-hover:translate-x-[-3px] group-hover:text-pink-light">
              <IconArrow />
            </span>
        </Link>
      </div>
    </div>
  );
}

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
            <BookLink
              aria-label="احجزي من الموقع"
              className="rounded-full bg-pink px-8 py-4 text-center font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-pink-dark hover:shadow-glow-lg"
            >
              احجزي حصتك
            </BookLink>
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
          <StudioCard />
        </motion.div>
      </div>
    </section>
  );
}
