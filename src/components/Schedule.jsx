import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { scheduleRows as rows } from '../data/schedule.js';
import {
  IconBadge,
  IconCalendar,
  IconClock,
  IconCoach,
  IconMoon,
  IconSessions,
  IconSun,
  periodIcons,
  tabIcons,
} from './ScheduleIcons.jsx';

const tabs = [
  { id: 'all', label: 'الكل' },
  { id: 'morning', label: 'صباحي' },
  { id: 'evening', label: 'مسائي' },
];

const periodMeta = {
  morning: {
    label: 'الحصص الصباحية',
    accent: 'from-amber-500/15 to-orange-500/5',
    iconBg: 'bg-gradient-to-br from-amber-300/30 to-orange-500/15 text-amber-700',
  },
  evening: {
    label: 'الحصص المسائية',
    accent: 'from-pink/15 to-violet-500/5',
    iconBg: 'bg-gradient-to-br from-violet-400/20 to-pink/20 text-pink',
  },
  all: {
    label: 'حصة مرنة',
    accent: 'from-black/5 to-black/[0.02]',
    iconBg: 'bg-gradient-to-br from-black/10 to-black/5 text-black/60',
  },
};

function isHebrewText(value) {
  return /[\u0590-\u05FF]/.test(value);
}

function coachLabel(coach, compact = false) {
  if (compact && coach.includes('ليندا')) return 'ليندا وكوثر';
  return coach;
}

function dayBadgeStyle(day) {
  if (day === 'يومي') return 'border-pink/40 bg-pink/10 text-pink';
  if (day === 'بموعد') return 'border-black/15 bg-black/5 text-black/70';
  if (day === 'السبت') return 'border-ink/20 bg-ink/5 text-ink';
  return 'border-black/10 bg-white text-black/75';
}

