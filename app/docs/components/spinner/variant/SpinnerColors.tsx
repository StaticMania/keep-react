'use client'
import { Spinner } from '~/src'

const SpinnerColors = () => {
  return (
    <div className="my-5 flex gap-3">
      <Spinner color="failure" size="lg" />
      <Spinner color="gray" size="lg" />
      <Spinner color="info" size="lg" />
      <Spinner color="pink" size="lg" />
      <Spinner color="purple" size="lg" />
      <Spinner color="success" size="lg" />
      <Spinner color="warning" size="lg" />
    </div>
  )
}

const SpinnerColorsCode = `
"use client";
import { Spinner } from "keep-react";

export const SpinnerComponent = () => {
  return (
    <>
      <Spinner color="failure" size="lg" />
      <Spinner color="gray" size="lg" />
      <Spinner color="info" size="lg" />
      <Spinner color="pink" size="lg" />
      <Spinner color="purple" size="lg" />
      <Spinner color="success" size="lg" />
      <Spinner color="warning" size="lg" />
    </>
  );
}
`

export { SpinnerColors, SpinnerColorsCode }
