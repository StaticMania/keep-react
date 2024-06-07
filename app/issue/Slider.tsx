'use client'
import React, { useEffect, useState } from 'react'

const RangeSlider: React.FC = () => {
  const [minPrice, setMinPrice] = useState<number>(2500)
  const [maxPrice, setMaxPrice] = useState<number>(7500)
  const priceGap = 1000

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxPrice - priceGap)
    setMinPrice(value)
  }

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minPrice + priceGap)
    setMaxPrice(value)
  }

  const handleMinRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxPrice - priceGap)
    setMinPrice(value)
  }

  const handleMaxRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minPrice + priceGap)
    setMaxPrice(value)
  }

  useEffect(() => {
    const range = document.querySelector<HTMLElement>('.slider .progress')
    if (range) {
      range.style.left = (minPrice / 10000) * 100 + '%'
      range.style.right = 100 - (maxPrice / 10000) * 100 + '%'
    }
  }, [minPrice, maxPrice])

  return (
    <div className="w-[400px] rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex flex-col items-center">
          <span>Min</span>
          <input
            type="number"
            className="input-min w-24 rounded-lg bg-gray-200 px-4 py-2 text-center"
            value={minPrice}
            onChange={handleMinInputChange}
          />
        </div>
        <span className="mx-4">-</span>
        <div className="flex flex-col items-center">
          <span>Max</span>
          <input
            type="number"
            className="input-max w-24 rounded-lg bg-gray-200 px-4 py-2 text-center"
            value={maxPrice}
            onChange={handleMaxInputChange}
          />
        </div>
      </div>
      <div className="slider relative h-1 rounded bg-gray-300">
        <div className="progress absolute h-1 rounded bg-green-500" />
      </div>
      <div className="range-input relative mt-4">
        <input
          type="range"
          className="range-min pointer-events-none absolute top-[-5px] h-1 w-full appearance-none"
          min={0}
          max={10000}
          value={minPrice}
          onChange={handleMinRangeChange}
        />
        <input
          type="range"
          className="range-max pointer-events-none absolute top-[-5px] h-1 w-full appearance-none"
          min={0}
          max={10000}
          value={maxPrice}
          onChange={handleMaxRangeChange}
        />
      </div>
    </div>
  )
}

export default RangeSlider
