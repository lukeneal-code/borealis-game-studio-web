import { motion } from 'framer-motion';
import styles from './TeamMember.module.css';

export default function TeamMember({ member }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.imageContainer}>
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>?</div>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.role}>{member.role}</p>
        {member.bio && (
          <p className={styles.bio}>{member.bio}</p>
        )}
      </div>
    </motion.article>
  );
}
