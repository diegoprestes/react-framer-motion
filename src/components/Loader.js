import React from 'react';
import { motion, useCycle } from 'framer-motion';

import { loaderVariants } from '../utils/animatons';

const Loader = () => {
  const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      >
      </motion.div>
      <div onClick={() => cycleAnimation()}>Cycle Loader</div>
    </>
  );
};

export default Loader;