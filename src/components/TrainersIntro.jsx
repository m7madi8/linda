import { motion } from 'framer-motion';
import lindaImage from '../../linda.jpeg';
import kawtharImage from '../../kawthar.png';

const trainers = [
  {
    name: 'ليندا غانم',
    role: 'المدربة الرئيسية',
    badge: '+10 سنوات خبرة',
    initials: 'ل',
    summary: 'خبرة طويلة، متابعة دقيقة، وخطة واضحة لكل متدربة.',
    highlights: ['قوة ولياقة', 'متابعة شخصية', 'نتائج ثابتة'],
    details: [
      { label: 'التخصص', value: 'إدارة تدريب ولياقة نسائية' },
      { label: 'التركيز', value: 'خطة، التزام، ونتيجة' },
      { label: 'الأسلوب', value: 'متابعة هادئة ودقيقة' },
    ],
    image: lindaImage,
  },
  {
    name: 'كوثر غانم',
    role: 'مدربة فيتنس وقوة',
    badge: '+3 سنوات خبرة',
    initials: 'ك',
    summary: 'طاقة عالية، تقنية صحيحة، وتمارين تبني الجسم والثقة.',
    highlights: ['HIIT وحرق', 'עיצוב דינאמי', 'تصحيح الحركة والتنفس'],
    details: [
      { label: 'التخصص', value: 'فيتنس، قوة، HIIT' },
      { label: 'التركيز', value: 'تقنية، تنفس، وحرق' },
      { label: 'الأسلوب', value: 'طاقة وتحدي بدون ملل' },
    ],
    image: kawtharImage,
  },
];

export default function TrainersIntro() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-14 text-white sm:py-16 lg:py-20">
      <div className="absolute -right-28 top-0 h-96 w-96 rounded-full bg-pink-radial opacity-80 blur-3xl" />
      <div className="absolute -left-28 bottom-0 h-96 w-96 rounded-full bg-pink-radial opacity-50 blur-3xl" />
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-l from-transparent via-pink/35 to-transparent" />

      <div className="container-page relative">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
              className="relative border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-l"
          >
              <p className="text-sm font-black uppercase tracking-[0.45em] text-pink-light">DUO COACHES</p>
              <h2 className="mt-5 text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">
                ليندا
                <span className="block text-pink">+</span>
                كوثر
              </h2>
              <p className="mt-6 max-w-md text-lg font-bold leading-8 text-white/70">
                مدربتان. طاقة واحدة. تدريب قوي، تقنية صحيحة، ودعم يخليك تكملي.
            </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-4">
                  <p className="text-3xl font-black text-pink-light">2</p>
                  <p className="mt-1 text-sm font-black text-white/60">مدربات</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/10 p-4">
                  <p className="text-3xl font-black text-pink-light">∞</p>
                  <p className="mt-1 text-sm font-black text-white/60">طاقة وتحفيز</p>
                </div>
              </div>
              <div className="absolute -bottom-10 left-8 hidden text-[9rem] font-black leading-none text-white/[0.03] lg:block">
                TEAM
              </div>
          </motion.div>

            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block" />
              <div className="grid gap-4 md:grid-cols-2">
                {trainers.map((trainer, index) => (
                  <motion.article
                    key={trainer.name}
                    initial={{ opacity: 0, y: 34, rotate: index === 0 ? 2 : -2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: index === 0 ? -1 : 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                    className={`group relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-white text-ink shadow-[0_30px_90px_rgba(0,0,0,0.35)] transition hover:-translate-y-2 hover:rotate-0 hover:shadow-glow ${
                      index === 1 ? 'md:mt-14' : ''
                    }`}
                  >
                    <div className="absolute inset-x-0 top-0 h-32 bg-ink" />
                    <div className="absolute -right-12 top-10 h-40 w-40 rounded-full bg-pink/35 blur-3xl" />
                    <div className="absolute left-5 top-5 z-20 rounded-full bg-pink px-4 py-2 text-xs font-black text-white shadow-glow">
                      {trainer.badge}
                    </div>
                    <div className="absolute right-5 top-4 z-20 text-7xl font-black leading-none text-white/10">
                      0{index + 1}
                    </div>

                    <div className="relative z-10 flex h-56 items-center justify-center px-6 pt-10">
                      {trainer.image ? (
                        <div className="grid h-40 w-40 place-items-center overflow-hidden rounded-full border-4 border-white/20 bg-white/10 shadow-glow backdrop-blur">
                          <img
                            src={trainer.image}
                            alt={trainer.name}
                            loading="lazy"
                            className="h-full w-full rounded-full object-cover object-top"
                          />
                        </div>
                      ) : (
                        <div className="grid h-40 w-40 place-items-center rounded-full border-4 border-white/20 bg-white/10 text-7xl font-black text-white shadow-glow backdrop-blur-xl">
                          {trainer.initials}
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 p-5 sm:p-6">
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <p className="text-sm font-black text-pink">{trainer.role}</p>
                        <span className="h-2.5 w-2.5 rounded-full bg-pink shadow-glow" />
                      </div>
                      <h3 className="text-3xl font-black">{trainer.name}</h3>
                      <p className="mt-3 text-sm font-bold leading-7 text-black/60">{trainer.summary}</p>

                      <div className="mt-5 grid gap-2">
                        {trainer.details.map((detail) => (
                          <div key={detail.label} className="flex items-center justify-between gap-3 rounded-2xl bg-soft px-3 py-2">
                            <span className="text-xs font-black text-pink">{detail.label}</span>
                            <span className="text-xs font-black text-black/65">{detail.value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {trainer.highlights.map((item) => (
                          <span key={item} className="rounded-full bg-ink px-3.5 py-2 text-xs font-black text-white">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
