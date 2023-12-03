'use client'
import { Card } from './Card'
import Link from 'next/link'
import { ArchiveTray, CaretRight } from 'phosphor-react'
import { Avatar } from '~/src'
import { Typography } from '~/src'

const page = () => {
  return (
    <section className="py-5">
      <div className="container grid grid-cols-2 space-y-6">
        <div className="col-span-1 space-y-6">
          <Card className="space-y-3">
            <Card.Title>Keep Card Title here</Card.Title>
            <Card.Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took.
            </Card.Description>
            <Card.Link className="!mt-6" icon={<CaretRight size={16} />}>
              <Link href="#">Learn More</Link>
            </Card.Link>
          </Card>
          <Card>
            <Card.Container className="sm:grid sm:grid-cols-12 sm:gap-4">
              <Card.Icon className="sm:col-span-2">
                <ArchiveTray size={28} color="#3D4A5C" />
              </Card.Icon>
              <Card.Body className="space-y-3 sm:col-span-10">
                <Card.Title>Keep Card Title here</Card.Title>
                <Card.Description>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took.
                </Card.Description>
                <Card.Link className="!mt-6" icon={<CaretRight size={16} />}>
                  <Link href="#">Learn More</Link>
                </Card.Link>
              </Card.Body>
            </Card.Container>
          </Card>
          <Card>
            <Card.Body className="space-y-3 sm:col-span-10">
              <Card.Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took.
              </Card.Description>
              <Card.Avatar>
                <Avatar img="/images/avatar/avatar-4.png" shape="circle" size="lg" />
                <Card.Container>
                  <Card.Avatar.Title>Kathryn Murphy</Card.Avatar.Title>
                  <Card.Avatar.Details>Product Designer</Card.Avatar.Details>
                </Card.Container>
              </Card.Avatar>
            </Card.Body>
          </Card>
        </div>
        <div className="col-span-1">
          <Typography variant="heading-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officia.
          </Typography>
        </div>

        <h2 className="text-heading-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore et eum quae pariatur deserunt
          excepturi ipsa, voluptatum officiis repudiandae animi explicabo debitis expedita atque vero saepe repellendus
          sunt ipsum.
        </h2>
      </div>
    </section>
  )
}

export default page
