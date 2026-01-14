import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero({
  title,
  logoImage,
  subtitle,
  backgroundImage,
  height = '100vh',
  showScrollIndicator = true,
}) {
  return (
    <section
      className={styles.hero}
      style={{
        height,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      <div className={styles.overlay} />

      <div className={styles.content}>
        {logoImage ? (
          <motion.img
            src={logoImage}
            alt={title || 'Logo'}
            className={styles.logoImage}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        ) : title && (
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
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
      </div>

      {showScrollIndicator && (
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className={styles.scrollText}>Scroll</span>
          <span className={styles.scrollArrow}>&#8595;</span>
        </motion.div>
      )}
    </section>
  );
}
