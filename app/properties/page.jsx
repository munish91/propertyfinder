import PropertyCard from '@/components/PropertyCard'
import Property from '@/models/Property';
import { fetchProperties } from '@/utils/requests';
import { Pagination } from '@/components/Pagination'
const PropertiesPage = async({searchParams:{page = 1,pageSize=2}}) => {
  // const properties = await fetchProperties();
  const skip = (page -1 )* pageSize;
  const total = await Property.countDocuments({})
  const properties = await Property.find({}).skip(skip).limit(pageSize);
  // Sort properties by date
  properties.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt));
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length ===0 ? (<p>No properties found</p>):
        (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map(property =>(
            <PropertyCard
             key={property._id}
             property={property} 
            />
          )
            )}
        </div>
        )}
        {/* <Pagination /> */}
      </div>
    </section>
  )
}

export default PropertiesPage