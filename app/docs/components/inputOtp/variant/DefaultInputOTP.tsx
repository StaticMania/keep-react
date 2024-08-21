import { InputOTP, InputOTPGroup, InputOTPItem } from '../../../../src'

const DefaultInputOTP = () => {
  return (
    <div className="flex items-center justify-center px-5 py-3">
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPItem index={0} />
          <InputOTPItem index={1} />
          <InputOTPItem index={2} />
          <InputOTPItem index={3} />
          <InputOTPItem index={4} />
          <InputOTPItem index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  )
}

const DefaultInputOTPCode = {
  'InputOTPComponent.tsx': `
import { InputOTP, InputOTPGroup, InputOTPItem } from 'keep-react'

export const InputOTPComponent = () => {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPItem index={0} />
        <InputOTPItem index={1} />
        <InputOTPItem index={2} />
        <InputOTPItem index={3} />
        <InputOTPItem index={4} />
        <InputOTPItem index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}
`,
}

export { DefaultInputOTP, DefaultInputOTPCode }
