import Usermodel from "../models/User.model.js";

const dbRegisterUser = async (newUser) => {
  return await Usermodel.create(newUser);
};

const dbGetAllUsers = async () => {
  return await Usermodel.find();
};

const dbGetUserById = async (idUser) => {
  return await Usermodel.findOne({ _id: idUser });
};

export { dbRegisterUser, dbGetAllUsers, dbGetUserById };
