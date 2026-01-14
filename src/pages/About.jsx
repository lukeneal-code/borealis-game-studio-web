import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import Container from '../components/layout/Container';
import Hero from '../components/sections/Hero';
import Philosophy from '../components/sections/Philosophy';
import TeamMember from '../components/sections/TeamMember';
import Gallery from '../components/media/Gallery';
import { team } from '../data/team';
import styles from './About.module.css';

export default function About() {
  return (
    <PageWrapper>
      <Hero
        title="ABOUT"
        backgroundImage="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80"
        height="50vh"
        showScrollIndicator={false}
      />

      <section className={styles.story}>
        <Container>
          <motion.div
            className={styles.storyContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>The Studio</h2>

            <div className={styles.storyGrid}>
              <div className={styles.storyImage}>
                <img
                  src="/images/team/london.png"
                  alt="Borealis Studio workspace"
                />
              </div>

              <div className={styles.storyText}>
                <p>
                  Borelais is a one-man team based in London.
                </p>
                <p>
                  Borealis was founded in 2025 with a singular vision: to create games
                  that linger in the mind like half-remembered dreams. It is my belief that
                  the most profound experiences come not from spectacle, but from
                  atmosphere—from the spaces between sounds, from the shadows at the
                  edge of vision.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <Philosophy
        quote="I believe games are a medium for existential exploration, spaces where players can confront the beautiful terror of existence in safety."
      />

      <section className={styles.team}>
        <Container>
          <h2 className={styles.sectionTitle}>The Team</h2>

          <Gallery columns={3}>
            {team.map(member => (
              <TeamMember key={member.id} member={member} />
            ))}
          </Gallery>
        </Container>
      </section>

      <section className={styles.contact}>
        <Container>
          <motion.div
            className={styles.contactContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>Contact</h2>

            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <h3 className={styles.contactLabel}>Press Inquiries</h3>
                <a href="mailto:press@borealis.studio" className={styles.contactLink}>
                  press@borealis.studio
                </a>
              </div>

              <div className={styles.contactItem}>
                <h3 className={styles.contactLabel}>General</h3>
                <a href="mailto:hello@borealis.studio" className={styles.contactLink}>
                  hello@borealis.studio
                </a>
              </div>

              <div className={styles.contactItem}>
                <h3 className={styles.contactLabel}>Follow Us</h3>
                <div className={styles.socialLinks}>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </PageWrapper>
  );
}
