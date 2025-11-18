import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    instock:{
        type: Boolean,
        default: true,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    }
}, {timestamps: true});

export default mongoose.model("Product", productSchema);