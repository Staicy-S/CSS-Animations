import { motion } from "framer-motion";
import "./Variants.css";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function Variants() {
  return (
    <>
      <h1>Variants</h1>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="ul-container"
      >
        <motion.h2 variants={item}>Please select</motion.h2>
        <motion.ul className="animated-list">
          <motion.li variants={item}>Option 1</motion.li>
          <motion.li variants={item}>Option 2</motion.li>
          <motion.li variants={item}>Option 3</motion.li>
          <motion.li variants={item}>Option 4</motion.li>
        </motion.ul>
      </motion.div>
    </>
  );
}
