import mongoose from "mongoose";

export const connectedDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database connected successfully")
    );

    await mongoose.connect(`${process.env.MONGO_DB_CONNECTION}/hotel-booking`);
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
  }
};
