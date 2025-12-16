import mongoose from "mongoose";

const MONGO_URI = process.env.DB_URI || "mongodb://localhost:27017/deafult";

const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI, {});
    console.log("Base de datos conectada correctamente");
  } catch (error) {
    console.error("Error al iniciar la base de datos");
  }
};

export default dbConnection;
