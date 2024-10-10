'use client'
import { Envelope } from 'phosphor-react'
import { Select, SelectAction, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue } from '../../../../src'

const SelectWithItemIcon = () => {
  return (
    <div className="flex items-center justify-center px-5 py-3">
      <Select>
        <SelectAction className="w-[20rem]">
          <SelectValue placeholder="Select email" />
        </SelectAction>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Email Address</SelectLabel>
            <SelectItem value="email1">
              <div className="flex items-center gap-2.5">
                <span>
                  <Envelope className="h-4 w-4" />
                </span>
                <span>johnny.cooper@example.com</span>
              </div>
            </SelectItem>
            <SelectItem value="email2">
              <div className="flex items-center gap-2.5">
                <span>
                  <Envelope className="h-4 w-4" />
                </span>
                <span>johnni.carlson@example.com</span>
              </div>
            </SelectItem>
            <SelectItem value="email3">
              <div className="flex items-center gap-2.5">
                <span>
                  <Envelope className="h-4 w-4" />
                </span>
                <span>carolyn.ramos@example.com</span>
              </div>
            </SelectItem>
            <SelectItem value="email4">
              <div className="flex items-center gap-2.5">
                <span>
                  <Envelope className="h-4 w-4" />
                </span>
                <span>jack.morris@example.com</span>
              </div>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

const SelectWithItemIconCode = {
  'SelectComponent.tsx': `
'use client'
import { Envelope } from 'phosphor-react'
import { Select, SelectAction, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue } from 'keep-react'

export const SelectComponent = () => {
  return (
    <Select>
      <SelectAction className="w-[20rem]">
        <SelectValue placeholder="Select email" />
      </SelectAction>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Email Address</SelectLabel>
          <SelectItem value="email1">
            <div className="flex items-center gap-2.5">
              <span>
                <Envelope className="h-4 w-4" />
              </span>
              <span>johnny.cooper@example.com</span>
            </div>
          </SelectItem>
          <SelectItem value="email2">
            <div className="flex items-center gap-2.5">
              <span>
                <Envelope className="h-4 w-4" />
              </span>
              <span>johnni.carlson@example.com</span>
            </div>
          </SelectItem>
          <SelectItem value="email3">
            <div className="flex items-center gap-2.5">
              <span>
                <Envelope className="h-4 w-4" />
              </span>
              <span>carolyn.ramos@example.com</span>
            </div>
          </SelectItem>
          <SelectItem value="email4">
            <div className="flex items-center gap-2.5">
              <span>
                <Envelope className="h-4 w-4" />
              </span>
              <span>jack.morris@example.com</span>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
`,
}

export { SelectWithItemIcon, SelectWithItemIconCode }
