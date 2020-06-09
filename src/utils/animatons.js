export const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      yoyo: Infinity,
      duration: 0.3
    },
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
  }
};

export const homeContainerVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

export const containerVariants = {
  initial: {
    x: '100vw',
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
};

export const childVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
}

export const nextVariants = {
  initial: {
    x: '-100vw'
  },
  animate: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120
    }
  }
};

export const listItemVariants = {
  whileHover: {
    scale: 1.3,
    originX: 0,
    color: "#F8E112",
  }
};

export const backdropVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
};

export const modalVariants = {
  initial: {
    y: '-100vh',
    opacity: 0
  },
  animate: {
    y: '200px',
    opacity: 1,
    transition: { delay: 0.2 }
  }
};

export const svgVariants = {
  initial: {
    rotate: -180
  },
  animate: {
    rotate: 0,
    transition: { duration: 1 }
  }
};

export const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: 'easeInOut' }
  }
};

export const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { yoyo: Infinity, duration: 0.5 },
      y: { yoyo: Infinity, duration: 0.25, ease: 'easeOut' }
    }
  },
  animationTwo: {
    x: 0,
    y: [0, -40],
    transition: {
      y: { yoyo: Infinity, duration: 0.25, ease: 'easeOut' }
    }
  }
};