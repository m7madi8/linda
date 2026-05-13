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

export default function Schedule() {
  const [active, setActive] = useState('all');
  const filteredRows = useMemo(
    () => rows.filter((row) => active === 'all' || row.period === active || row.period === 'all'),
    [active],
  );

  return (
    <section id="schedule" className="section-padding bg-soft">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-pink">الجدول الأسبوعي</p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">وقت مناسب. تمرين أقوى.</h2>
            <p className="mt-5 text-lg leading-8 text-black/60">فلتر سريع للصباح والمساء.</p>
          </div>

          <div className="flex rounded-full bg-white p-2 shadow-xl" role="tablist" aria-label="فلترة الجدول">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                role="tab"
                aria-selected={active === tab.id}
                className={`rounded-full px-6 py-3 text-sm font-black transition ${
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
          className="mt-12 overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(13,13,13,0.1)]"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-right">
              <thead className="bg-ink text-white">
                <tr>
                  <th className="px-6 py-5 text-sm font-black">اليوم</th>
                  <th className="px-6 py-5 text-sm font-black">الحصة</th>
                  <th className="px-6 py-5 text-sm font-black">الوقت</th>
                  <th className="px-6 py-5 text-sm font-black">المدربة</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row) => (
                  <motion.tr
                    key={`${row.day}-${row.className}-${row.time}`}
                    layout
                    className="border-b border-black/5 transition hover:bg-pink/10"
                  >
                    <td className="px-6 py-5 text-base font-black">{row.day}</td>
                    <td className="px-6 py-5 text-base font-bold">{row.className}</td>
                    <td className="px-6 py-5">
                      <span className="rounded-full bg-pink px-4 py-2 text-sm font-black text-white">{row.time}</span>
                    </td>
                    <td className="px-6 py-5 text-base font-bold text-black/60">{row.coach}</td>
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
