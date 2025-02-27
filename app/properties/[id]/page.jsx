
// import { useEffect,useState } from "react"
// import { useParams } from "next/navigation"
// import { fetchProperty } from "@/utils/requests"
import PropertyHeaderImage from "@/components/PropertyHeaderImage"
import PropertyDetails from "@/components/PropertyDetails"
import Spinner from "@/components/Spinner"
import Link from "next/link"
import {FaArrowLeft} from 'react-icons/fa'
// import ErrorPage from "../../error"
import PropertyImages from "@/components/PropertyImages"
import BookmarkButton from "@/components/BookmarkButton"
import ShareButtons from "@/components/ShareButtons"
import PropertyContactForm from "@/components/PropertyContactForm"
import { convertToSerializableObject } from "@/utils/convertToObject"
import connectDB from "@/config/database"
import Property from "@/models/Property"
const PropertyPage = async ({params}) => {
  // const {id} = useParams();
  // const [property,setProperty] = useState(null)
  // const [loading,setLoading] = useState(true)
  // const [error, setError] = useState(null) 

  // useEffect(()=>{
  //   const fetchPropertyData = async()=>{
  //     if(!id) return;
  //     try{
  //       const property = await fetchProperty(id)
  //       if (!property) {
  //         throw new Error(`Property with ID ${id} not found`);
  //       }
  //       setProperty(property)
  //     }
  //     catch(err){
  //       //  console.error('Error fetching property:', error)
  //       setError(err.message);
  //     }
  //     finally{
  //       setLoading(false)
  //     }
  //   }

  //   if(property === null){
  //     fetchPropertyData()
  //   }
  // },[id,property])

  // if(!property && !loading){
  //   return(
  //     <h1 className="text-center text-2xl font-bold mt-10">Property Not Found</h1>
  //   )
  // }

  // if (loading) {
  //   return <Spinner loading={loading} />;
  // }

  // if (error) {
  //   return <ErrorPage error={error} />; 
  // }

  await connectDB()

  const propertyDoc = await Property.findById(params.id).lean()

  const property = convertToSerializableObject(propertyDoc)
  if(!property){
    return <h1 className="text-center text-2xl font-bold mt-10">Property not found</h1>
  }
// console.log(property,"property====")
  return (
    <>
    {/* {loading && <Spinner loading={loading} />}
    {!loading && property &&( */}
      <>
       <PropertyHeaderImage image={property.images[0]} />
       <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <PropertyDetails property={property} />

          {/* <!-- Sidebar --> */}
          <aside className="space-y-4">       
          <BookmarkButton property={property} />
          <ShareButtons property={property} />
          <PropertyContactForm property={property} />
          </aside>
        </div>
      </div>
    </section>
    <PropertyImages images={property.images} />
      </>
    {/*  )} */}
    </>
  )
}

export default PropertyPage