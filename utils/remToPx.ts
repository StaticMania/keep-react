export const remToPx = (rem: string) => {
  const remValue = Number(rem.split('rem')[0])
  return remValue * 16 + 'px'
}
