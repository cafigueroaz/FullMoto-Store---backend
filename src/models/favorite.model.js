import { Schema, model } from "mongoose";

const favoriteSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    items: [
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
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    total: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const favoriteModel = model("favorites", favoriteSchema);

export default favoriteModel;