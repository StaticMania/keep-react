import RangeSlider from './Slider'

const Page = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl">
        <fieldset className="mb-5 flex items-center gap-2">
          <span>
            <input
              id="checkbox"
              type="checkbox"
              className="peer sr-only absolute h-5 w-5 cursor-pointer opacity-0 peer-checked:before:h-2.5 peer-checked:before:w-2.5"
            />
            <span className="flex h-5 w-5 cursor-pointer items-center justify-center rounded border peer-disabled:opacity-50">
              <svg
                className="size-3 fill-metal-600 peer-checked:fill-metal-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256">
                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
              </svg>
            </span>
          </span>
          <label
            htmlFor="checkbox"
            className="inline cursor-pointer select-none text-body-4 font-medium text-metal-600 dark:text-metal-300">
            Checkbox
          </label>
        </fieldset>

        <RangeSlider />
      </div>
    </section>
  )
}

export default Page
