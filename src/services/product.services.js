import productModel from "../models/product.model.js";

const dbRegisterProduct = async (newProduct) => {
  return await productModel.create(newProduct);
};

const dbGetAllProducts = async ({ sort = "featured", order = "desc" } = {}) => {
  const sortFields = {
    price: "price",
    rating: "rating",
    featured: "createdAt",
    name: "name",
  };

  const sortField = sortFields[sort] ?? "createdAt";
  const sortOrder = order === "asc" ? 1 : -1;

  return await productModel
    .find()
    .populate("categoryId")
    .sort({ [sortField]: sortOrder });
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
