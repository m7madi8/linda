import { motion, useReducedMotion } from 'framer-motion';
import logoWhite from '../../logo-white-1.png';

export default function Loader() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: reduceMotion ? 0.2 : 0.45, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[999] grid place-items-center overflow-hidden bg-ink text-white"
      aria-label="جاري تحميل الموقع"
      role="status"
    >
      <div className="absolute -right-24 top-12 h-80 w-80 rounded-full bg-pink-radial opacity-70 blur-3xl" />
      <div className="absolute -left-24 bottom-10 h-96 w-96 rounded-full bg-pink-radial opacity-50 blur-3xl" />

      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18, scale: 0.98 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="relative flex transform-gpu flex-col items-center px-6 text-center"
      >
        <div className="relative">
          <motion.div
            animate={reduceMotion ? { opacity: 0.28 } : { scale: [1, 1.12, 1], opacity: [0.38, 0.16, 0.38] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 transform-gpu rounded-full bg-pink blur-2xl will-change-transform"
          />
          <motion.img
            src={logoWhite}
            alt="Shape Up"
            className="relative h-24 w-auto transform-gpu object-contain will-change-transform sm:h-32"
            animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { scaleX: 0 }}
          animate={reduceMotion ? { opacity: 1 } : { scaleX: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="mt-8 h-1 w-44 origin-center transform-gpu overflow-hidden rounded-full bg-white/10 will-change-transform"
        >
          <motion.div
            animate={reduceMotion ? { x: '25%' } : { x: ['120%', '-120%'] }}
            transition={{ duration: 1.35, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-1/2 transform-gpu rounded-full bg-pink shadow-glow will-change-transform"
          />
        </motion.div>

        <p className="mt-5 text-sm font-black uppercase tracking-[0.45em] text-pink-light">Shape Up</p>
        <p className="mt-2 text-lg font-bold text-white/70">نجهز لكي تجربة أقوى...</p>
      </motion.div>
    </motion.div>
  );
}
