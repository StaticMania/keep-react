'use client'
import { Cube } from 'phosphor-react'
import { Button } from './Button/Button'
import { ButtonGroup } from './Button/ButtonGroup'

const New = () => {
  return (
    <section className="py-10">
      <div className="container flex items-end gap-5">
        <Button size="md" color="error">
          <Cube size={20} className="mr-2" />
          Learn More
        </Button>

        <ButtonGroup>
          <Button shape="icon" position="start" size="md" color="primary">
            <Cube size={16} />
          </Button>
          <Button shape="icon" position="center" size="md" color="primary">
            <Cube size={16} />
          </Button>
          <Button shape="icon" position="end" size="md" color="primary">
            <Cube size={16} />
          </Button>
        </ButtonGroup>
      </div>
    </section>
  )
}

export default New
