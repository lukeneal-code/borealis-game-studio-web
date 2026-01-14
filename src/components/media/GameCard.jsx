import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './GameCard.module.css';

export default function GameCard({ game, to }) {
  const CardWrapper = to ? Link : 'div';

  return (
    <motion.article
      className={styles.card}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <CardWrapper to={to} className={styles.link}>
        <div className={styles.imageContainer}>
          <img
            src={game.image || '/images/games/placeholder.jpg'}
            alt={game.title}
            className={styles.image}
            loading="lazy"
          />
          <div className={styles.overlay} />
        </div>

        <div className={styles.content}>
          <div className={styles.meta}>
            <span className={styles.year}>{game.year}</span>
          </div>
          <h3 className={styles.title}>{game.title}</h3>
          <p className={styles.tagline}>{game.tagline}</p>
        </div>
      </CardWrapper>
    </motion.article>
  );
}
