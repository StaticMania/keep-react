'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'phosphor-react'
import { useState } from 'react'
import { Button } from '~/app/src'
import { cn } from '~/app/src/utils/cn'

const Steps = () => {
  const [step, setStep] = useState(0)

  return (
    <div className="mx-auto w-full max-w-2xl rounded-md bg-white p-8 shadow-lg">
      <div className="flex items-center justify-between gap-3">
        <AnimatePresence>
          <motion.div
            transition={{ duration: 0.4, ease: 'anticipate' }}
            className={cn(
              'relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2  text-body-4 font-semibold text-metal-200 transition-colors duration-300',
              step >= 1 ? 'border-metal-900 bg-metal-900' : 'border-metal-200',
            )}>
            {step >= 1 ? (
              <motion.span
                initial={{ rotate: '180deg', opacity: 0.5 }}
                animate={{ rotate: '0deg', opacity: 1 }}
                exit={{ rotate: '180deg', opacity: 0.5 }}
                transition={{ duration: 0.4 }}
                className="text-current">
                <Check className="size-5" />
              </motion.span>
            ) : (
              1
            )}
          </motion.div>
          <motion.div className="relative h-1 w-full rounded-full bg-metal-100">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: step >= 1 ? '100%' : '0%' }}
              transition={{ duration: 0.4, ease: 'anticipate', delay: 0.05 }}
              className="absolute bottom-0 left-0 top-0 rounded-full bg-metal-900"
            />
          </motion.div>
          <motion.div
            transition={{ duration: 0.4, ease: 'anticipate' }}
            className={cn(
              'relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2  text-body-4 font-semibold text-metal-200 transition-colors duration-300',
              step >= 2 ? 'border-metal-900 bg-metal-900' : 'border-metal-200',
            )}>
            {step >= 2 ? (
              <motion.span
                initial={{ rotate: '180deg', opacity: 0.5 }}
                animate={{ rotate: '0deg', opacity: 1 }}
                exit={{ rotate: '180deg', opacity: 0.5 }}
                transition={{ duration: 0.4 }}
                className="text-current">
                <Check className="size-5" />
              </motion.span>
            ) : (
              2
            )}
          </motion.div>
          <motion.div className="relative h-1 w-full rounded-full bg-metal-100">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: step >= 2 ? '100%' : '0%' }}
              transition={{ duration: 0.4, ease: 'anticipate', delay: 0.05 }}
              className="absolute bottom-0 left-0 top-0 rounded-full bg-metal-900"
            />
          </motion.div>
          <motion.div
            transition={{ duration: 0.4, ease: 'anticipate' }}
            className={cn(
              'relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2  text-body-4 font-semibold text-metal-200 transition-colors duration-300',
              step >= 3 ? 'border-metal-900 bg-metal-900' : 'border-metal-200',
            )}>
            {step >= 3 ? (
              <motion.span
                initial={{ rotate: '180deg', opacity: 0.5 }}
                animate={{ rotate: '0deg', opacity: 1 }}
                exit={{ rotate: '180deg', opacity: 0.5 }}
                transition={{ duration: 0.4 }}
                className="text-current">
                <Check className="size-5" />
              </motion.span>
            ) : (
              3
            )}
          </motion.div>
          <motion.div className="relative h-1 w-full rounded-full bg-metal-100">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: step >= 3 ? '100%' : '0%' }}
              transition={{ duration: 0.4, ease: 'anticipate', delay: 0.05 }}
              className="absolute bottom-0 left-0 top-0 rounded-full bg-metal-900"
            />
          </motion.div>
          <motion.div
            transition={{ duration: 0.4, ease: 'anticipate' }}
            className={cn(
              'relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2  text-body-4 font-semibold text-metal-200 transition-colors duration-300',
              step >= 4 ? 'border-metal-900 bg-metal-900' : 'border-metal-200',
            )}>
            {step >= 4 ? (
              <motion.span
                initial={{ rotate: '180deg', opacity: 0.5 }}
                animate={{ rotate: '0deg', opacity: 1 }}
                exit={{ rotate: '180deg', opacity: 0.5 }}
                transition={{ duration: 0.4 }}
                className="text-current">
                <Check className="size-5" />
              </motion.span>
            ) : (
              4
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="my-6 h-48 rounded-lg border-2 border-dashed border-gray-200 bg-gray-100 p-2" />
      <div className="flex items-center justify-end gap-2">
        <Button onClick={() => setStep(step - 1)} variant="link">
          Prev
        </Button>
        <Button onClick={() => setStep(step + 1)}>Next</Button>
      </div>
    </div>
  )
}

export default Steps
