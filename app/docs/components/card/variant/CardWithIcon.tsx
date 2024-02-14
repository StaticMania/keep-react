'use client'
import { ArchiveTray, CaretRight, DotsThreeVertical, PencilCircle } from 'phosphor-react'
import { Button, Card } from '../../../../src'

const CardWithIcon = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* ===CARD ONE=== */}
      <Card className="max-w-xl p-6">
        <Card.Container className="flex items-start gap-3.5 md:gap-5">
          <Card.Container className="flex items-center justify-center rounded-full bg-metal-50 p-2.5 md:p-4">
            <ArchiveTray size={28} color="#3D4A5C" />
          </Card.Container>
          <Card.Container className="flex flex-col gap-2">
            <Card.Title>Keep React</Card.Title>
            <Card.Description>
              Component design systems can help developers to be more productive by providing them with a ready-made set
              of components to use.
            </Card.Description>
            <Card.Link href="/" icon={<CaretRight size={16} color="#1B4DFF" />} iconPosition="left">
              Learn More
            </Card.Link>
          </Card.Container>
        </Card.Container>
      </Card>
      {/* ===CARD TWO=== */}
      <Card className="max-w-xl p-6">
        <Card.Container className="flex gap-5">
          <Card.Container className="flex items-start gap-5">
            <Card.Container className="flex items-center justify-start rounded-full bg-metal-50 p-2.5 md:p-4">
              <ArchiveTray size={28} color="#3D4A5C" />
            </Card.Container>
            <Card.Container className="flex flex-col gap-2">
              <Card.Title>Keep React</Card.Title>
              <Card.Description>
                Component design systems can help developers to be more productive by providing them with a ready-made
                set of components to use.
              </Card.Description>
            </Card.Container>
          </Card.Container>
          <Card.Container className="hidden items-start md:flex">
            <DotsThreeVertical size={24} color="#5E718D" />
          </Card.Container>
        </Card.Container>
      </Card>
      {/* ===CARD THREE=== */}
      <Card className="max-w-[280px] p-5 md:p-6">
        <Card.Container className="flex items-center justify-center">
          <PencilCircle size={80} color="#1B4DFF" />
        </Card.Container>
        <Card.Container className="text-center">
          <Card.Title>Keep React</Card.Title>
          <Card.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Card.Description>
        </Card.Container>
        <Card.Container className="mt-3 flex items-center justify-center">
          <Button size="sm">Learn More</Button>
        </Card.Container>
      </Card>
    </div>
  )
}

const CardWithIconCode = `
'use client'
import { Button, Card, Popover } from 'keep-react'
import { ArchiveTray, CaretRight, DotsThreeVertical, PencilCircle } from 'phosphor-react'

export const CardComponent = () => {
  return (
    <div>
      {/* ===CARD ONE=== */}
      <Card className="max-w-xl p-6">
        <Card.Container className="flex items-start gap-3.5 md:gap-5">
          <Card.Container className="flex items-center justify-center rounded-full bg-metal-50 p-2.5 md:p-4">
            <ArchiveTray size={28} color="#3D4A5C" />
          </Card.Container>
          <Card.Container className="flex flex-col gap-2">
            <Card.Title>Keep React</Card.Title>
            <Card.Description>
              Component design systems can help developers to be more productive by providing them with a ready-made set
              of components to use.
            </Card.Description>
            <Card.Link href="/" icon={<CaretRight size={16} color="#1B4DFF" />} iconPosition="left">
              Learn More
            </Card.Link>
          </Card.Container>
        </Card.Container>
      </Card>
      {/* ===CARD TWO=== */}
      <Card className="max-w-xl p-6">
        <Card.Container className="flex gap-5">
          <Card.Container className="flex items-start gap-5">
            <Card.Container className="flex items-center justify-start rounded-full bg-metal-50 p-2.5 md:p-4">
              <ArchiveTray size={28} color="#3D4A5C" />
            </Card.Container>
            <Card.Container className="flex flex-col gap-2">
              <Card.Title>Keep React</Card.Title>
              <Card.Description>
                Component design systems can help developers to be more productive by providing them with a ready-made
                set of components to use.
              </Card.Description>
            </Card.Container>
          </Card.Container>
          <Card.Container className="hidden items-start md:flex">
            <DotsThreeVertical size={24} color="#5E718D" />
          </Card.Container>
        </Card.Container>
      </Card>
      {/* ===CARD THREE=== */}
      <Card className="max-w-[280px] p-5 md:p-6">
        <Card.Container className="flex items-center justify-center">
          <PencilCircle size={80} color="#1B4DFF" />
        </Card.Container>
        <Card.Container className="text-center">
          <Card.Title>Keep React</Card.Title>
          <Card.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Card.Description>
        </Card.Container>
        <Card.Container className="mt-3 flex items-center justify-center">
          <Button  size="sm">
            Learn More
          </Button>
        </Card.Container>
      </Card>
    </div>
  )
}
`

export { CardWithIcon, CardWithIconCode }
