// import React, { useRef, useState } from 'react'

// const PinInput: React.FC = () => {
//   const [pin, setPin] = useState<string[]>(['', '', '', ''])
//   const inputRefs = useRef<HTMLInputElement[]>(Array.from({ length: 6 }, () => null))

//   const handleChange = (index: number, value: string) => {
//     if (value.match(/[0-9]/) && index < 4) {
//       const newPin = [...pin]
//       newPin[index] = value
//       setPin(newPin)

//       if (value !== '' && index < 3) {
//         inputRefs.current[index + 1].focus()
//       }
//     }
//   }

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
//     if (e.key === 'Backspace' && index > 0) {
//       const newPin = [...pin]
//       newPin[index - 1] = ''
//       setPin(newPin)
//       inputRefs.current[index - 1].focus()
//     }
//   }

//   return (
//     <div className="flex h-full items-center justify-center">
//       {pin.map((digit, index) => (
//         <input
//           key={index}
//           type="text"
//           maxLength={1}
//           value={digit}
//           onChange={(e) => handleChange(index, e.target.value)}
//           onKeyDown={(e) => handleKeyDown(e, index)}
//           className="focus:border-primary mx-1 h-10 w-10 rounded border text-center focus:outline-none"
//           ref={(input) => (inputRefs.current[index] = input)}
//         />
//       ))}
//     </div>
//   )
// }

// export default PinInput
