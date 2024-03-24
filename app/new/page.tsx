const Page = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div>
          <table className="table-auto">
            <thead className="border">
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
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
