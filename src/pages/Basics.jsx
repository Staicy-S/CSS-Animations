import { motion } from "framer-motion";
import "./Basics.css";
export function Basics() {
  return (
    <>
      <motion.h1
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: 1,
          bounce: 0.5,
          opacity: {
            type: "tween",
            duration: 2,
          },
        }}
      >
        Basics
      </motion.h1>
      <motion.div
        initial={{
          rotate: 0,
        }}
        whileHover={{
          rotate: 180,
        }}
        transition={{
          type: "spring",
          damping: 8,
          mass: 1,
        }}
        className="box"
      >
        Hover!
      </motion.div>
    </>
  );
}
