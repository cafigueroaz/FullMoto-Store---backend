import userModel from "../models/User.model.js";
import {verifyEncriptedPassword, encriptedPassword } from "../helpers/bcrypt.helpers.js";

const dbRegisterUser = async (newUser) => {
  return await userModel.create(newUser);
};

const dbGetAllUsers = async () => {
  return await userModel.find();
};

const dbGetUserById = async (_id) => {
  return await userModel.findOne({ _id });
};

const dbGetUserByEmail = async (email) => {
  return await userModel.findOne({ email });
};

const dbDeletedUserById = async (_id) => {
  return await userModel.findOneAndDelete({ _id });
};

const dbUpdateUserById = async (_id, inputData) => {
  return await userModel.findByIdAndUpdate(_id, inputData, { new: true });
};

const dbChangePassword = async (userId, currentPassword, newPassword) => {
const user = await userModel.findById(userId);
  if (!user) throw new Error("Usuario no encontrado");
const isMatch = verifyEncriptedPassword(currentPassword, user.password);
  if (!isMatch) throw new Error("La contraseña actual es incorrecta");


  console.log('password ingresada:', currentPassword);  // ← agrega esto
  console.log('password en BD:', user.password);  

  user.password = encriptedPassword(newPassword);
  await user.save();
  return user;
};

export {
  dbRegisterUser,
  dbGetAllUsers,
  dbGetUserById,
  dbDeletedUserById,
  dbUpdateUserById,
  dbGetUserByEmail,
  dbChangePassword
};
