import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requied: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 15,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    }

}, {timestamps: true});

export const User = mongoose.model('User', userSchema);