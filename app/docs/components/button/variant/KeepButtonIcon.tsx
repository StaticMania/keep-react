'use client'
import { Button } from '../../../../src'
import { ChatText, Gear, SignIn } from 'phosphor-react'

const KeepButtonIcon = () => {
  return (
    <div className="flex h-24 flex-wrap items-center gap-2 p-4">
      <Button>
        <ChatText size={20} className="mr-1" />
        Messages
      </Button>
      <Button>
        <Gear size={20} className="mr-1" />
        Settings
      </Button>
      <Button>
        <SignIn size={20} className="mr-1" />
        SignIn
      </Button>
    </div>
  )
}

const KeepButtonIconCode = `
'use client'
import { Button } from 'keep-react'
import { ChatText, Gear, SignIn } from 'phosphor-react'

const KeepButtonIcon = () => {
  return (
    <>
      <Button>
        <ChatText size={20} className="mr-1" />
        Messages
      </Button>
      <Button>
        <Gear size={20} className="mr-1" />
        Settings
      </Button>
      <Button>
        <SignIn size={20} className="mr-1" />
        SignIn
      </Button>
    </>
  )
}
`

export { KeepButtonIcon, KeepButtonIconCode }
