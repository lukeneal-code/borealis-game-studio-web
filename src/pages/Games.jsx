import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import Container from '../components/layout/Container';
import Hero from '../components/sections/Hero';
import Button from '../components/ui/Button';
import Divider from '../components/ui/Divider';
import Steam from '../components/icons/Steam';
import Itch from '../components/icons/Itch';
import { games } from '../data/games';
import styles from './Games.module.css';

export default function Games() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <PageWrapper>
      <Hero
        title="GAMES"
        backgroundImage="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80"
        height="50vh"
        showScrollIndicator={false}
      />

      <section className={styles.gamesSection}>
        <Container>
          {games.map((game, index) => (
            <div key={game.id}>
              <article id={game.id} className={styles.gameEntry}>
                <motion.div
                  className={styles.imageContainer}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay} />
                </motion.div>

                <motion.div
                  className={styles.content}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className={styles.header}>
                    <h2 className={styles.title}>{game.title}</h2>
                    <span className={styles.year}>{game.year}</span>
                  </div>

                  <p className={styles.tagline}>{game.tagline}</p>
                  <p className={styles.description}>{game.description}</p>

                  <div className={styles.platforms}>
                    {game.steamUrl && (
                      <Button href={game.steamUrl} variant="secondary">
                        <Steam size={18} />
                        Steam
                      </Button>
                    )}
                    {game.itchUrl && (
                      <Button href={game.itchUrl} variant="secondary">
                        <Itch size={18} />
                        itch.io
                      </Button>
                    )}
                  </div>
                </motion.div>
              </article>

              {index < games.length - 1 && <Divider />}
            </div>
          ))}
        </Container>
      </section>
    </PageWrapper>
  );
}
