import { Project } from "./Project.jsx";
import { BlankProject } from "./BlankProject.jsx";
import { Spaaaces } from "./Projects/Spaaaces.jsx";
import { Portfolio } from "./Projects/Portfolio.jsx";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Work = () => {
  const [selection, setSelection] = useState(null);

  useEffect(() => {
    const handleOutsideClick = e => {
      if (selection !== null && e.target.closest(".content") === null) {
        setSelection(null);
      }
    };

    const handleKeyPress = e => {
      if (selection !== null && e.key === "Escape") {
        setSelection(null);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [selection]);

  const handleClick = no => {
    setSelection(no);
  };

  return (
    <>
      <div className="work-heading-section">
        <motion.h2
          className="work-heading"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Work
        </motion.h2>
      </div>

      <ul className="work-list">
        <Project onClick={handleClick} no={1} date={"2024"} selection={selection} active={true}>
          Spaaaces
          <Spaaaces />
        </Project>
        <Project onClick={handleClick} no={2} date={"2024"} selection={selection} active={true}>
          Portfolio
          <Portfolio />
        </Project>
        <BlankProject no={3} />
        <BlankProject no={4} />
        <BlankProject no={5} />
      </ul>
    </>
  );
};
