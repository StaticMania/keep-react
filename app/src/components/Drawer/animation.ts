import { Variants } from 'framer-motion'

export interface DrawerVariantsProps {
  left: Variants
  right: Variants
  top: Variants
  bottom: Variants
}

const drawerVariants: DrawerVariantsProps = {
  left: {
    initial: { x: '-100%', opacity: 0.5 },
    animate: { opacity: 1, height: '100%', x: 0, transition: { duration: 0.3, ease: 'anticipate' } },
    exit: { opacity: 1, x: '-100%' },
  },
  right: {
    initial: { x: '100%', opacity: 0.5 },
    animate: { opacity: 1, height: '100%', x: 0, transition: { duration: 0.3, ease: 'anticipate' } },
    exit: { opacity: 1, x: '100%' },
  },
  top: {
    initial: { y: '-100%', opacity: 0.5 },
    animate: { opacity: 1, height: 'auto', y: 0, transition: { duration: 0.3, ease: 'anticipate' } },
    exit: { opacity: 1, y: '-100%' },
  },
  bottom: {
    initial: { y: '100%', opacity: 0.5 },
    animate: { opacity: 1, overflow: 'hidden', y: 0, transition: { duration: 0.3, ease: 'anticipate' } },
    exit: { opacity: 1, y: '100%' },
  },
}

export { drawerVariants }
