import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  productID: {
    type: Number,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: { type: Date, default: Date.now() },
});

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
