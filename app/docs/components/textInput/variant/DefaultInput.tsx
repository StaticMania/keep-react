'use client'
import { TextInput } from '../../../../src'

const DefaultInput = () => {
  return <TextInput id="#id-6" placeholder="Default Input Field" color="gray" />
}

const DefaultInputCode = `
"use client";
import { TextInput } from "keep-react";

export const TextInputComponent = () => {
  return (
    <TextInput id="input" placeholder="Default Input Field" color="gray" />
  );
}
`

export { DefaultInputCode, DefaultInput }
