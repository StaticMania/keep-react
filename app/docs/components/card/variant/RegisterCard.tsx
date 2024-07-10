'use client'
import { Envelope, FacebookLogo, GoogleLogo, Lock } from 'phosphor-react'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Divider,
  Input,
  InputIcon,
  Label,
} from '../../../../src'

const RegisterCard = () => {
  return (
    <Card className="max-w-sm">
      <CardContent className="space-y-3">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>If you don&apos;t have any account then just click here</CardDescription>
        </CardHeader>
        <div className="flex items-center justify-between gap-3">
          <Button variant="outline" color="secondary" className="w-full">
            <GoogleLogo size={20} className="mr-1.5" />
            Google
          </Button>
          <Button variant="outline" color="secondary" className="w-full">
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
              <InputIcon>
                <Envelope size={19} color="#AFBACA" />
              </InputIcon>
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="password">Password*</Label>
            <div className="relative">
              <Input id="password" placeholder="Enter password" type="password" className="ps-11" />
              <InputIcon>
                <Lock size={19} color="#AFBACA" />
              </InputIcon>
            </div>
          </fieldset>
          <Button type="submit" className="!mt-3 block w-full" color="secondary">
            Create Account
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

const RegisterCardCode = `
'use client'
import { Envelope, FacebookLogo, GoogleLogo, Lock } from 'phosphor-react'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Divider,
  Input,
  InputIcon,
  Label,
} from 'keep-react'

export const CardComponent = () => {
  return (
    <Card className="max-w-sm">
      <CardContent className="space-y-3">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>If you don&apos;t have any account then just click here</CardDescription>
        </CardHeader>
        <div className="flex items-center justify-between gap-3">
          <Button variant="outline" color="secondary" className="w-full">
            <GoogleLogo size={20} className="mr-1.5" />
            Google
          </Button>
          <Button variant="outline" color="secondary" className="w-full">
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
              <InputIcon>
                <Envelope size={19} color="#AFBACA" />
              </InputIcon>
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="password">Password*</Label>
            <div className="relative">
              <Input id="password" placeholder="Enter password" type="password" className="ps-11" />
              <InputIcon>
                <Lock size={19} color="#AFBACA" />
              </InputIcon>
            </div>
          </fieldset>
          <Button type="submit" className="!mt-3 block w-full" color="secondary">
            Create Account
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
`

export { RegisterCard, RegisterCardCode }
