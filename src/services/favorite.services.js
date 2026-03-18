import favoriteModel from "../models/favorite.model.js";
import productModel from "../models/product.model.js";

const dbGetFavoritesByUser = async (userId) => {
  return await favoriteModel.findOne({ userId }).populate("items.productId");
};

const dbAddItemToFavorites = async (userId, productId, quantity, price) => {
  const product = await productModel.findById(productId);
  if (!product) throw new Error("Producto no encontrado");

  const favorites = await favoriteModel.findOne({ userId });

  if (!favorites) {
    return await favoriteModel.create({
      userId,
      items: [{ productId, quantity, price }],
    });
  }

  const alreadyAdded = favorites.items.some(
    (item) => item.productId.toString() === productId
  );
  if (alreadyAdded) throw new Error("El producto ya está en favoritos");

  favorites.items.push({ productId, quantity, price });
  await favorites.save();
  return await favorites.populate("items.productId");
};

const dbRemoveItemFromFavorites = async (userId, productId) => {
  const favorites = await favoriteModel.findOne({ userId });
  if (!favorites) return null;

  favorites.items = favorites.items.filter(
    (item) => item.productId.toString() !== productId
  );

  await favorites.save();
  return await favorites.populate("items.productId");
};

const dbClearFavorites = async (userId) => {
  return await favoriteModel.findOneAndUpdate(
    { userId },
    { items: [] },
    { new: true }
  );
};

export { dbGetFavoritesByUser, dbAddItemToFavorites, dbRemoveItemFromFavorites, dbClearFavorites };