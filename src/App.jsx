import "./styles.css";
import { WebGL } from "./WebGL.jsx";
import { Link } from "./Link.jsx";
import { Work } from "./Work.jsx";
import { motion } from "framer-motion";

const App = () => {
  return (
    <main>
      <div className="header">
        <motion.div
          className="webgl-container"
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <WebGL />
        </motion.div>
      </div>
      <div className="work-container">
        <Work />
      </div>
      <div className="link-container">
        <ul className="link-list">
          <Link href="javascript:void(0);">LinkedIn</Link>
          <Link href="https://github.com/cmrnyng">GitHub</Link>
        </ul>
      </div>
    </main>
  );
};

export default App;
