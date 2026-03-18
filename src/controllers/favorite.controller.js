import { dbGetFavoritesByUser, dbAddItemToFavorites, dbRemoveItemFromFavorites, dbClearFavorites } from "../services/favorite.services.js";

const getFavorites = async (req, res) => {
  try {
    const userId = req.payload.id;
    const favorites = await dbGetFavoritesByUser(userId);
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener favoritos" });
  }
};

const addItemToFavorites = async (req, res) => {
  try {
    const userId = req.payload.id;
    const { productId, quantity, price } = req.body;

    if (!productId || !price) {
      return res.status(400).json({ msg: "Faltan datos: productId o price" });
    }

    const favorites = await dbAddItemToFavorites(userId, productId, quantity ?? 1, price);
    res.status(200).json({ msg: "Producto agregado a favoritos", favorites });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const removeItemFromFavorites = async (req, res) => {
  try {
    const userId = req.payload.id;
    const { productId } = req.params;

    const favorites = await dbRemoveItemFromFavorites(userId, productId);
    res.status(200).json({ msg: "Producto eliminado de favoritos", favorites });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar de favoritos" });
  }
};

const clearFavorites = async (req, res) => {
  try {
    const userId = req.payload.id;
    await dbClearFavorites(userId);
    res.status(200).json({ msg: "Favoritos eliminados" });
  } catch (error) {
    res.status(500).json({ msg: "Error al vaciar favoritos" });
  }
};

export { getFavorites, addItemToFavorites, removeItemFromFavorites, clearFavorites };