import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // URL limpia
    slug: {
      type: String,
      trim: true,
      lowercase: true,
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

    discountPercentage: {
      type: Number,
      min: 0,
      max: 100,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },

    barcode: {
      type: String,
      trim: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "categories",
      required: true,
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
