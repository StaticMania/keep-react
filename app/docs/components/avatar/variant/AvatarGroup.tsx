import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from '../../../../src'

const AvatarGroupComponent = () => {
  return (
    <div className="px-5 py-3">
      <AvatarGroup>
        <Avatar>
          <AvatarImage src="/images/avatar/avatar-1.png" />
          <AvatarFallback>KR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/images/avatar/avatar-2.png" />
          <AvatarFallback>DR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/images/avatar/avatar-3.png" />
          <AvatarFallback>NR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/images/avatar/avatar-4.png" />
          <AvatarFallback>MR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/images/avatar/avatar-5.png" />
          <AvatarFallback>NC</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  )
}

const AvatarGroupCode = {
  'AvatarComponent.tsx': `
import { Avatar, AvatarGroup, AvatarImage, AvatarFallback } from 'keep-react'

const AvatarGroupComponent = () => {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src="/images/avatar/avatar-1.png" />
        <AvatarFallback>KR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/images/avatar/avatar-2.png" />
        <AvatarFallback>DR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/images/avatar/avatar-3.png" />
        <AvatarFallback>NR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/images/avatar/avatar-4.png" />
        <AvatarFallback>MR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/images/avatar/avatar-5.png" />
        <AvatarFallback>NC</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  )
}
`,
}

export { AvatarGroupCode, AvatarGroupComponent }
