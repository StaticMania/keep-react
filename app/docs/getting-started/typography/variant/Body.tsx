const BodyTypo = () => {
  return (
    <div className="space-y-4">
      <p className="text-body-1">The quick brown fox jumps over the lazy dog</p>
      <p className="text-body-2">The quick brown fox jumps over the lazy dog</p>
      <p className="text-body-3">The quick brown fox jumps over the lazy dog</p>
      <p className="text-body-4">The quick brown fox jumps over the lazy dog</p>
      <p className="text-body-5">The quick brown fox jumps over the lazy dog</p>
    </div>
  )
}

const BodyTypoCode = {
  Code: `
export const BodyTypography = () => {
  return (
    <div className="space-y-4">
      <p className="text-body-1">The quick brown fox jumps over the lazy dog</p>
      <p className="text-body-2">The quick brown fox jumps over the lazy dog</p>
      <p className="text-body-3">The quick brown fox jumps over the lazy dog</p>
      <p className="text-body-4">The quick brown fox jumps over the lazy dog</p>
      <p className="text-body-5">The quick brown fox jumps over the lazy dog</p>
    </div>
  )
}
`,
}

export { BodyTypo, BodyTypoCode }
