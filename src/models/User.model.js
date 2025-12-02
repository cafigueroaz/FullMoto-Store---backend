import {Schema, model} from 'mongoose';

const UserSchema = new Schema({
    name: {
        //reglas
        type: String,
        required: true,
        //modificador
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
        maxLength: 12,
    },
    role: {
        type: String,
        enum: ['super-admin', 'admin', 'editor', 'colaborator', 'registered'],
        default: 'registered'
    },
    isActive: {
        type: Boolean, 
        default: true
    },
},{
versionKey: false,
timestamps: true
}
);

const Usermodel = model(
    "users",
    UserSchema
);

export default Usermodel;