export const ContainerData = [
  { id: 1, name: 'container', breakpoints: 'None', properties: 'width: 100%' },
  { id: 2, name: '', breakpoints: 'sm (640px)', properties: 'max-width: 640px' },
  { id: 3, name: '', breakpoints: 'md (768px)', properties: 'max-width: 768px' },
  { id: 4, name: '', breakpoints: 'lg (1024px)', properties: 'max-width: 1024px' },
  { id: 5, name: '', breakpoints: 'xl (1280px)', properties: 'max-width: 1280px' },
  { id: 6, name: '', breakpoints: '2xl (1536px)', properties: 'max-width: 1536px' },
]

const ContainerCenter = {
  'tailwind.config.ts': `
const config = {
  theme: {
    container: {
      center: true
    }
  }
}
`,
}

const ContainerHorizontalPadding = {
  'tailwind.config.ts': `
const config = {
  theme: {
    container: {
      padding: '2rem',
    },
  },
}
`,
}

const ContainerBreakPointPadding = {
  'tailwind.config.ts': `
const config = {
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
}
`,
}

export { ContainerBreakPointPadding, ContainerCenter, ContainerHorizontalPadding }
