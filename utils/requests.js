// fetch all properties
async function fetchProperties(){
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);
      if(!res.ok){
        throw new Error('Failed to fetch data')
      }
      return res.json();
    }
    catch(error){
      console.log(error)
    }
  }

  // Fetch single property
  async function fetchProperty(id){
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties/${id}`);
      if(!res.ok){
        throw new Error('Failed to fetch data')
      }
      return res.json();
    }
    catch(error){
      console.log(error)
    }
  }


  async function fetchPublisher(){
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN_PUB}`);
      if(!res.ok){
        throw new Error('Failed to fetch data')
      }
      return res.json();
    }
    catch(error){
      console.log(error)
    }
  }

  export {fetchProperties,fetchProperty,fetchPublisher}

  const staticPlatformlist = [
    {
       id: 146,
       name: "'platform name'",
       publisher:{
        id:123,
        name:"'publisher name"
       }
    }
  ]