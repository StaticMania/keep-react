/* eslint-disable no-unused-vars */
'use client'
import Link from 'next/link'
import { File, MagnifyingGlass, RadioButton } from 'phosphor-react'
import { ChangeEvent, FC, useCallback, useState, useTransition } from 'react'
import { routerPath, routes } from '~/routes/routes'
import { Icon, Input, Modal, Typography } from '../src'

interface ModalProps {
  isOpen: boolean
  closeModal: () => void
}

const Search: FC<ModalProps> = ({ closeModal, isOpen }) => {
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

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <Modal.Body className="block w-[35rem] p-8">
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
          <Typography variant="div" className={query.length ? 'hidden' : 'block'}>
            <p className="my-2 text-body-4 font-normal text-metal-400">Quick Access</p>
            <ul>
              <li className="rounded-md p-2 text-body-4 font-normal text-metal-900 transition-all duration-300 hover:bg-metal-25">
                <Link href="https://keepdesign.io/" target="_blank" className="flex items-center gap-1">
                  <File size={14} />
                  Figma
                </Link>
              </li>
              <li className="rounded-md p-2 text-body-4 font-normal text-metal-900 transition-all duration-300 hover:bg-metal-25">
                <Link href="/docs/getting-started/Introduction" className="flex items-center gap-1">
                  <File size={14} />
                  Installation
                </Link>
              </li>
              <li className="rounded-md p-2 text-body-4 font-normal text-metal-900 transition-all duration-300 hover:bg-metal-25">
                <Link href="/docs/getting-started/Typography" className="flex items-center gap-1">
                  <File size={14} />
                  Typography
                </Link>
              </li>
            </ul>
          </Typography>
          <Typography variant="div">
            <p className="my-2 text-body-4 font-normal text-metal-400">Components</p>

            {isPending ? (
              <p className="text-left text-body-4 font-normal text-metal-600">Loading...</p>
            ) : data.length > 0 ? (
              <ul>
                {data.map((route) => (
                  <li
                    key={route.id}
                    className="rounded-md p-2 text-body-4 font-normal text-metal-900 transition-all duration-300 hover:bg-metal-25">
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
          </Typography>
        </Modal.Content>
      </Modal.Body>
    </Modal>
  )
}

export default Search
