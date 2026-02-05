import cartModel from "../models/cart.model.js";

const getCart = async (req, res) => {
  const user = req.body.userId;

  res.json({ user });
};

const addToCart = async (req, res) => {
  try {
    const product = req.params.idProduct;
    items.push(product);
  } catch (error) {
    console.error(error);
    res.json({ msg: "Error: no se pudo agregar el producto", error });
  }
};

const updateCartItem = async (req, res) => {};

const removeFromCart = async (req, res) => {};

const clearCart = async (req, res) => {};

export { getCart, addToCart, updateCartItem, removeFromCart, clearCart };
