'use client'
import { Card } from '../../../../src'

const DefaultCard = () => {
  return (
    <Card className="max-w-md">
      <Card.Content>
        <Card.Title>Keep design system</Card.Title>
        <Card.Description>
          Component design systems can help developers to be more productive by providing them with a ready-made set of
          components to use.
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

const DefaultCardCode = `
'use client'
import { Card } from 'keep-react'

export const CardComponent = () => {
  return (
    <Card className="max-w-md">
      <Card.Content>
        <Card.Title>Keep design system</Card.Title>
        <Card.Description>
          Component design systems can help developers to be more productive by providing them with a ready-made set of
          components to use.
        </Card.Description>
      </Card.Content>
    </Card>
  )
}
`

export { DefaultCard, DefaultCardCode }
