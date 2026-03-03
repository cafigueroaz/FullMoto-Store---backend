import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    username: {
      type: String,

      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 8,
    },
    role: {
      type: String,

      enum: ["admin", "user", "staff"],

      default: "user",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    activationCode: {
      type: String,
      trim: true,
      default: null,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export default model("users", UserSchema);
