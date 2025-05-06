import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongodb";
import Cart from "../../models/add-to-cart";
import { CartSchema } from "@/app/lib/schemas";

export async function GET() {
  try {
    await dbConnect();
    const carts = await Cart.find().lean();
    return NextResponse.json(carts);
  } catch (error) {
    console.error("GET /api/carts error:", error);
    return NextResponse.json(
      { error: "Failed to fetch carts", error },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const data = await request.json();
  const parseResult = CartSchema.safeParse(data);
  if (!parseResult) {
    return NextResponse.json(
      { errors: parseResult.error.format() },
      { status: 400 }
    );
  }
  await dbConnect();
  const newCart = await Cart.create(data);
  return NextResponse.json(newCart, { status: 201 });
}
