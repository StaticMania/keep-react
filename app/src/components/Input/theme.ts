interface keepInputTheme {
  input: string
  icon: string
}

export const inputTheme: keepInputTheme = {
  input:
    'flex h-11 w-full rounded-lg border px-3 py-2 text-body-4 font-normal text-metal-900 placeholder:font-normal placeholder:text-metal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metal-200 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  icon: 'pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 peer-disabled:pointer-events-none peer-disabled:opacity-50',
}
