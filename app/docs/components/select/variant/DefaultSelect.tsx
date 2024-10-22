import { Select, SelectAction, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue } from '../../../../src'

const DefaultSelect = () => {
  return (
    <div className="flex items-center justify-center px-5 py-3">
      <Select>
        <SelectAction className="w-[20rem]">
          <SelectValue placeholder="Select team" />
        </SelectAction>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Team</SelectLabel>
            <SelectItem value="gd">Graphic Designer</SelectItem>
            <SelectItem value="ud">UX Designer </SelectItem>
            <SelectItem value="pm">Product Manager</SelectItem>
            <SelectItem value="wde">Web Designer</SelectItem>
            <SelectItem value="swe">Software Engineer</SelectItem>
            <SelectItem value="mm">Marketing Manager</SelectItem>
            <SelectItem value="wd">Web Developer</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

const DefaultSelectCode = {
  'SelectComponent.tsx': `
import { Select, SelectAction, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue } from 'keep-react'

export const SelectComponent = () => {
  return (
    <Select>
      <SelectAction className="w-[20rem]">
        <SelectValue placeholder="Select team" />
      </SelectAction>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Team</SelectLabel>
          <SelectItem value="gd">Graphic Designer</SelectItem>
          <SelectItem value="ud">UX Designer </SelectItem>
          <SelectItem value="pm">Product Manager</SelectItem>
          <SelectItem value="wde">Web Designer</SelectItem>
          <SelectItem value="swe">Software Engineer</SelectItem>
          <SelectItem value="mm">Marketing Manager</SelectItem>
          <SelectItem value="wd">Web Developer</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

`,
}

export { DefaultSelect, DefaultSelectCode }
