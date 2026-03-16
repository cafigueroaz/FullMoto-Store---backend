import {
  dbGetOrderById,
  dbAddItemToOrder,
  dbUpdateItemQuantity,
  dbConfirmOrder,
  dbGetMyOrders
} from "../services/order.services.js";

const getOrder = async (req, res) => {
  try {
    const userId = req.payload.id;
    const cart = await dbGetOrderById(userId);
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.json({ msg: "Error: no se pudo obtener la orden" });
  }
};

const addItemToOrder = async (req, res) => {
  try {
    const userId = req.payload.id;
    const { productId, quantity, price } = req.body;

    const order = await dbAddItemToOrder(userId, productId, quantity, price);
    res.json({ msg: "Producto agregado a la orden", order });
  } catch (error) {
    console.error(error);
    res.json({ msg: "Error: no se pudo agregar el producto a la orden" });
  }
};

const updateItemQuantity = async (req, res) => {
  try {
    const userId = req.payload.id;
    const { productId, quantity } = req.body;

    const order = await dbUpdateItemQuantity(userId, productId, quantity);
    res.json({ msg: "Cantidad actualizada", order });
  } catch (error) {
    console.error(error);
    res.json({ msg: "Error: no se pudo actualizar la cantidad" });
  }
};

const confirmOrder = async (req, res) => {
  try {
    const userId = req.payload.id;
    const { paymentMethod } = req.body;

    if (!paymentMethod) {
      return res.status(400).json({ msg: "Falta el método de pago" });
    }

    const order = await dbConfirmOrder(userId, paymentMethod);
    res.status(200).json({ msg: "Orden confirmada", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error: no se pudo confirmar la orden" });
  }
};

const getMyOrders = async (req, res) => {
  try {
    const userId = req.payload.id;
    console.log('userId:', userId); // ← agrega esto
    const orders = await dbGetMyOrders(userId);
    console.log('orders:', orders); // ← y esto
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error getMyOrders:', error); // ← y esto
    res.status(500).json({ msg: "Error al obtener las órdenes" });
  }
};

export {
  getOrder,
  addItemToOrder,
  updateItemQuantity,
  confirmOrder,
  getMyOrders
};