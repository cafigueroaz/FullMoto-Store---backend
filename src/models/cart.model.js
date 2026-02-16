import { Schema, model } from "mongoose";

const CartItemSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },
  },
  {
    _id: false,
  }
);

const CartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
      unique: true,
    },

    items: [CartItemSchema],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const cartModel = model("carts", CartSchema);

export default cartModel;
