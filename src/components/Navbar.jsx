import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import BookLink from './BookLink.jsx';
import logoPink from '../../logo-pink.png';

const navLinks = [
  { label: 'تمارين', to: 'classes' },
  { label: 'الجدول', to: 'schedule' },
  { label: 'أسعار', to: 'pricing' },
  { label: 'حجز', to: 'booking' },
  { label: 'الفريق', to: 'about' },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 90], ['rgba(255,255,255,0.94)', 'rgba(255,255,255,0.82)']);
  const borderColor = useTransform(scrollY, [0, 90], ['rgba(13,13,13,0.08)', 'rgba(13,13,13,0.12)']);
  const boxShadow = useTransform(scrollY, [0, 90], ['0 10px 35px rgba(13,13,13,0.08)', '0 18px 55px rgba(13,13,13,0.12)']);
  const backdropFilter = useTransform(scrollY, [0, 90], ['blur(12px)', 'blur(20px)']);

  return (
    <motion.header
      style={{ background, borderColor, boxShadow, backdropFilter }}
      className="fixed inset-x-0 top-0 z-50 border-b"
    >
      <nav className="container-page flex h-20 items-center justify-between gap-4" aria-label="التنقل الرئيسي">
        <Link
          to="hero"
          smooth
          duration={600}
          offset={-80}
          className="flex cursor-pointer items-center gap-3"
          aria-label="العودة إلى بداية الصفحة"
        >
          <img src={logoPink} alt="Shape Up by Linda" className="h-14 w-auto object-contain" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              spy
              duration={650}
              offset={-80}
              activeClass="text-pink"
              className="cursor-pointer text-sm font-bold text-ink/75 transition hover:text-pink"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <BookLink
          aria-label="احجزي من الموقع"
          className="rounded-full bg-pink px-5 py-3 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-pink-dark hover:shadow-glow-lg sm:px-7"
        >
          احجزي الآن
        </BookLink>
      </nav>
    </motion.header>
  );
}
