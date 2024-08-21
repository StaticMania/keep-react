'use client'
import { ChatText, Gear, SignIn } from 'phosphor-react'
import { Button } from '../../../../src'

const KeepButtonIcon = () => {
  return (
    <div className="flex items-center justify-center gap-x-5 px-5 py-3">
      <Button>
        <ChatText size={20} className="mr-1.5" />
        Messages
      </Button>
      <Button>
        <Gear size={20} className="mr-1.5" />
        Settings
      </Button>
      <Button>
        <SignIn size={20} className="mr-1.5" />
        Sign In
      </Button>
    </div>
  )
}

const KeepButtonIconCode = {
  'ButtonComponent.tsx': `
'use client'
import { Button } from 'keep-react'
import { ChatText, Gear, SignIn } from 'phosphor-react'

export const ButtonComponent = () => {
  return (
    <>
      <Button>
        <ChatText size={20} className="mr-1.5" />
        Messages
      </Button>
      <Button>
        <Gear size={20} className="mr-1.5" />
        Settings
      </Button>
      <Button>
        <SignIn size={20} className="mr-1.5" />
        Sign In
      </Button>
    </>
  )
}
`,
}

export { KeepButtonIcon, KeepButtonIconCode }
