'use client'
import { motion } from 'framer-motion'
import { Dispatch, SetStateAction, useState } from 'react'

const tabs = ['Home', 'Search', 'About', 'FAQ']

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0])

  return (
    <div className="flex flex-wrap items-center gap-2 bg-slate-900 px-4 py-14">
      {tabs.map((tab) => (
        <Chip text={tab} selected={selected === tab} setSelected={setSelected} key={tab} />
      ))}
    </div>
  )
}

const Chip = ({
  text,
  selected,
  setSelected,
}: {
  text: string
  selected: boolean
  setSelected: Dispatch<SetStateAction<string>>
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected ? 'text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-slate-200'
      } relative rounded-md px-2.5 py-0.5 text-sm transition-colors`}>
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: 'spring', duration: 0.5 }}
          className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600"></motion.span>
      )}
    </button>
  )
}

export default ChipTabs
