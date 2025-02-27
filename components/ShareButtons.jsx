'use client'
import { 
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon
 } from "react-share"

const ShareButtons = ({property}) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`
  return (
   <>
    <h3 className="text-xl font-bold text-center p-2">Share This Property:</h3>
    <div className="flex gap-3 justify-center pb-5">
      <FacebookShareButton 
      url={shareUrl} 
      quote={property.name}
      
      >

      </FacebookShareButton>
    </div>
   </>
  )
}

export default ShareButtons