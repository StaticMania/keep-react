'use client'
import { useState } from 'react'
import { InputOTP, InputOTPDivider, InputOTPGroup, InputOTPItem } from '../../../../src'

const InputOTPValue = () => {
  const [value, setValue] = useState('')
  return (
    <div className="flex items-center justify-center space-y-3 px-5 py-3">
      <InputOTP value={value} onChange={(value) => setValue(value)} maxLength={6}>
        <InputOTPGroup>
          <InputOTPItem index={0} />
          <InputOTPItem index={1} />
          <InputOTPItem index={2} />
        </InputOTPGroup>
        <InputOTPDivider />
        <InputOTPGroup>
          <InputOTPItem index={3} />
          <InputOTPItem index={4} />
          <InputOTPItem index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  )
}

const InputOTPCodeValue = {
  'InputOTPComponent.tsx': `
'use client'
import { useState } from 'react'
import { InputOTP, InputOTPGroup, InputOTPItem, InputOTPDivider } from 'keep-react'

export const InputOTPComponent = () => {
  const [value, setValue] = useState('')
  return (
    <InputOTP value={value} onChange={(value) => setValue(value)} maxLength={6}>
      <InputOTPGroup>
        <InputOTPItem index={0} />
        <InputOTPItem index={1} />
        <InputOTPItem index={2} />
      </InputOTPGroup>
      <InputOTPDivider />
      <InputOTPGroup>
        <InputOTPItem index={3} />
        <InputOTPItem index={4} />
        <InputOTPItem index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}
`,
}

export { InputOTPCodeValue, InputOTPValue }
