'use client'
import Image from 'next/image'
import { Button, Card } from '../../../../src'

const ProductCard = () => {
  return (
    <Card>
      <Card.Header>
        <Image src="https://via.placeholder.com/600x400" alt="image" width={600} height={400} />
      </Card.Header>
      <Card.Content className="space-y-3">
        <Card.Title>Lorem ipsum dolor sit</Card.Title>
        <Card.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam animi voluptas perspiciatis quidem esse!
        </Card.Description>
        <Button size="sm" color="primary">
          Buy Now
        </Button>
      </Card.Content>
    </Card>
  )
}

const ProductCardCode = `
'use client'
import Image from 'next/image'
import { Button, Card } from 'keep-react'

export const CardComponent = () => {
  return (
    <Card>
      <Card.Header>
        <Image src="https://via.placeholder.com/600x400" alt="image" width={600} height={400} />
      </Card.Header>
      <Card.Content className="space-y-3">
        <Card.Title>Lorem ipsum dolor sit</Card.Title>
        <Card.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam animi voluptas perspiciatis quidem esse!
        </Card.Description>
        <Button size="sm" color="primary">
          Buy Now
        </Button>
      </Card.Content>
    </Card>
  )
}
`

export { ProductCard, ProductCardCode }
