'use client'
import Image from 'next/image'
import { Envelope, FacebookLogo, GoogleLogo, Lock } from 'phosphor-react'
import { Avatar, Badge, Button, Divider, Icon, Input, Label } from '../src'
import { Card } from './Card'

const page = () => {
  return (
    <section className="py-20">
      <div className="container space-y-4">
        <Card>
          <Card.Header>
            <Image src="/images/card/pizza.jpg" alt="image" width={640} height={427} />
          </Card.Header>
          <Card.Content className="space-y-3">
            <div className="flex items-center gap-1">
              <Badge color="primary">sm: $19</Badge>
              <Badge color="secondary">md: $29</Badge>
              <Badge color="success">lg: $49</Badge>
            </div>
            <Card.Title>Pizza with mushrooms</Card.Title>
            <Card.Description>
              iPhone 15 Pro is the first iPhone to feature an aerospace‑grade titanium design, using the same alloy that
              spacecraft use for missions to Mars.
            </Card.Description>
            <Button size="sm" color="primary">
              Buy Now
            </Button>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Title>Our Contributors</Card.Title>
            <Card.Description>They help us to grow up the keep react component library</Card.Description>
            <Avatar.Group className="mt-3">
              <Avatar img="/images/avatar/avatar-2.png" />
              <Avatar img="/images/avatar/avatar-3.png" />
              <Avatar img="/images/avatar/avatar-4.png" />
              <Avatar img="/images/avatar/avatar-5.png" />
              <Avatar.Counter>+9</Avatar.Counter>
            </Avatar.Group>
          </Card.Content>
        </Card>

        <Card className="max-w-sm">
          <Card.Content className="space-y-3">
            <Card.Header>
              <Card.Title>Create an account</Card.Title>
              <Card.Description>If you don&apos;t have any account then just click here</Card.Description>
            </Card.Header>
            <div className="flex items-center justify-between gap-3">
              <Button size="xs" variant="outline" color="secondary" className="w-full">
                <GoogleLogo size={20} className="mr-1.5" />
                Google
              </Button>
              <Button size="xs" variant="outline" color="secondary" className="w-full">
                <FacebookLogo size={20} className="mr-1.5" />
                Facebook
              </Button>
            </div>
            <Divider>Or</Divider>
            <form className="space-y-2">
              <fieldset className="space-y-1">
                <Label htmlFor="email">Email*</Label>
                <div className="relative">
                  <Input id="email" type="email" placeholder="Enter email" className="ps-11" />
                  <Icon>
                    <Envelope size={19} color="#AFBACA" />
                  </Icon>
                </div>
              </fieldset>
              <fieldset className="space-y-1">
                <Label htmlFor="password">Password*</Label>
                <div className="relative">
                  <Input id="password" placeholder="Enter password" type="password" className="ps-11" />
                  <Icon>
                    <Lock size={19} color="#AFBACA" />
                  </Icon>
                </div>
              </fieldset>
              <Button className="!mt-3 block w-full" size="xs" color="secondary" variant="outline">
                Create Account
              </Button>
            </form>
          </Card.Content>
        </Card>
      </div>
    </section>
  )
}

export default page
