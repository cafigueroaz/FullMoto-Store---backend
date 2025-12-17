import cartModel from "../models/cart.model.js";

const getCart = async (req, res) => {
  const userId = req.body;

  res.json({ msg: "user" });
};

const addToCart = async (req, res) => {};

const updateCartItem = async (req, res) => {};

const removeFromCart = async (req, res) => {};

const clearCart = async (req, res) => {};

export { getCart, addToCart, updateCartItem, removeFromCart, clearCart };
