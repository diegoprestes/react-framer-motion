import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { backdropVariants, modalVariants } from '../utils/animatons';

const Modal = ({ showModal }) => {
  return (
    <AnimatePresence>
      { showModal && (
        <motion.div className="backdrop"
          variants={backdropVariants}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <motion.div className="modal"
            variants={modalVariants}
          >
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
