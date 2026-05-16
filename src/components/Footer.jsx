import { Link } from 'react-scroll';
import { instagramUrl, whatsappUrl } from '../App.jsx';
import logoWhite from '../../logo-white-1.png';

const quickLinks = [
  { label: 'الرئيسية', to: 'hero' },
  { label: 'تمارين', to: 'classes' },
  { label: 'الجدول', to: 'schedule' },
  { label: 'أسعار', to: 'pricing' },
  { label: 'المدربات', to: 'about' },
];

const studioHours = [
  { label: 'صباح', time: '09:00–13:00' },
  { label: 'مساء', time: '16:00–21:00' },
];

function IconInstagram({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function IconWhatsApp({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  );
}

function IconArrowUp({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 6v12M7 11l5-5 5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const socialClass =
  'grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:border-pink hover:bg-pink';

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      smooth
      duration={600}
      offset={-80}
      className="cursor-pointer text-sm font-bold text-white/55 transition hover:text-pink-light"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-0 h-48 w-48 rounded-full bg-pink-radial opacity-40 blur-3xl" />

        <div className="container-page relative py-10 sm:py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <img src={logoWhite} alt="Shape Up" className="h-14 w-auto object-contain" />
                <div>
                  <p className="text-lg font-black">SHAPE UP</p>
                  <p className="text-xs font-bold text-pink-light">Sculpture Your Body</p>
                </div>
              </div>
              <p className="mt-4 max-w-xs text-sm font-bold text-white/50">استوديو لياقة نسائي — ليندا وكوثر غانم</p>
            </div>

            <div className="lg:col-span-3">
              <p className="text-xs font-black uppercase tracking-widest text-pink-light">روابط</p>
              <ul className="mt-3 space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <FooterLink to={link.to}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <p className="text-xs font-black uppercase tracking-widest text-pink-light">ساعات</p>
              <ul className="mt-3 space-y-2">
                {studioHours.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2"
                  >
                    <span className="text-xs font-black text-white/45">{item.label}</span>
                    <span className="text-sm font-black tabular-nums">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="text-xs font-black uppercase tracking-widest text-pink-light">تابعينا</p>
              <div className="mt-3 flex gap-3">
                <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="إنستغرام" className={socialClass}>
                  <IconInstagram />
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="تواصل واتساب" className={socialClass}>
                  <IconWhatsApp />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
            <p className="text-xs font-semibold text-white/40">© {year} Shape Up</p>
            <Link
              to="hero"
              smooth
              duration={600}
              offset={-80}
              className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-black text-white/55 transition hover:text-pink-light"
            >
              <IconArrowUp />
              أعلى
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
