import userModel from "../models/User.model.js";

const dbRegisterUser = async (newUser) => {
  return await userModel.create(newUser);
};

const dbGetAllUsers = async () => {
  return await userModel.find();
};

const dbGetUserById = async (_id) => {
  return await userModel.findOne({ _id });
};

const dbDeletedUserById = async (_id) => {
  return await userModel.findOneAndDelete({ _id });
};

const dbUpdateUserById = async (_id, inputData) => {
  return await userModel.findByIdAndUpdate(_id, inputData, { new: true });
};

export {
  dbRegisterUser,
  dbGetAllUsers,
  dbGetUserById,
  dbDeletedUserById,
  dbUpdateUserById,
};
