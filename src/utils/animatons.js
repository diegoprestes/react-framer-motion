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