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
      scale: 0.7,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'anticipate',
      },
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: '8px',
      scale: 0.7,
    },
  },
  bottom: {
    initial: {
      opacity: 0,
      y: '8px',
      scale: 0.7,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'anticipate',
      },
    },
    exit: {
      opacity: 0,
      y: '8px',
      scale: 0.7,
    },
  },
  left: {
    initial: {
      opacity: 0,
      x: '-20px',
      scale: 0.7,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'anticipate',
      },
    },
    exit: {
      opacity: 0,
      x: '-8px',
      scale: 0.7,
    },
  },
  right: {
    initial: {
      opacity: 0,
      x: '20px',
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'anticipate',
      },
    },
    exit: {
      opacity: 0,
      x: '8px',
      scale: 0.9,
    },
  },
}

export { TooltipVariants }
