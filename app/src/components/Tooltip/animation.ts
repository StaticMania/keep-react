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
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'anticipate',
      },
    },
    exit: {
      opacity: 0,
      y: '8px',
    },
  },
  bottom: {
    initial: {
      opacity: 0,
      y: '8px',
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'anticipate',
      },
    },
    exit: {
      opacity: 0,
      y: '8px',
    },
  },
  left: {
    initial: {
      opacity: 0,
      x: '-20px',
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'anticipate',
      },
    },
    exit: {
      opacity: 0,
      x: '-8px',
    },
  },
  right: {
    initial: {
      opacity: 0,
      x: '20px',
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'anticipate',
      },
    },
    exit: {
      opacity: 0,
      x: '8px',
    },
  },
}

export { TooltipVariants }
