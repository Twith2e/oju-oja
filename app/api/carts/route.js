import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongodb";
import Cart from "../../models/add-to-cart";
import { CartSchema, CartDeleteSchema } from "@/app/lib/schemas";

export async function GET() {
  try {
    const connected = await dbConnect();
    if (!connected) {
      console.log("Unable to connect to mongodb");
      return;
    }
    const carts = await Cart.find();
    return NextResponse.json(carts);
  } catch (error) {
    console.error("GET /api/carts error:", error.message || error);
    return NextResponse.json(
      { error: "Failed to fetch carts", error },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const parseResult = CartSchema.safeParse(data);

    if (!parseResult.success) {
      return NextResponse.json(
        { errors: parseResult.error.format() },
        { status: 400 }
      );
    }

    await dbConnect();
    const existing = await Cart.findOne({
      productID: parseResult.data.productID,
    });
    if (existing) {
      return NextResponse.json(
        { message: "Item already in cart", cartItem: existing },
        { status: 200 }
      );
    }
    const newCart = await Cart.create(parseResult.data);

    return NextResponse.json(newCart, { status: 201 });
  } catch (error) {
    console.error("Error adding to cart:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const data = await request.json();
    console.log("Received data:", data);

    const parseResult = CartDeleteSchema.safeParse(data);

    if (!parseResult.success) {
      return NextResponse.json(
        { errors: parseResult.error.format() },
        { status: 400 }
      );
    }
    console.log("Zod‐parsed payload:", parseResult.data);

    await dbConnect();
    const existing = await Cart.findOne({
      productID: parseResult.data.productID,
    });
    if (!existing) {
      return NextResponse.json(
        { message: "Item not found in cart" },
        { status: 404 }
      );
    }
    await Cart.deleteOne({ productID: parseResult.data.productID });
    console.log("Cart item deleted:", existing);

    return NextResponse.json(
      { message: "Item removed from cart" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting from cart:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
