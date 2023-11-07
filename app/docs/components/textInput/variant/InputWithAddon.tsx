'use client'
import { TextInput } from '~/src'
import { Envelope } from 'phosphor-react'

const InputWithAddon = () => {
  return (
    <TextInput
      id="#id-9"
      placeholder="example@gmail.com"
      color="gray"
      sizing="md"
      addon={<Envelope size={20} color="#5E718D" />}
      addonPosition="left"
    />
  )
}

const InputWithAddonCode = `
"use client";
import { TextInput } from "keep-react";
import { Envelope } from "phosphor-react";

export const TextInputComponent = () => {
  return (
    <TextInput
      id="#id-9"
      placeholder="example@gmail.com"
      color="gray"
      sizing="md"
      addon={<Envelope size={20} color="#5E718D" />}
      addonPosition="left"
    />
  );
}
`

export { InputWithAddon, InputWithAddonCode }
