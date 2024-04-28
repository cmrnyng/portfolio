import { motion } from "framer-motion";

export const BlankProject = ({ no }) => {
  return (
    <>
      <li>
        <motion.button
          className="project-button"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.2 * (no / 2) }}
        >
          <p className="project-details">
            <span className="project-number">{`0${no}`}</span>
            <span className="project-name blank-project">-</span>
            <span className="project-date">----</span>
          </p>
        </motion.button>
      </li>
    </>
  );
};
