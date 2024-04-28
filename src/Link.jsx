import { motion } from "framer-motion";

export const Link = ({ href, children }) => {
  return (
    <motion.li
      className="link"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </motion.li>
  );
};
