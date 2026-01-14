import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              BOREALIS
            </Link>
          </div>

          <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/games">Games</Link>
            <Link to="/about">About</Link>
          </nav>

          <div className={styles.social}>
            <a
              href="https://store.steampowered.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Steam"
            >
              Steam
            </a>
            <a
              href="https://itch.io"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="itch.io"
            >
              itch.io
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              Twitter
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Borealis Game Studio. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
