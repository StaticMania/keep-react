'use client'
import { User } from 'phosphor-react'
import { Select, SelectAction, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue } from '../../../../src'

const SelectWithActionIcon = () => {
  return (
    <div className="flex items-center justify-center px-5 py-3">
      <Select>
        <SelectAction className="w-[20rem]">
          <div className="flex items-center gap-2.5">
            <span>
              <User className="h-4 w-4" />
            </span>
            <SelectValue placeholder="Select team member" />
          </div>
        </SelectAction>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Member</SelectLabel>
            <SelectItem value="jd">John Doe</SelectItem>
            <SelectItem value="am">Alex Mack</SelectItem>
            <SelectItem value="gb">Gordon Brown</SelectItem>
            <SelectItem value="jc">Jimmie Crawford</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

const SelectWithActionIconCode = {
  'SelectComponent.tsx': `
'use client'
import { User } from 'phosphor-react'
import { Select, SelectAction, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue } from 'keep-react'

export const SelectComponent = () => {
  return (
    <Select>
      <SelectAction className="w-[20rem]">
        <div className="flex items-center gap-2.5">
          <span>
            <User className="h-4 w-4" />
          </span>
          <SelectValue placeholder="Select team member" />
        </div>
      </SelectAction>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Member</SelectLabel>
          <SelectItem value="jd">John Doe</SelectItem>
          <SelectItem value="am">Alex Mack</SelectItem>
          <SelectItem value="gb">Gordon Brown</SelectItem>
          <SelectItem value="jc">Jimmie Crawford</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
`,
}

export { SelectWithActionIcon, SelectWithActionIconCode }
