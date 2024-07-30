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

/*
<div className="flex flex-col items-center gap-5">
          <Input placeholder="Enter name" type="text" />
          <div className="relative">
            <input
              type="text"
              id="example13"
              placeholder=" "
              className="peer flex h-11 w-full rounded-lg border bg-transparent px-3 py-2 text-body-4 font-normal text-metal-900 placeholder:font-normal placeholder:text-metal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metal-200 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-metal-800 dark:bg-transparent dark:text-white dark:placeholder:text-metal-300 dark:focus-visible:ring-metal-900"
            />
            <label
              htmlFor="example13"
              className="peer-focus:base absolute left-2 top-0 z-10 -translate-y-2 transform bg-transparent px-1 text-body-5 text-metal-600 transition-all peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-sm peer-focus:-translate-y-2 peer-focus:bg-metal-900 peer-focus:text-body-5 peer-disabled:bg-transparent dark:bg-transparent">
              Full name
            </label>
          </div>
        </div>

*/
