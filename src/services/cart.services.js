import cartModel from "../models/cart.model.js";

const dbGetCartByUser = async (userId) => {
  return await cartModel.findOne({ userId }).populate("items.productId");
};

const dbAddItemToCart = async (userId, productId, quantity, price) => {
  const cart = await cartModel.findOne({ userId });

  if (!cart) {
    return await cartModel.create({
      userId,
      items: [{ productId, quantity, price }],
      total: price * quantity,
    });
  }

  const itemIndex = cart.items.findIndex(
    (item) => item.productId.toString() === productId,
  );

  if (itemIndex >= 0) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ productId, quantity, price });
  }

  cart.total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return await cart.save();
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

  return await cart.save();
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

  return await cart.save();
};

const dbClearCart = async (userId) => {
  return await cartModel.findOneAndUpdate(
    { userId },
    { items: [], total: 0 },
    { new: true },
  );
};

export {
  dbGetCartByUser,
  dbAddItemToCart,
  dbUpdateItemQuantity,
  dbRemoveItemFromCart,
  dbClearCart,
};
