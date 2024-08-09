import { Variants } from 'framer-motion'

export interface TooltipIVariants {
  left: Variants
  right: Variants
  top: Variants
  bottom: Variants
}

const TooltipVariants: TooltipIVariants = {
  top: {
    initial: {
      opacity: 0,
      y: '8px',
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      y: 0,
      transformOrigin: 'bottom center',
      transition: {
        duration: 0.3,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: '8px',
      scale: 0.8,
    },
  },
  bottom: {
    initial: {
      opacity: 0,
      y: '8px',
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      transformOrigin: 'top center',
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      opacity: 0,
      y: '8px',
      scale: 0.8,
    },
  },
  left: {
    initial: {
      opacity: 0,
      x: '-20px',
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transformOrigin: 'right center',
      transition: {
        duration: 0.3,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      opacity: 0,
      x: '-8px',
      scale: 0.8,
    },
  },
  right: {
    initial: {
      opacity: 0,
      x: '20px',
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
      x: '8px',
      scale: 0.8,
    },
  },
}

export { TooltipVariants }
