import orderModel from "../models/orders.model.js";
import cartModel from "../models/cart.model.js";
import productModel from "../models/product.model.js";

const dbGetOrderById = async (userId) => {
  return await orderModel.findOne({ userId }).populate("items.productId");
};

const dbAddItemToOrder = async (userId, productId, quantity, price) => {

  const product = await productModel.findById(productId);
  if (!product) {
    throw new Error("Producto no encontrado");
  }

  const order = await orderModel.findOne({ userId });

  if (!order) {
    if (product.stock < quantity) {
      throw new Error("No hay suficiente stock disponible");
    }

    return await orderModel.create({
      userId,
      items: [{productId, quantity, price}],
      total: price * quantity,
    });
  }

  const itemIndex = order.items.findIndex(
    (item) => item.productId.toString() === productId
  );

  if (itemIndex >= 0) {

    const newQuantity = order.items[itemIndex].quantity + quantity;

    if (product.stock < newQuantity) {
      throw new Error("No hay suficiente stock disponible");
    }

    order.items[itemIndex].quantity = newQuantity;

  } else {

    if (product.stock < quantity) {
      throw new Error("No hay suficiente stock disponible");
    }

    order.items.push({ productId, quantity, price });
  }

  order.total = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  await order.save();
  return await order.populate("items.productId");
};



const dbUpdateItemQuantity = async (userId, productId, quantity) => {
  const order = await orderModel.findOne({ userId });
  if (!order) return null;

  const item = order.items.find(
    (item) => item.productId.toString() === productId,
  );
  if (!item) return null;

  item.quantity = quantity;
  order.total = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  await order.save();

  return await order.populate("items.productId");
};

const dbConfirmOrder = async (userId, paymentMethod) => {
 // 1. Obtener el carrito del usuario
  const cart = await cartModel.findOne({ userId }).populate("items.productId");
  if (!cart || cart.items.length === 0) throw new Error("El carrito está vacío");

  // 2. Verificar que haya stock suficiente para todos los productos
  for (const item of cart.items) {
    const product = await productModel.findById(item.productId._id);
    if (!product) throw new Error(`Producto no encontrado`);
    if (product.stock < item.quantity) {
      throw new Error(`Stock insuficiente para: ${product.name}`);
    }
  }

  // 3. Crear la orden
  const order = await orderModel.create({
    userId,
    items: cart.items.map(item => ({
      productId: item.productId._id,
      quantity: item.quantity,
      price: item.price
    })),
    total: cart.total,
    paymentMethod,
    status: "confirmed",
    paidAt: new Date()
  });

  // 4. Actualizar el stock de cada producto
  for (const item of cart.items) {
    await productModel.findByIdAndUpdate(
      item.productId._id,
      { $inc: { stock: -item.quantity } } // ← resta la cantidad comprada
    );
  }

  // 5. Vaciar el carrito
  await cartModel.findOneAndUpdate(
    { userId },
    { items: [], total: 0 }
  );

  return order;
};

const dbGetMyOrders = async (userId) => {
  return await orderModel.find({ userId}).populate("items.productId");
}

export {
  dbGetOrderById,
  dbAddItemToOrder,
  dbUpdateItemQuantity,
  dbConfirmOrder,
  dbGetMyOrders
};
