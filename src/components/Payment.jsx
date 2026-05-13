import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function PaymentIcon({ type }) {
  const common = 'h-8 w-8';

  if (type === 'cash') {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={common} aria-hidden="true">
        <rect x="6" y="12" width="36" height="24" rx="5" stroke="currentColor" strokeWidth="3" />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="3" />
        <path d="M13 18h4M31 30h4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'card') {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={common} aria-hidden="true">
        <rect x="7" y="12" width="34" height="24" rx="5" stroke="currentColor" strokeWidth="3" />
        <path d="M7 21h34M14 29h9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'bank') {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={common} aria-hidden="true">
        <path d="M8 20 24 10l16 10H8Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M12 22v14M20 22v14M28 22v14M36 22v14M9 38h30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'bit') {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={common} aria-hidden="true">
        <rect x="15" y="6" width="18" height="36" rx="5" stroke="currentColor" strokeWidth="3" />
        <path d="M22 35h4M20 15h8M20 22h8M20 29h5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none" className={common} aria-hidden="true">
      <path d="M37 19a13 13 0 0 0-22-6l-3 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M11 29a13 13 0 0 0 22 6l3-3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M12 9v7h7M36 39v-7h-7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const methods = [
  { label: 'كاش', detail: 'دفع مباشر في الاستوديو', icon: 'cash' },
  { label: 'بطاقة', detail: 'دفع سريع وآمن', icon: 'card' },
  { label: 'تحويل بنكي', detail: 'مناسب للاشتراكات', icon: 'bank' },
  { label: 'Bit', detail: 'تحويل فوري من الهاتف', icon: 'bit' },
  { label: 'הוראת קבע', detail: 'بدون حجز إطار ائتماني', icon: 'direct' },
];

const feedback = [
  {
    quote: 'التمرين كان أكثر من رائع. مهنية، أجواء مريحة، وطاقة بتخلي الواحد يتحمس يرجع.',
    name: 'متدربة مع ليندا',
    result: 'طاقة وراحة',
  },
  {
    quote: 'تمرين كوثر بجنن. التعاون والروح الحلوة خلّوا التجربة نفسياً غير.',
    name: 'متدربة مع كوثر',
    result: 'تحفيز وروح',
  },
  {
    quote: 'بعد انقطاع سنتين عن الرياضة، تشجيعكن رجّعني أتمرن من جديد.',
    name: 'راجعة للتمرين',
    result: 'استمرارية',
  },
  {
    quote: 'الحكي الحلو والطاقة اللي بتعطونا إياها بتحببنا بالجيم كل يوم أكثر.',
    name: 'مشتركة دائمة',
    result: 'حب التدريب',
  },
  {
    quote: 'تمرين سريع وكان ناار. الشعور بعد التمرين غير.',
    name: 'متدربة HIIT',
    result: 'حرق وطاقة',
  },
  {
    quote: 'من أول تدريب حسّيت بالفرق. تنظيف، ترتيب، وطاقة حلوة.',
    name: 'متدربة جديدة',
    result: 'انطباع قوي',
  },
  {
    quote: 'الله يستر من بكرا. التمرين قوي بس ممتع وبشجع نكمل.',
    name: 'مشتركة في الحصص',
    result: 'تحدي ممتع',
  },
  {
    quote: 'آخ يا ركب ههههههه، بس المزبوط بقى تدريب نظيف نظيف نظيف. بجنن.',
    name: 'متدربة مع كوثر',
    result: 'تنظيم وتقنية',
  },
];

export default function Payment() {
  const [activeFeedback, setActiveFeedback] = useState(0);

  useEffect(() => {
    let interval;
    const start = window.setTimeout(() => {
      setActiveFeedback((current) => (current + 1) % feedback.length);
      interval = window.setInterval(() => {
        setActiveFeedback((current) => (current + 1) % feedback.length);
      }, 6500);
    }, 5000);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, []);

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
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">اختاري طريقة الدفع براحتك</h2>
          <p className="mt-5 text-lg font-bold leading-8 text-black/60">خيارات مرنة وواضحة، بدون تعقيد.</p>
        </motion.div>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-5">
          {methods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-4 shadow-xl transition hover:border-pink hover:shadow-glow"
            >
              <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-pink/10 blur-2xl transition group-hover:bg-pink/25" />
              <div className="relative">
                <div className="mb-3 grid h-12 w-12 place-items-center rounded-xl bg-ink text-pink-light shadow-lg transition group-hover:bg-pink group-hover:text-white [&>svg]:h-7 [&>svg]:w-7">
                  <PaymentIcon type={method.icon} />
                </div>
                <h3 className={`text-lg font-black ${method.label === 'הוראת קבע' ? 'font-heebo' : ''}`}>{method.label}</h3>
                <p className="mt-1 text-xs font-bold leading-5 text-black/60 sm:text-sm">{method.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-pink/20 bg-white p-5 text-center shadow-xl sm:p-6"
        >
          <p className="font-heebo text-lg font-black text-ink">הוראת קבע = بدون حجز إطار ائتماني</p>
          <p className="mt-2 text-sm font-bold text-black/60">اسألي الفريق عن الطريقة الأنسب لاشتراكك.</p>
        </motion.div>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="text-sm font-black uppercase tracking-[0.35em] text-pink">آراء المتدربات</p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">كلام بنات جربوا الطاقة</h2>
            <p className="mt-4 text-lg font-bold leading-8 text-black/60">نتائج، ثقة، وأجواء تخليك تحبي التمرين.</p>
            <div className="mt-6 flex gap-2">
              {feedback.map((item, index) => (
                <button
                  key={item.result}
                  type="button"
                  onClick={() => setActiveFeedback(index)}
                  aria-label={`عرض رأي ${index + 1}`}
                  className={`h-2.5 rounded-full transition ${
                    activeFeedback === index ? 'w-10 bg-pink' : 'w-2.5 bg-black/20 hover:bg-pink/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <div className="overflow-hidden rounded-[2rem] shadow-2xl" dir="ltr">
            <motion.div
              className="flex"
              animate={{ x: `-${activeFeedback * 100}%` }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
            >
              {feedback.map((item) => (
                <article key={item.quote} dir="rtl" className="relative min-w-full overflow-hidden bg-ink p-6 text-white sm:p-8">
                  <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-pink/25 blur-3xl" />
                  <div className="relative">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div className="flex text-lg text-pink-light" aria-label="تقييم 5 نجوم">
                        ★★★★★
                      </div>
                      <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black text-pink-light">
                        {item.result}
                      </span>
                    </div>
                    <p className="text-xl font-bold leading-10 text-white/80">“{item.quote}”</p>
                    <div className="mt-8 flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-full bg-pink text-lg font-black">S</div>
                      <div>
                        <p className="font-black">{item.name}</p>
                        <p className="text-sm font-bold text-white/50">Shape Up</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
