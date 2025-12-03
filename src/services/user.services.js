import Usermodel from "../models/User.model.js";

const dbRegisterUser = async (newUser) => {
  return await Usermodel.create(newUser);
};

const dbGetAllUsers = async () => {
  return await Usermodel.find();
};

export { dbRegisterUser, dbGetAllUsers };
