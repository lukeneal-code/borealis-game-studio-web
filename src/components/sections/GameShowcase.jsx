import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Arrow from '../icons/Arrow';
import styles from './GameShowcase.module.css';

export default function GameShowcase({ game, featured = false }) {
  return (
    <section className={`${styles.showcase} ${featured ? styles.featured : ''}`}>
      <Container>
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Link to={`/games#${game.id}`} className={styles.imageLink}>
            <img
              src={game.image || '/images/games/placeholder.jpg'}
              alt={game.title}
              className={styles.image}
            />
            <div className={styles.imageOverlay} />
          </Link>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.meta}>
            <span className={styles.year}>{game.year}</span>
            {featured && <span className={styles.badge}>Latest Release</span>}
          </div>

          <h2 className={styles.title}>{game.title}</h2>
          <p className={styles.tagline}>{game.tagline}</p>

          {game.description && (
            <p className={styles.description}>{game.description}</p>
          )}

          <div className={styles.actions}>
            <Button to={`/games#${game.id}`} variant="secondary">
              Explore
              <Arrow size={16} />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
