import {
  dbGetCartByUser,
  dbAddItemToCart,
  dbUpdateItemQuantity,
  dbRemoveItemFromCart,
  dbClearCart,
} from "../services/cart.services.js";

const getCart = async (req, res) => {
  try {
    const userId = req.payload.id;
    const cart = await dbGetCartByUser(userId);
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.json({ msg: "Error: no se pudo obtener el carrito" });
  }
};

const addItemToCart = async (req, res) => {
  try {
    const userId = req.payload.id;
    const { productId, quantity, price } = req.body;

    const cart = await dbAddItemToCart(userId, productId, quantity, price);
    res.json({ msg: "Producto agregado al carrito", cart });
  } catch (error) {
    console.error(error);
    res.json({ msg: "Error: no se pudo agregar el producto al carrito" });
  }
};

const updateItemQuantity = async (req, res) => {
  try {
    const userId = req.payload.id;
    const { productId, quantity } = req.body;

    const cart = await dbUpdateItemQuantity(userId, productId, quantity);
    res.json({ msg: "Cantidad actualizada", cart });
  } catch (error) {
    console.error(error);
    res.json({ msg: "Error: no se pudo actualizar la cantidad" });
  }
};

const removeItemFromCart = async (req, res) => {
  try {
    const userId = req.payload.id;
    const { productId } = req.params;

    const cart = await dbRemoveItemFromCart(userId, productId);
    res.json({ msg: "Producto eliminado del carrito", cart });
  } catch (error) {
    console.error(error);
    res.json({ msg: "Error: no se pudo eliminar el producto del carrito" });
  }
};

const clearCart = async (req, res) => {
  try {
    const userId = req.payload.id;
    const cart = await dbClearCart(userId);
    res.json({ msg: "Carrito vaciado", cart });
  } catch (error) {
    console.error(error);
    res.json({ msg: "Error: no se pudo vaciar el carrito" });
  }
};

export {
  getCart,
  addItemToCart,
  updateItemQuantity,
  removeItemFromCart,
  clearCart,
};
