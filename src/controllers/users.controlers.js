import Usermodel from "../models/User.model.js";
import { dbRegisterUser, dbGetAllUsers } from "../services/user.services.js";

const createUser = async (req, res) => {
  try {
    const data = req.body;

    console.log(data);

    const dataRegistered = await dbRegisterUser(data);

    res.json({
      msg: "Se creo un usuario",
      dataRegistered,
    });
  } catch {
    console.error(error);
    res.json({
      msg: "Error: no se pudo crear el usuario",
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await dbGetAllUsers();

    res.json({
      msg: "Obtiene todos los usuarios",
      users,
    });
  } catch (error) {
    console.error(error);
    res.json({
      msg: "Error: no se pudo obtener el listado de usuarios",
    });
  }
};

export { createUser, getAllUsers };
