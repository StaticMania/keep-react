'use client'
import { Button } from '../src'
import AlertComponent from './components/Alert'

const Page = () => {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="container space-y-5">
        <h1 className="mx-auto mb-10 text-center text-3xl font-bold">Server component</h1>
        <AlertComponent title="Alert here" description="A short description followed by two actions items." />
        <Button>Learn More</Button>
      </div>
    </section>
  )
}

export default Page
