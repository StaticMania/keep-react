import { Variants } from 'framer-motion'

export interface PopoverIVariants {
  left: Variants
  right: Variants
  top: Variants
  bottom: Variants
}

const popoverVariants: PopoverIVariants = {
  top: {
    initial: {
      opacity: 0,
      y: '10px',
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transformOrigin: 'bottom center',
      transition: {
        duration: 0.3,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      y: '10px',
    },
  },
  bottom: {
    initial: {
      opacity: 0,
      y: '10px',
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transformOrigin: 'top center',
      transition: {
        duration: 0.3,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      opacity: 0,
      y: '10px',
      scale: 0.8,
    },
  },
  left: {
    initial: {
      opacity: 0,
      x: '-10px',
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      transformOrigin: 'right center',
      x: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      x: '-10px',
    },
  },
  right: {
    initial: {
      opacity: 0,
      x: '10px',
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transformOrigin: 'left center',
      transition: {
        duration: 0.3,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      opacity: 0,
      x: '10px',
      scale: 0.8,
    },
  },
}

export { popoverVariants }
