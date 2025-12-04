import productModel from "../models/product.model.js";

const dbRegisterProduct = async (newProduct) => {
  return await productModel.create(newProduct);
};

const dbGetAllProducts = async () => {
  return await productModel.find();
};

const dbGetProductById = async (_id) => {
  return await productModel.findOne({ _id });
};

const dbDeletedProductById = async (_id) => {
  return await productModel.findOneAndDelete({ _id });
};

const dbUpdateProductById = async (_id, inputData) => {
  return await productModel.findByIdAndUpdate(_id, inputData, { new: true });
};

export {
  dbRegisterProduct,
  dbGetAllProducts,
  dbGetProductById,
  dbDeletedProductById,
  dbUpdateProductById,
};
