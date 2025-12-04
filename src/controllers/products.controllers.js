import {
  dbRegisterProduct,
  dbGetAllProducts,
  dbGetProductById,
  dbDeletedProductById,
  dbUpdateProductById,
} from "../services/product.services.js";

const createProduct = async (req, res) => {
  try {
    const data = req.body;

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
("");

const getAllProducts = async (req, res) => {
  try {
    const Products = await dbGetAllProducts();

    res.json({
      msg: "Obtiene todos los productos",
      Products,
    });
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

export {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById,
};
