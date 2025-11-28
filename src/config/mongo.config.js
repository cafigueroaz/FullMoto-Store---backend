const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/fullmoto", {});
    console.log("Base de datos conectada correctamente");
  } catch (error) {
    console.error("Error al iniciar la base de datos");
  }
};

module.exports = dbConnection;
