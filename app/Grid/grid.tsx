const page = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="my-10 grid grid-cols-12 gap-5">
          <div className="col-span-3 row-span-3 rounded-xl bg-primary-500 p-5 text-center text-white">1</div>
          <div className="col-span-3 row-span-3 rounded-xl bg-primary-500 p-5 text-center text-white">2</div>
          <div className="col-span-3 row-span-3 rounded-xl bg-primary-500 p-5 text-center text-white">3</div>
          <div className="col-span-3 row-span-3 rounded-xl bg-primary-500 p-5 text-center text-white">4</div>
          <div className="col-span-6 rounded-xl bg-primary-500 p-5 text-center text-white">5</div>
          <div className="col-span-3 rounded-xl bg-primary-500 p-5 text-center text-white">6</div>
          <div className="col-span-3 rounded-xl bg-primary-500 p-5 text-center text-white">7</div>
          <div className="col-span-3 rounded-xl bg-primary-500 p-5 text-center text-white">8</div>
          <div className="col-span-6 rounded-xl bg-primary-500 p-5 text-center text-white">9</div>
          <div className="col-span-3 rounded-xl bg-primary-500 p-5 text-center text-white">10</div>
          <div className="col-span-6 rounded-xl bg-primary-500 p-5 text-center text-white">11</div>
          <div className="col-span-6 rounded-xl bg-primary-500 p-5 text-center text-white">12</div>
        </div>
        <div className="columns-3">
          <div className="space-y-4">
            <div className="h-[200px] w-full rounded-xl border border-metal-100 bg-white p-5"></div>
            <div className="h-[300px] w-full rounded-xl border border-metal-100 bg-white p-5"></div>
          </div>
          <div className="space-y-4">
            <div className="h-[300px] w-full rounded-xl border border-metal-100 bg-white p-5"></div>
            <div className="h-[200px] w-full rounded-xl border border-metal-100 bg-white p-5"></div>
          </div>
          <div className="space-y-4">
            <div className="h-[350px] w-full rounded-xl border border-metal-100 bg-white p-5"></div>
            <div className="h-[150px] w-full rounded-xl border border-metal-100 bg-white p-5"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
