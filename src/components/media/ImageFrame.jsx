import styles from './ImageFrame.module.css';

export default function ImageFrame({
  src,
  alt,
  aspectRatio = '16/9',
  className = '',
}) {
  return (
    <div
      className={`${styles.frame} ${className}`}
      style={{ aspectRatio }}
    >
      <img
        src={src}
        alt={alt}
        className={styles.image}
        loading="lazy"
      />
      <div className={styles.overlay} />
    </div>
  );
}
