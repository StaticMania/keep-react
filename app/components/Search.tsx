/* eslint-disable no-unused-vars */
'use client'
import Link from 'next/link'
import { File, MagnifyingGlass, RadioButton } from 'phosphor-react'
import { ChangeEvent, Dispatch, FC, SetStateAction, useCallback, useEffect, useState, useTransition } from 'react'
import { quickAccessRoute, routerPath, routes } from '~/routes/routes'
import { Icon, Input, Modal } from '../src'

interface ModalProps {
  isOpen: boolean
  closeModal: () => void
  setIsOpen?: Dispatch<SetStateAction<boolean>>
}

const Search: FC<ModalProps> = ({ closeModal, isOpen, setIsOpen }) => {
  const [query, setQuery] = useState('')
  const [data, setData] = useState<routerPath[]>(routes)
  const [isPending, startTransition] = useTransition()
  type InputFocusCallback = (n: HTMLInputElement) => void

  const inputFocus = useCallback<InputFocusCallback>((node) => {
    if (node) {
      setTimeout(() => {
        node.focus()
      }, 1)
    }
  }, [])

  const handleSearchData = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase()
    setQuery(inputValue)
    startTransition(() => {
      if (inputValue.trim() === '') {
        setData(routes)
      } else {
        setData(routes.filter((item) => item.name.toLowerCase().includes(inputValue)))
      }
    })
  }

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
        setIsOpen && setIsOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [setIsOpen])

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <Modal.Body className="block bg-white p-8 dark:bg-metal-900 lg:w-[35rem]">
        <fieldset className="relative">
          <Input
            value={query}
            onChange={handleSearchData}
            ref={inputFocus}
            placeholder="Search Component"
            className="ps-11"
          />
          <Icon>
            <MagnifyingGlass size={19} color="#AFBACA" />
          </Icon>
        </fieldset>
        <Modal.Content id="search" className="mt-2 max-h-[300px] overflow-y-auto">
          <div className={query.length ? 'hidden' : 'block'}>
            <p className="my-2 text-body-4 font-normal text-metal-400 dark:text-metal-300">Quick Access</p>
            <ul>
              {quickAccessRoute.map((route) => (
                <li
                  key={route.id}
                  className="rounded-md p-2 text-body-4 font-normal text-metal-900 transition-all duration-300 hover:bg-metal-25 dark:text-white dark:hover:bg-metal-800">
                  <Link href={route.href} target={route.target} className="flex items-center gap-1">
                    <File size={14} />
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="my-2 text-body-4 font-normal text-metal-400 dark:text-metal-300">Components</p>

            {isPending ? (
              <p className="text-left text-body-4 font-normal text-metal-600">Loading...</p>
            ) : data.length > 0 ? (
              <ul>
                {data.map((route) => (
                  <li
                    key={route.id}
                    className="rounded-md p-2 text-body-4 font-normal text-metal-900 transition-all duration-300 hover:bg-metal-25 dark:text-white dark:hover:bg-metal-800">
                    <Link href={route.href} className="flex items-center gap-1">
                      <RadioButton size={14} />
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-left text-body-4 font-normal text-metal-600">No results found.</p>
            )}
          </div>
        </Modal.Content>
      </Modal.Body>
    </Modal>
  )
}

export default Search
