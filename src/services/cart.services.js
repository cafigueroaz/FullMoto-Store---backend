import cartModel from "../models/cart.model.js";
import productModel from "../models/product.model.js";

const dbGetCartByUser = async (userId) => {
  return await cartModel.findOne({ userId }).populate("items.productId");
};

const dbAddItemToCart = async (userId, productId, quantity, price) => {

  const product = await productModel.findById(productId);
  if (!product) {
    throw new Error("Producto no encontrado");
  }

  const cart = await cartModel.findOne({ userId });

  if (!cart) {
    if (product.stock < quantity) {
      throw new Error("No hay suficiente stock disponible");
    }

    return await cartModel.create({
      userId,
      items: [{productId, quantity, price}],
      total: price * quantity,
    });
  }

  const itemIndex = cart.items.findIndex(
    (item) => item.productId.toString() === productId
  );

  if (itemIndex >= 0) {

    const newQuantity = cart.items[itemIndex].quantity + quantity;

    if (product.stock < newQuantity) {
      throw new Error("No hay suficiente stock disponible");
    }

    cart.items[itemIndex].quantity = newQuantity;

  } else {

    if (product.stock < quantity) {
      throw new Error("No hay suficiente stock disponible");
    }

    cart.items.push({ productId, quantity, price });
  }

  cart.total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  await cart.save();
  return await cart.populate("items.productId");
};



const dbUpdateItemQuantity = async (userId, productId, quantity) => {
  const cart = await cartModel.findOne({ userId });
  if (!cart) return null;

  const item = cart.items.find(
    (item) => item.productId.toString() === productId,
  );
  if (!item) return null;

  item.quantity = quantity;
  cart.total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  await cart.save();

  return await cart.populate("items.productId");
};

const dbRemoveItemFromCart = async (userId, productId) => {
  const cart = await cartModel.findOne({ userId });
  if (!cart) return null;

  cart.items = cart.items.filter(
    (item) => item.productId.toString() !== productId,
  );
  cart.total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  await cart.save();
  return await cart.populate("items.productId");
};

const dbClearCart = async (userId) => {
 const cart = await cartModel.findOneAndUpdate(
  { userId },
  { items: [], total: 0 },
  { new: true },
);

return await cart.populate("items.productId");
};

export {
  dbGetCartByUser,
  dbAddItemToCart,
  dbUpdateItemQuantity,
  dbRemoveItemFromCart,
  dbClearCart,
};
