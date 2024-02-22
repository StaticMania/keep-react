'use client'
import { Envelope, Lock } from 'phosphor-react'
import { Button } from '../src'
import { Icon } from './Input/Icon'
import { Input } from './Input/Input'
import { Label } from './label'

const Page = () => {
  return (
    <section className="py-20">
      <div className="container space-y-3">
        <form className="mx-auto max-w-xs space-y-2">
          <fieldset className="space-y-1">
            <Label htmlFor="name">Enter Name</Label>
            <Input id="name" placeholder="Enter name" type="text" />
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="email">Enter E-mail</Label>
            <Input id="email" placeholder="Enter e-mail" type="email" />
          </fieldset>
          <Button className="w-full" size="sm">
            Submit
          </Button>
        </form>

        <fieldset className="mx-auto max-w-sm space-y-1">
          <Label htmlFor="name1">Enter Name</Label>
          <div className="relative flex items-center">
            <Input id="name1" placeholder="Enter name" className="ps-10" />
            <Icon>
              <Envelope size={20} color="#AFBACA" />
            </Icon>
          </div>
        </fieldset>
        <fieldset className="relative mx-auto max-w-sm">
          <Input placeholder="Enter password" type="password" className="ps-10" />
          <Icon>
            <Lock size={20} color="#AFBACA" />
          </Icon>
        </fieldset>

        <div className="mt-5">
          <form className="mx-auto max-w-md space-y-2 rounded-lg border p-8">
            <fieldset className="space-y-1">
              <Label htmlFor="name">Email</Label>
              <div className="relative">
                <Input placeholder="Enter email" className="ps-11" />
                <Icon>
                  <Envelope size={19} color="#AFBACA" />
                </Icon>
              </div>
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input id="password" placeholder="Enter password" type="password" className="ps-11" />
                <Icon>
                  <Lock size={19} color="#AFBACA" />
                </Icon>
              </div>
            </fieldset>
            <Button size="sm" color="secondary" type="submit">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Page
