import { NavLink as RouterNavLink } from 'react-router-dom';
import styles from './NavLink.module.css';

export default function NavLink({ to, children, className = '' }) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `${styles.link} ${isActive ? styles.active : ''} ${className}`
      }
    >
      {children}
    </RouterNavLink>
  );
}
