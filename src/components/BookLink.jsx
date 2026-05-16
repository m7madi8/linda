import { Link } from 'react-scroll';

export default function BookLink({ children, className = '', ...props }) {
  return (
    <Link
      to="booking"
      smooth
      duration={650}
      offset={-80}
      className={`cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
