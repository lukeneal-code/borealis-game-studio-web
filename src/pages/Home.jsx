import { Link } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import Container from '../components/layout/Container';
import Hero from '../components/sections/Hero';
import GameShowcase from '../components/sections/GameShowcase';
import Philosophy from '../components/sections/Philosophy';
import GameCard from '../components/media/GameCard';
import Gallery from '../components/media/Gallery';
import Button from '../components/ui/Button';
import Arrow from '../components/icons/Arrow';
import { getFeaturedGame, getArchiveGames } from '../data/games';
import styles from './Home.module.css';

export default function Home() {
  const featuredGame = getFeaturedGame();
  const archiveGames = getArchiveGames();

  return (
    <PageWrapper>
      <Hero
        title="BOREALIS"
        subtitle="All that we see or seem. Is but a dream within a dream."
        backgroundImage="/images/hero/ship_banner.png"
        height="100vh"
      />

      {featuredGame && (
        <section className={styles.featured}>
          <Container>
            <h2 className={styles.sectionTitle}>Latest Release</h2>
          </Container>
          <GameShowcase game={featuredGame} featured />
        </section>
      )}

      <Philosophy
        quote="We build worlds where silence speaks and shadows hold meaning."
      />

      {archiveGames.length > 0 && (
        <section className={styles.archive}>
          <Container>
            <h2 className={styles.sectionTitle}>From the Archive</h2>

            <Gallery columns={archiveGames.length}>
              {archiveGames.map(game => (
                <GameCard
                  key={game.id}
                  game={game}
                  to={`/games#${game.id}`}
                />
              ))}
            </Gallery>

            <div className={styles.viewAll}>
              <Button to="/games" variant="ghost">
                View All Games
                <Arrow size={16} />
              </Button>
            </div>
          </Container>
        </section>
      )}
    </PageWrapper>
  );
}
