import { motion } from 'framer-motion';
import Container from '../layout/Container';
import styles from './Philosophy.module.css';

export default function Philosophy({ quote, attribution }) {
  return (
    <section className={styles.section}>
      <Container>
        <motion.blockquote
          className={styles.quote}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className={styles.text}>&ldquo;{quote}&rdquo;</p>
          {attribution && (
            <footer className={styles.attribution}>
              &mdash; {attribution}
            </footer>
          )}
        </motion.blockquote>
      </Container>
    </section>
  );
}
