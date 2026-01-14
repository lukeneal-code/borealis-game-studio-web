import { motion } from 'framer-motion';
import styles from './HeroImage.module.css';

export default function HeroImage({
  src,
  alt,
  title,
  subtitle,
  height = '100vh',
  showScrollIndicator = true,
}) {
  return (
    <section className={styles.hero} style={{ height }}>
      <div className={styles.imageContainer}>
        <img
          src={src}
          alt={alt}
          className={styles.image}
        />
        <div className={styles.vignette} />
        <div className={styles.tint} />
      </div>

      <div className={styles.content}>
        {title && (
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
        )}
        {subtitle && (
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}

        {showScrollIndicator && (
          <motion.div
            className={styles.scrollIndicator}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className={styles.scrollText}>Scroll</span>
            <span className={styles.scrollArrow}>&#8595;</span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
