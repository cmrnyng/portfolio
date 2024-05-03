import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const Project = ({ children, no, date, onClick, selection, active }) => {
  const wrapper = useRef();
  const start = useRef();
  const content = useRef();

  useEffect(() => {
    if (selection !== no) {
      wrapper.current.scrollTop = 0;
    }
    const h = window.innerHeight;
    const c = content.current.offsetHeight;
    content.current.style.top = h > c ? `${Math.max(h - c, h * 0.4)}px` : "20%";
  }, [selection]);

  const handleTouchStart = e => {
    if (wrapper.current.scrollTop === 0) {
      start.current = e.changedTouches[0].clientY;
    }
  };

  const handleTouchMove = e => {
    if (wrapper.current.scrollTop === 0 && e.changedTouches[0].clientY - start.current > 100) {
      onClick(null);
    }
  };

  return (
    <>
      <li
        onClick={e => {
          e.stopPropagation();
          onClick(no);
        }}
      >
        <motion.button
          className="project-button"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.2 * (no / 2) }}
        >
          <p className="project-details">
            <span className="project-number">{`0${no}`}</span>
            <span className="project-name">
              {typeof children === "object" ? children[0] : children}
            </span>
            <span className="project-date">{date}</span>
          </p>
        </motion.button>
      </li>
      {active && (
        <div
          ref={wrapper}
          id="scrollthing"
          className={`content-wrapper ${selection === no ? "clicked" : ""}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div ref={content} className="content">
            {children[1]}
          </div>
        </div>
      )}
    </>
  );
};
