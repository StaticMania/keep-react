const Display = () => {
  return (
    <div className="py-3">
      <h1 className="text-display">Display</h1>
    </div>
  )
}

const DisplayCode = {
  Code: `
export const Display = () => {
  return <h1 className="text-display">Display</h1>
}
`,
}

export { Display, DisplayCode }
