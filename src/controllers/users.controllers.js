import userModel from "../models/User.model.js";
import {
  dbRegisterUser,
  dbGetAllUsers,
  dbGetUserById,
  dbDeletedUserById,
  dbUpdateUserById,
  dbGetUserByEmail,
  dbChangePassword
} from "../services/user.services.js";

import { encriptedPassword } from "../helpers/bcrypt.helpers.js";

const createUser = async (req, res) => {
  try {
    const data = req.body;

    const userFound = await dbGetUserByEmail(data.email);

    if (userFound) {
      return res.json({ msg: "No se puede registrar, el usuario ya existe" });
    }

    data.password = encriptedPassword(data.password);

    const userRegistred = await dbRegisterUser(data);

    const jsonDataRegistred = userRegistred.toObject();

    delete jsonDataRegistred.password;

    res.json({
      jsonDataRegistred,
    });
  } catch (error) {
    console.error(error);
    res.json({
      msg: "Error: no se pudo crear el usuario",
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await dbGetAllUsers();

    res.json(users);
  } catch (error) {
    console.error(error);
    res.json({
      msg: "Error: no se pudo obtener el listado de usuarios",
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const idUser = req.params.idUser;
    const user = await dbGetUserById(idUser);

    res.json(user);
  } catch (error) {
    console.error(error);
    res.json({
      msg: "Error: no se pudo obtener el usuario por Id",
    });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const idUser = req.params.idUser;
    const userDeleted = await dbDeletedUserById(idUser);

    res.json({
      userDeleted,
    });
  } catch (error) {
    console.error(error);
    res.json({
      msg: "Error: no se pudo eliminar el usuario por Id",
    });
  }
};

const updateUserById = async (req, res) => {
  try {
    const idUser = req.params.idUser;
    const inputData = req.body;

    const updateUser = await dbUpdateUserById(idUser, inputData);

    res.json(updateUser);
  } catch (error) {
    console.error(error);
    res.json({
      msg: "Error: no se pudo actualizar el usuario por Id",
    });
  }
};

const changePassword = async (req, res) => {
  try {
    const { idUser } = req.params;
    const { currentPassword, newPassword } = req.body;

    await dbChangePassword(idUser, currentPassword, newPassword);
    res.status(200).json({ msg: "Contraseña actualizada correctamente" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export { createUser, getAllUsers, getUserById, deleteUserById, updateUserById, changePassword };