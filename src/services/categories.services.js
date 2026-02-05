import categoriesModel from "../models/categories.model.js";

const dbCreateCategory = async (newCategory) => {
  return await categoriesModel.create(newCategory);
}

const dbGetAllCategories = async () => {
  return await categoriesModel.find();
}

const dbGetCategoryById = async (_id) => {
  return await categoriesModel.findOne({ _id });
}

const dbDeleteCategoryById = async (_id) => {
  return await categoriesModel.findOneAndDelete({ _id });
}

const dbUpdateCategoryById = async (_id) => {
  return await categoriesModel.findByIdAndUpdate(_id, { new: true });
}

export { dbCreateCategory, dbGetAllCategories, dbGetCategoryById, dbDeleteCategoryById, dbUpdateCategoryById};