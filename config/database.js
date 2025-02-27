import mongoose from 'mongoose'

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    // If the database is already connected, don't connect again
    if(connected){
        console.log('mongodb is already connected')
        return;
    }
    // Connect to mongoDB
    try{
      await mongoose.connect(process.env.MONGODB_URI)
      connected=true;
      console.log('mongodb connected')
    }
    catch(error){
      console.log('not connected')
    }
}

export default connectDB