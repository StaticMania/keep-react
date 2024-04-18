'use client'
import { Tooltip } from './Tooltip'

const Components = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h1 className="mb-10 text-heading-3 font-medium text-metal-700">New Component</h1>

        <div className="mt-10 flex items-center gap-6">
          <Tooltip>
            <Tooltip.Action>Tooltip</Tooltip.Action>
            <Tooltip.Content>
              <p className="text-body-5 font-medium text-metal-900">Tooltips - Title here</p>
            </Tooltip.Content>
          </Tooltip>
          <Tooltip>
            <Tooltip.Action>Tooltip</Tooltip.Action>
            <Tooltip.Content className="bg-primary-500" fill="#1B4DFF">
              <p className="text-body-5 font-medium text-white">Tooltips - Title here</p>
            </Tooltip.Content>
          </Tooltip>
          <Tooltip>
            <Tooltip.Action>Tooltip</Tooltip.Action>
            <Tooltip.Content className="bg-white px-4 py-3">
              <p className="mb-1 text-body-3 font-medium text-metal-900">Tooltips - Title here</p>
              <p className="text-body-5 font-normal text-metal-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </Tooltip.Content>
          </Tooltip>
          <Tooltip>
            <Tooltip.Action>Tooltip</Tooltip.Action>
            <Tooltip.Content className="bg-primary-500 px-4 py-3" fill="#1B4DFF">
              <p className="mb-1 text-body-3 font-medium text-white">Tooltips - Title here</p>
              <p className="text-body-5 font-normal text-white/80">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </Tooltip.Content>
          </Tooltip>
        </div>
      </div>
    </section>
  )
}

export default Components
