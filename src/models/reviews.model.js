import { Schema, model } from "mongoose";

const ReviewSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    comment: {
      type: String,
      trim: true,
      maxlength: 500,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const reviewModel = model("reviews", ReviewSchema);

export default reviewModel;
