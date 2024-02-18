'use client'

import { LineProgress } from '../src'

const New = () => {
  return (
    <section className="grid h-screen place-items-center">
      <div className="container">
        <LineProgress progress={55} className="!bg-red-50">
          <LineProgress.Text>55%</LineProgress.Text>
        </LineProgress>
      </div>
    </section>
  )
}

export default New