function PeriodChip({ period }) {
  if (period === 'all') return null;

  const Icon = period === 'morning' ? IconSun : IconMoon;
  const label = period === 'morning' ? 'صباحي' : 'مسائي';
  const tone =
    period === 'morning'
      ? 'bg-amber-50 text-amber-800/80'
      : 'bg-pink/10 text-pink';

  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.65rem] font-black ${tone}`}>
      <Icon className="h-3 w-3" />
      {label}
    </span>
  );
}

function ScheduleCard({ row, compactCoach = false }) {
  const hebrew = isHebrewText(row.className);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-[1.35rem] border border-black/[0.06] bg-white shadow-[0_12px_40px_rgba(13,13,13,0.06)]"
    >
      <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-pink via-pink/70 to-pink/30" aria-hidden="true" />

      <div className="flex items-stretch gap-0">
        <div className="flex min-w-[4.75rem] flex-col items-center justify-center gap-1 border-l border-black/[0.05] bg-ink px-3 py-4 text-white">
          <IconClock className="text-white/45" />
          <span className="text-lg font-black leading-none tabular-nums">{row.time}</span>
        </div>

        <div className="min-w-0 flex-1 p-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full border px-2.5 py-1 text-[0.7rem] font-black ${dayBadgeStyle(row.day)}`}>
              {row.day}
            </span>
            <PeriodChip period={row.period} />
          </div>

          <h3 className={`mt-2.5 text-lg font-black leading-snug text-ink sm:text-xl ${hebrew ? 'font-heebo' : ''}`}>
            {row.className}
          </h3>

          <div className="mt-3 flex items-center gap-2.5 rounded-xl bg-soft px-3 py-2.5">
            <IconBadge className="bg-pink/10 text-pink">
              <IconCoach />
            </IconBadge>
            <div className="min-w-0">
              <p className="text-[0.65rem] font-black text-black/40">المدربة</p>
              <p className="truncate text-sm font-black text-black/80">{coachLabel(row.coach, compactCoach)}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function MobileSchedule({ filteredRows, active }) {
  const grouped = useMemo(() => {
    if (active !== 'all') {
      return [{ key: active, rows: filteredRows }];
    }

    const morning = filteredRows.filter((r) => r.period === 'morning');
    const evening = filteredRows.filter((r) => r.period === 'evening');
    const flexible = filteredRows.filter((r) => r.period === 'all');

    return [
      { key: 'morning', rows: morning },
      { key: 'evening', rows: evening },
      { key: 'all', rows: flexible },
    ].filter((group) => group.rows.length > 0);
  }, [active, filteredRows]);

  if (filteredRows.length === 0) {
    return (
      <div className="rounded-[1.5rem] border border-dashed border-black/15 bg-white px-6 py-12 text-center">
        <IconBadge className="mx-auto bg-soft text-black/40">
          <IconCalendar className="h-5 w-5" />
        </IconBadge>
        <p className="mt-4 text-lg font-black">لا توجد حصص في هذا الفلتر</p>
        <p className="mt-1 text-sm font-bold text-black/50">جرّبي «الكل» لعرض الجدول الكامل</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 md:hidden">
      {grouped.map((group) => {
        const meta = periodMeta[group.key] ?? periodMeta.all;
        const PeriodIcon = periodIcons[group.key] ?? IconCalendar;

        return (
          <div key={group.key}>
            {active === 'all' && (
              <div
                className={`mb-3 flex items-center justify-between rounded-2xl bg-gradient-to-l ${meta.accent} px-4 py-3`}
              >
                <div className="flex items-center gap-2.5">
                  <IconBadge className={meta.iconBg}>
                    <PeriodIcon className="h-4 w-4" />
                  </IconBadge>
                  <p className="text-sm font-black text-ink">{meta.label}</p>
                </div>
                <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-black text-pink">
                  {group.rows.length} حصص
                </span>
              </div>
            )}

            <AnimatePresence mode="popLayout">
              <div className="space-y-3">
                {group.rows.map((row) => (
                  <ScheduleCard
                    key={`${row.day}-${row.className}-${row.time}-mobile`}
                    row={row}
                    compactCoach
                  />
                ))}
              </div>
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function DesktopPeriodCell({ period }) {
  if (period === 'morning') {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-800/75">
        <IconSun className="h-4 w-4" />
        صباحي
      </span>
    );
  }
  if (period === 'evening') {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-pink">
        <IconMoon className="h-4 w-4" />
        مسائي
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-black/55">
      <IconCalendar className="h-4 w-4" />
      مرن
    </span>
  );
}

function DesktopSchedule({ filteredRows }) {
  return (
    <div className="hidden overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white shadow-[0_24px_70px_rgba(13,13,13,0.08)] md:block">
      <table className="w-full text-right">
        <thead>
          <tr className="bg-ink text-white">
            <th className="px-6 py-4 text-sm font-black">اليوم</th>
            <th className="px-6 py-4 text-sm font-black">الحصة</th>
            <th className="px-6 py-4 text-sm font-black">الوقت</th>
            <th className="px-6 py-4 text-sm font-black">الفترة</th>
            <th className="px-6 py-4 text-sm font-black">المدربة</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence mode="popLayout">
            {filteredRows.map((row, index) => (
              <motion.tr
                key={`${row.day}-${row.className}-${row.time}-desktop`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`border-b border-black/[0.05] transition hover:bg-pink/[0.06] ${
                  index % 2 === 0 ? 'bg-white' : 'bg-soft/50'
                }`}
              >
                <td className="px-6 py-4">
                  <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-black ${dayBadgeStyle(row.day)}`}>
                    {row.day}
                  </span>
                </td>
                <td className={`px-6 py-4 text-base font-black ${isHebrewText(row.className) ? 'font-heebo' : ''}`}>
                  {row.className}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex min-w-[4.5rem] items-center justify-center gap-1.5 rounded-xl bg-ink px-4 py-2 text-sm font-black tabular-nums text-white">
                    <IconClock className="text-white/50" />
                    {row.time}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <DesktopPeriodCell period={row.period} />
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-2 text-sm font-black text-black/70">
                    <IconBadge className="h-8 w-8 bg-pink/10 text-pink">
                      <IconCoach className="h-3.5 w-3.5" />
                    </IconBadge>
                    {row.coach}
                  </span>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
}

function StatBox({ value, label, icon: Icon, highlight = false }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur">
      <IconBadge className={`h-10 w-10 ${highlight ? 'bg-pink/20 text-pink-light' : 'bg-white/10 text-white/80'}`}>
        <Icon className="h-4 w-4" />
      </IconBadge>
      <div>
        <p className={`text-2xl font-black leading-none ${highlight ? 'text-pink-light' : 'text-white'}`}>{value}</p>
        <p className="mt-0.5 text-xs font-black text-white/50">{label}</p>
      </div>
    </div>
  );
}

export default function Schedule() {
  const [active, setActive] = useState('all');

  const filteredRows = useMemo(
    () => rows.filter((row) => active === 'all' || row.period === active || row.period === 'all'),
    [active],
  );

  const stats = useMemo(
    () => ({
      total: filteredRows.length,
      morning: filteredRows.filter((r) => r.period === 'morning').length,
      evening: filteredRows.filter((r) => r.period === 'evening').length,
    }),
    [filteredRows],
  );

  return (
    <section id="schedule" className="relative overflow-hidden bg-soft py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-pink-radial opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-pink/10 blur-3xl" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.25rem] bg-ink p-6 text-white shadow-2xl sm:p-8"
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-pink-radial blur-3xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-pink-light">الجدول الأسبوعي</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-[2.6rem]">
                وقت مناسب.
                <span className="text-pink-light"> تمرين أقوى.</span>
              </h2>
              <p className="mt-3 text-base font-bold leading-7 text-white/60">
                اختاري الفترة وشوفي الحصة، الوقت، والمدربة بوضوح.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:justify-items-end">
              <StatBox value={stats.total} label="حصة" icon={IconSessions} highlight />
              <StatBox value={stats.morning} label="صباحي" icon={IconSun} />
              <StatBox value={stats.evening} label="مسائي" icon={IconMoon} />
            </div>
          </div>
        </motion.div>

        <div className="sticky top-[4.5rem] z-20 -mx-1 mt-5 px-1 pb-2 pt-1 backdrop-blur-md md:static md:mx-0 md:mt-6 md:p-0 md:backdrop-blur-none">
          <div
            className="grid grid-cols-3 gap-2 rounded-[1.25rem] border border-black/[0.06] bg-white p-1.5 shadow-[0_12px_40px_rgba(13,13,13,0.07)] sm:gap-2.5 sm:rounded-full sm:p-2"
            role="tablist"
            aria-label="فلترة الجدول"
          >
            {tabs.map((tab) => {
              const TabIcon = tabIcons[tab.id];
              const isActive = active === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActive(tab.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-black transition sm:rounded-full sm:px-6 sm:py-2.5 ${
                    isActive ? 'bg-pink text-white shadow-glow' : 'text-black/55 hover:bg-soft hover:text-pink'
                  }`}
                >
                  <TabIcon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-pink/70'}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-4 md:mt-6"
        >
          <MobileSchedule filteredRows={filteredRows} active={active} />
          <DesktopSchedule filteredRows={filteredRows} />
        </motion.div>
      </div>
    </section>
  );
}
