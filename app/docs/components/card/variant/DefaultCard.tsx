import { Card, CardContent, CardDescription, CardTitle } from '../../../../src'

const DefaultCard = () => {
  return (
    <Card className="max-w-md">
      <CardContent>
        <CardTitle>Keep design system</CardTitle>
        <CardDescription>
          Component design systems can help developers to be more productive by providing them with a ready-made set of
          components to use.
        </CardDescription>
      </CardContent>
    </Card>
  )
}

const DefaultCardCode = {
  'CardComponent.tsx': `
import { Card, CardContent, CardDescription, CardTitle }  from 'keep-react'

export const CardComponent = () => {
  return (
    <Card className="max-w-md">
      <CardContent>
        <CardTitle>Keep design system</CardTitle>
        <CardDescription>
          Component design systems can help developers to be more productive by providing them with a ready-made set of
          components to use.
        </CardDescription>
      </CardContent>
    </Card>
  )
}
`,
}

export { DefaultCard, DefaultCardCode }
