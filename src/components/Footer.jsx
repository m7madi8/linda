import { instagramUrl, whatsappUrl } from '../App.jsx';
import logoWhite from '../../logo-white-1.png';

export default function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="container-page flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img src={logoWhite} alt="Shape Up by Linda" className="h-20 w-auto object-contain" />
          <div>
            <p className="text-lg font-black tracking-wide">SHAPE UP</p>
            <p className="text-sm font-bold text-pink-light">Sculpture Your Body</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="تابعي Shape Up by Linda على إنستغرام"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-black transition hover:border-pink hover:bg-pink"
          >
            Instagram
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="تواصلي مع Shape Up by Linda عبر واتساب"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-black transition hover:border-pink hover:bg-pink"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="container-page mt-8 border-t border-white/10 pt-8 text-sm font-semibold text-white/50">
        © {new Date().getFullYear()} Shape Up. All rights reserved.
      </div>
    </footer>
  );
}
