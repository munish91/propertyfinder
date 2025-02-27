'use client'
const Filter = ({publishers}) => {
  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
            <h2 className="text-3xl text-center font-semibold mb-6">
              Filter
            </h2>

            <div className="mb-4">
              
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
              >
                {publishers.map(pub =>{
                  return <option key={pub.id} value={pub.id}>{pub.name}</option>
                })}
              </select>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Filter