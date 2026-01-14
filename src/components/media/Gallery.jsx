import styles from './Gallery.module.css';

export default function Gallery({ children, columns = 3, className = '' }) {
  return (
    <div
      className={`${styles.gallery} ${className}`}
      style={{ '--columns': columns }}
    >
      {children}
    </div>
  );
}
