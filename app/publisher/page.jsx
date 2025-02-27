import Filter from "@/components/Filter"
import { fetchPublisher} from "@/utils/requests"
const Publisher = async() => {
    const publishers = await fetchPublisher();
  return (
    <Filter
       publishers={publishers}
     />
  )
}

export default Publisher