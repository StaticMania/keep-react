'use client'
import { EyeSlash, Lock } from 'phosphor-react'
import { Label, TextInput } from '~/src'

const InputWithAddonAndIcon = () => {
  return (
    <div>
      <Label htmlFor="#id-10" value="Password" />
      <TextInput
        id="#id-10"
        placeholder="example@gmail.com"
        color="gray"
        sizing="md"
        type="password"
        addon={<Lock size={20} color="#5E718D" />}
        addonPosition="left"
        icon={<EyeSlash size={20} color="#5E718D" />}
        iconPosition="right"
      />
    </div>
  )
}

const InputWithAddonAndIconCode = `
"use client";
import { Label,TextInput } from "keep-react";
import { EyeSlash, Lock } from "phosphor-react";

export const TextInputComponent = () => {
  return (
    <div>
      <Label htmlFor="#id-10" value="Password" />
      <TextInput
        id="#id-10"
        placeholder="example@gmail.com"
        color="gray"
        sizing="md"
        type="password"
        addon={<Lock size={20} color="#5E718D" />}
        addonPosition="left"
        icon={<EyeSlash size={20} color="#5E718D" />}
        iconPosition="right"
      />
    </div>
  );
}
`

export { InputWithAddonAndIcon, InputWithAddonAndIconCode }
