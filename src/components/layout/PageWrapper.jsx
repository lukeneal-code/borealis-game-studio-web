import { motion } from 'framer-motion';
import GrainOverlay from '../ui/GrainOverlay';
import styles from './PageWrapper.module.css';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.5,
};

export default function PageWrapper({ children }) {
  return (
    <>
      <GrainOverlay />
      <motion.main
        className={styles.page}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.main>
    </>
  );
}
