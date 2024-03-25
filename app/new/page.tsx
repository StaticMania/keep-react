const Page = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div>
          <div className="min-w-full flex-none overflow-hidden px-4 sm:px-6 md:px-0 lg:overflow-auto">
            <table className="whitespace-no-wrap z-50 mt-10 min-w-max table-auto overflow-hidden rounded-xl bg-white text-left md:w-full lg:min-w-min">
              <thead>
                <tr>
                  <th className="rounded-tl-xl bg-metal-50 px-4 py-3 text-body-4 font-medium text-metal-900">Class</th>
                  <th className="rounded-bl rounded-tr-xl bg-metal-50 px-4 py-3 text-body-4 font-medium text-metal-900">
                    Properties
                  </th>
                </tr>
              </thead>
              <tbody className="align-baseline">
                <tr>
                  <td
                    translate="no"
                    className="border-t border-metal-100 px-4 py-3 text-body-4 !font-medium text-black">
                    heading-1
                  </td>
                  <td
                    translate="no"
                    className="border-t border-metal-100 px-4 py-3 text-body-4 font-normal text-metal-600">
                    font-size: 4rem; <br /> line-height: 4.875rem;
                    <br /> letter-spacing: -2.3px;
                  </td>
                </tr>
                <tr>
                  <td
                    translate="no"
                    className="border-t border-metal-100 px-4 py-3 text-body-4 !font-medium text-black">
                    heading-1
                  </td>
                  <td
                    translate="no"
                    className="border-t border-metal-100 px-4 py-3 text-body-4 font-normal text-metal-600">
                    font-size: 4rem; <br /> line-height: 4.875rem;
                    <br /> letter-spacing: -2.3px;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h1 className="text-display">The quick brown fox jumps over the lazy dog</h1>
        </div>
        <div className="mt-10 space-y-3">
          <h1 className="text-heading-1">The quick brown fox jumps over the lazy dog</h1>
          <h2 className="text-heading-2">The quick brown fox jumps over the lazy dog</h2>
          <h3 className="text-heading-3">The quick brown fox jumps over the lazy dog</h3>
          <h4 className="text-heading-4">The quick brown fox jumps over the lazy dog</h4>
          <h5 className="text-heading-5">The quick brown fox jumps over the lazy dog</h5>
          <h6 className="text-heading-6">The quick brown fox jumps over the lazy dog</h6>
        </div>
        <div className="mt-10 space-y-3">
          <p className="text-body-1">The quick brown fox jumps over the lazy dog</p>
          <p className="text-body-2">The quick brown fox jumps over the lazy dog</p>
          <p className="text-body-3">The quick brown fox jumps over the lazy dog</p>
          <p className="text-body-4">The quick brown fox jumps over the lazy dog</p>
          <p className="text-body-5">The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
    </section>
  )
}

export default Page
