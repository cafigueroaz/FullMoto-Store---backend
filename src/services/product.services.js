import productModel from "../models/product.model.js";

const dbRegisterProduct = async (newProduct) => {
  return await productModel.create(newProduct);
};

const dbGetAllProducts = async () => {
  return await productModel.find().populate("categoryId", "name");
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

const dbGetProductByCategory = async (category) => {
  return await productModel.find({
    categoryId: category,
  });
};

const dbGetProductsByPriceRange = async (minPrice, maxPrice) => {
  return await productModel
    .find({
      price: { $gte: minPrice, $lte: maxPrice },
    })
    .sort({
      price: 1,
    });
};

const dbGetProductsByBrand = async (brandSearch) => {
  return await productModel.find({ brand: brandSearch });
};

const dbGetProductsByCompatibility = async (motoRef) => {
  return await productModel.find({
    compatibleWith: { $elemMatch: { $regex: motoRef, $options: "i" } },
  });
};

export {
  dbRegisterProduct,
  dbGetAllProducts,
  dbGetProductById,
  dbDeletedProductById,
  dbUpdateProductById,
  dbGetProductByCategory,
  dbGetProductsByPriceRange,
  dbGetProductsByBrand,
  dbGetProductsByCompatibility,
};
