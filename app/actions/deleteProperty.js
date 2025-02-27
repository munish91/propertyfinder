'use server'
import cloudinary from "@/config/cloudinary"
import connectDB from "@/config/database"
import Property from "@/models/Property"
import { getSessionUser } from "@/utils/getSessionUser"
import { Layout } from "antd"
import { revalidatePath } from "next/cache"

async function deleteProperty(propertyId){
const sessionUser = await getSessionUser()

if(!sessionUser || !sessionUser.userId){
   throw new Error('User Id is required')
}
const {userId} = sessionUser
const property = await Property.findById(propertyId)
if(!property) throw new Error('Property not found')

    // Verify Owner
 if(property.owner.toString() !== userId){
    throw new Error('Unauthorized')
 }

     // Extract public ID from image urls
     const publicIds = property.images.map((imageUrl)=>{
        const parts = imageUrl.split('/')
        return parts.at(-1).split('.').at(0)
   })
   // delete image from cloudinary
   if(publicIds.length > 0){
       for(const publicId of publicIds){
           await cloudinary.uploader.destroy('proertypulse/'+publicId)
       }
   }

 await property.deleteOne()

 revalidatePath('/','layout')

}

export default deleteProperty