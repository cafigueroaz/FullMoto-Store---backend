import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },

    stock: {
      type: Number,
      required: true,
      min: 0,
    },

    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "category",
      required: false, //--------------------
    },
    brand: {
      type: String,
      trim: true,
    },
    productType: {
      type: String,
      trim: true,
    },
    compatibleWith: [
      {
        type: String,
        trim: true,
      },
    ],
    mainImage: {
      type: String,
      required: true,
      trim: true,
      default: "imagen pendiente",
    },
    imageGallery: [
      {
        type: String,
        trim: true,
      },
    ],

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const productModel = model("products", ProductSchema);

export default productModel;
