import mongoose from "mongoose";

const connectDB = async () => {
  try {
   let uri = "mongodb+srv://bilalAuth:bilal1010@clusterauth.nocr6.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAuth"
    const connectionInstance = await mongoose.connect(
      `${uri}prac`
    );

    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1); // Exit process on failure
  }
};

export default connectDB;
//bilal1010