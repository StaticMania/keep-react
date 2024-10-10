'use client'
import { useRouter } from 'next/navigation'
import { File, RadioButton } from 'phosphor-react'
import { Dispatch, FC, SetStateAction, useCallback, useEffect } from 'react'
import { quickAccessRoute, routes } from '../../routes/routes'
import { ModalDescription, ModalTitle, VisuallyHidden } from '../src'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './Command'

interface SearchProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Search: FC<SearchProps> = ({ open, setOpen }) => {
  const router = useRouter()
  const runCommand = useCallback(
    (command: () => unknown) => {
      setOpen && setOpen(false)
      command()
    },
    [setOpen],
  )

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen && setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [setOpen])

  return (
    <CommandDialog showCloseIcon={false} open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <VisuallyHidden>
        <ModalTitle>Components</ModalTitle>
        <ModalDescription>Search for components</ModalDescription>
      </VisuallyHidden>
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Quick Links">
          {quickAccessRoute.map((route) => (
            <CommandItem
              key={route.id}
              onSelect={() => {
                runCommand(() => router.push(route.href))
              }}>
              <File />
              {route.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Components">
          {routes.map((route) => (
            <CommandItem
              key={route.id}
              onSelect={() => {
                runCommand(() => router.push(route.href))
              }}>
              <RadioButton />
              {route.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

export default Search
