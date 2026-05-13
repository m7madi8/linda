import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const tabs = [
  { id: 'all', label: 'الكل' },
  { id: 'morning', label: 'صباحي' },
  { id: 'evening', label: 'مسائي' },
];

const rows = [
  { day: 'الأحد', className: 'ישבן ובטן', time: '18:00', period: 'evening', coach: 'ليندا غانم / كوثر غانم' },
  { day: 'الإثنين', className: 'Tabata', time: '18:00', period: 'evening', coach: 'ليندا غانم / كوثر غانم' },
  { day: 'الثلاثاء', className: 'עיצוב דינאמי', time: '18:00', period: 'evening', coach: 'ليندا غانم / كوثر غانم' },
  { day: 'الأربعاء', className: 'Tabata', time: '18:00', period: 'evening', coach: 'ليندا غانم / كوثر غانم' },
  { day: 'الخميس', className: 'HIIT', time: '18:00', period: 'evening', coach: 'ليندا غانم / كوثر غانم' },
  { day: 'السبت', className: 'HIIT', time: '10:00', period: 'morning', coach: 'ليندا غانم / كوثر غانم' },
  { day: 'يومي', className: 'Strong Station', time: '10:00', period: 'morning', coach: 'ليندا غانم / كوثر غانم' },
  { day: 'يومي', className: 'Strong Station', time: '19:00', period: 'evening', coach: 'ليندا غانم / كوثر غانم' },
  { day: 'بموعد', className: 'تدريب زوجي', time: 'حسب التنسيق', period: 'all', coach: 'ليندا غانم / كوثر غانم' },
];

const periodLabels = {
  morning: 'صباحي',
  evening: 'مسائي',
  all: 'مرن',
};

export default function Schedule() {
  const [active, setActive] = useState('all');
  const filteredRows = useMemo(
    () => rows.filter((row) => active === 'all' || row.period === active || row.period === 'all'),
    [active],
  );

  return (
    <section id="schedule" className="bg-soft py-14 sm:py-16 lg:py-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-black/5 bg-white p-5 shadow-[0_20px_60px_rgba(13,13,13,0.08)] sm:p-6 lg:flex lg:items-center lg:justify-between lg:gap-8"
        >
          <div className="max-w-xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-pink">الجدول الأسبوعي</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">وقت مناسب. تمرين أقوى.</h2>
            <p className="mt-3 text-base font-bold leading-7 text-black/60">فلتر سريع للحصص الصباحية والمسائية.</p>
          </div>

          <div
            className="mt-5 grid w-full grid-cols-3 rounded-full bg-soft p-1.5 lg:mt-0 lg:w-auto"
            role="tablist"
            aria-label="فلترة الجدول"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                role="tab"
                aria-selected={active === tab.id}
                className={`rounded-full px-4 py-2.5 text-sm font-black transition sm:px-6 ${
                  active === tab.id ? 'bg-pink text-white shadow-glow' : 'text-black/60 hover:text-pink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="mt-6"
        >
          <div className="grid gap-3 sm:grid-cols-2 md:hidden">
            {filteredRows.map((row) => (
              <motion.article
                key={`${row.day}-${row.className}-${row.time}-mobile`}
                layout
                className="rounded-[1.5rem] border border-black/5 bg-white p-4 shadow-[0_16px_38px_rgba(13,13,13,0.07)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black text-pink">{row.day}</p>
                    <h3 className="mt-1 text-xl font-black">{row.className}</h3>
                  </div>
                  <span className="rounded-full bg-pink px-3 py-1.5 text-xs font-black text-white">{row.time}</span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-2xl bg-soft p-2.5">
                    <p className="text-xs font-black text-black/50">الفترة</p>
                    <p className="mt-0.5 text-sm font-black">{periodLabels[row.period]}</p>
                  </div>
                  <div className="rounded-2xl bg-soft p-2.5">
                    <p className="text-xs font-black text-black/50">المدربات</p>
                    <p className="mt-0.5 text-sm font-black">ليندا / كوثر</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="hidden overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(13,13,13,0.08)] md:block">
            <table className="w-full text-right">
              <thead className="bg-ink text-white">
                <tr>
                  <th className="px-5 py-4 text-sm font-black">اليوم</th>
                  <th className="px-5 py-4 text-sm font-black">الحصة</th>
                  <th className="px-5 py-4 text-sm font-black">الوقت</th>
                  <th className="px-5 py-4 text-sm font-black">المدربة</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row) => (
                  <motion.tr
                    key={`${row.day}-${row.className}-${row.time}-desktop`}
                    layout
                    className="border-b border-black/5 transition hover:bg-pink/10"
                  >
                    <td className="px-5 py-4 text-sm font-black">{row.day}</td>
                    <td className="px-5 py-4 text-sm font-bold">{row.className}</td>
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-pink px-3.5 py-1.5 text-xs font-black text-white">{row.time}</span>
                    </td>
                    <td className="px-5 py-4 text-sm font-bold text-black/60">{row.coach}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
