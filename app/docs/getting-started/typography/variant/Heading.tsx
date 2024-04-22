const Heading = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-heading-1">The quick brown fox</h1>
      <h2 className="text-heading-2">The quick brown fox</h2>
      <h3 className="text-heading-3">The quick brown fox</h3>
      <h4 className="text-heading-4">The quick brown fox</h4>
      <h5 className="text-heading-5">The quick brown fox</h5>
      <h6 className="text-heading-6">The quick brown fox</h6>
    </div>
  )
}

const HeadingCode = `
export const HeadingTypography = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-heading-1">The quick brown fox</h1>
      <h2 className="text-heading-2">The quick brown fox</h2>
      <h3 className="text-heading-3">The quick brown fox</h3>
      <h4 className="text-heading-4">The quick brown fox</h4>
      <h5 className="text-heading-5">The quick brown fox</h5>
      <h6 className="text-heading-6">The quick brown fox</h6>
    </div>
  )
}
`

export { Heading, HeadingCode }
