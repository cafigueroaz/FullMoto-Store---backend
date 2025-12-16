import { Schema, model } from "mongoose";

const categoriesSchema = new Schema(
    {
        name: {
            //reglas
            type: String,  
            required: true,
            //modificador
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: Boolean,
            default: true,  
        },
        image: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const categoriesModel = model("categories", categoriesSchema);

export default categoriesModel;