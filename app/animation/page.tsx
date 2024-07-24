const AnimationPage = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-10">
        <div className="flex items-center gap-5">
          <div className="relative">
            <input
              type="text"
              id="example13"
              placeholder=" "
              className="peer flex h-11 w-full rounded-lg border bg-white px-3 py-2 text-body-4 font-normal text-metal-900 placeholder:font-normal placeholder:text-metal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metal-200 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-metal-800 dark:bg-metal-900 dark:text-white dark:placeholder:text-metal-300 dark:focus-visible:ring-metal-900"
            />
            <label
              htmlFor="example13"
              className="peer-focus:base absolute left-2 top-0 z-10 -translate-y-2 transform bg-white px-1 text-xs text-metal-500 transition-all peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-sm peer-focus:-translate-y-2 peer-focus:text-body-5 peer-disabled:bg-transparent">
              Full name
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimationPage
