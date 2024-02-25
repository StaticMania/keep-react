'use client'
import { CaretDown } from 'phosphor-react'
import { useState } from 'react'
import { cn } from '../src/helpers/cn'
import { Select } from './Select'

const Page = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [value, setValue] = useState<string | null>()
  const cars = ['Next JS', 'Nuxt JS', 'Vue JS', 'React JS']

  const handleValue = (value: string) => {
    setValue(value)
    setShowMenu(false)
  }

  return (
    <section className=" py-20">
      <div className="container">
        <div className="relative w-[20rem] space-y-2">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex w-full items-center justify-between rounded-md border border-metal-100 bg-white px-3 py-2.5">
            <span className="text-body-4 font-medium text-metal-600">{value ?? 'Select Your Car'}</span>
            <span>
              <CaretDown
                size={16}
                color="#5E718D"
                className={cn('transition-all duration-300', showMenu ? 'rotate-180' : 'rotate-0')}
              />
            </span>
          </button>
          {showMenu && (
            <div className="absolute z-50 w-full overflow-hidden rounded-md border border-metal-100 bg-white">
              {cars.map((car) => (
                <button
                  onClick={() => handleValue(car)}
                  key={car}
                  className="flex w-full justify-between border-b border-b-metal-50 px-3 py-2.5 text-left text-body-4 font-normal text-metal-600 transition-all duration-300 hover:bg-metal-900 hover:text-white">
                  {car}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="mt-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi eos temporibus quia laboriosam
            aspernatur similique quisquam voluptates quae? Quidem quibusdam quo beatae temporibus similique?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi eos temporibus quia laboriosam
            aspernatur similique quisquam voluptates quae? Quidem quibusdam quo beatae temporibus similique?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi eos temporibus quia laboriosam
            aspernatur similique quisquam voluptates quae? Quidem quibusdam quo beatae temporibus similique?
          </p>
        </div>

        <div>
          <Select>
            <Select.Item value="1">
              <span>Item</span>
              <span>One</span>
            </Select.Item>
          </Select>
        </div>
      </div>
    </section>
  )
}

export default Page
