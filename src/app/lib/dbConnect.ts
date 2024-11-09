import mongoose from "mongoose";

const dbConnect = async function (): Promise<void> {
  if (mongoose.connection.readyState === 1) {
    console.log("db already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI!);
    console.log(
      "db connected successfully",
      mongoose.connections[0].readyState
    );
  } catch (error: any) {
    throw new Error("unable to connect with database");
  }
};

export default dbConnect;
