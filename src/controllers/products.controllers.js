import productModel from "../models/product.model.js";
import {
  dbRegisterProduct,
  dbGetAllProducts,
  dbGetProductById,
  dbDeletedProductById,
  dbUpdateProductById,
  dbGetProductByCategory,
  dbGetProductsByPriceRange,
  dbGetProductsByBrand,
  dbGetProductsByCompatibility,
} from "../services/product.services.js";

const createProduct = async (req, res) => {
  try {
    const data = req.body;
    // const user_id = req.payload.id;

    // data.user_id = user_id;

    console.log("Hola", req.body);

    const dataRegistered = await dbRegisterProduct(data);

    res.json({
      msg: "Se creo un producto",
      dataRegistered,
    });
  } catch (error) {
    console.error(error);
    res.json({
      msg: "Error: no se pudo crear el producto",
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const Products = await dbGetAllProducts();

    res.json(Products);
  } catch (error) {
    console.error(error);
    res.json({
      msg: "Error: no se pudo obtener el listado de productos",
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const idProduct = req.params.idProduct;
    const Product = await dbGetProductById(idProduct);

    res.json({
      id: idProduct,
      Product,
    });
  } catch (error) {
    console.error(error);
    res.json({
      msg: "Error: no se pudo obtener el producto por Id",
    });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const idProduct = req.params.idProduct;
    const ProductDeleted = await dbDeletedProductById(idProduct);

    res.json({
      ProductDeleted,
    });
  } catch (error) {
    console.error(error);
    res.json({
      msg: "Error: no se pudo eliminar el producto por Id",
    });
  }
};

const updateProductById = async (req, res) => {
  try {
    const idProduct = req.params.idProduct;
    const inputData = req.body;

    const updateProduct = await dbUpdateProductById(idProduct, inputData);

    res.json({
      msg: "Usuario actualizado",
      updateProduct,
    });
  } catch (error) {
    console.error(error);
    res.json({
      msg: "Error: no se pudo actualizar el producto por Id",
    });
  }
};

const getProductByCategory = async (req, res) => {
  try {
    const category = req.body.categoryId;

    const products = await dbGetProductByCategory(category);

    res.json({ products });
  } catch (error) {
    console.error(error);
    res.json({ msg: "Error: no se pudo encontrar el producto por categoria" });
  }
};

const getProductsByPriceRange = async (req, res) => {
  const minPrice = req.body.min;
  const maxPrice = req.body.max;

  const products = await dbGetProductsByPriceRange(minPrice, maxPrice);
  res.json({ minPrice, maxPrice, products });
};

const getProductsByBrand = async (req, res) => {
  try {
    const brandSearch = req.body.brand;

    const products = await dbGetProductsByBrand(brandSearch);

    res.json({ products, brandSearch });
  } catch (error) {
    console.error(error);
    res.json({
      msg: "Error: no se pudo encontrar el producto por categoria",
    });
  }
};

const getProductsByCompatibility = async (req, res) => {
  try {
    const motoRef = req.body.motoRef;

    const products = await dbGetProductsByCompatibility(motoRef);

    res.json({ motoRef, products });
  } catch (error) {
    console.error(error);

    res.json({
      msg: "Error: No se pueden obtener los productos por marca",
    });
  }
};

export {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  getProductByCategory,
  getProductsByPriceRange,
  getProductsByBrand,
  getProductsByCompatibility,
};
