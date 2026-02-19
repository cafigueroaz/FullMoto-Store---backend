import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
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
      enum: ["user", "staff", "admin"],
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
