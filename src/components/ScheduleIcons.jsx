const stroke = {
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function IconBadge({ children, className = '' }) {
  return (
    <span
      className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-black/[0.06] shadow-sm ${className}`}
    >
      {children}
    </span>
  );
}

export function IconAll({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4" width="7" height="7" rx="1.5" {...stroke} />
      <rect x="13" y="4" width="7" height="7" rx="1.5" {...stroke} />
      <rect x="4" y="13" width="7" height="7" rx="1.5" {...stroke} />
      <rect x="13" y="13" width="7" height="7" rx="1.5" {...stroke} />
    </svg>
  );
}

export function IconSun({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 17h16" {...stroke} />
      <path d="M12 5a5 5 0 00-5 5h10a5 5 0 00-5-5z" {...stroke} />
      <path d="M12 3V2M7 5.5 6 4.5M17 5.5 18 4.5M5 8H3M21 8h-2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconMoon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 14.5A7.5 7.5 0 0110.5 5 6 6 0 0014.5 20 7.5 7.5 0 0020 14.5z"
        {...stroke}
      />
    </svg>
  );
}

export function IconCalendar({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="5" width="16" height="15" rx="2" {...stroke} />
      <path d="M4 10h16M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconCoach({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="7" r="3.25" {...stroke} />
      <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" {...stroke} />
      <path d="M16 5.5l2-1.5M18 9.5h2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconClock({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8" {...stroke} />
      <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconSessions({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6h12v12H6z" {...stroke} />
      <path d="M9 6V4h6v2M9 18v2h6v-2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M10 11h4M10 14h2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export const periodIcons = {
  morning: IconSun,
  evening: IconMoon,
  all: IconCalendar,
};

export const tabIcons = {
  all: IconAll,
  morning: IconSun,
  evening: IconMoon,
};
