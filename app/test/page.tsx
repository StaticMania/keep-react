import { columns, Payment } from './Columns'
import { DataTable } from './DataTable'
import { data } from './tableData'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return data
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
