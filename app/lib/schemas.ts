import { z } from "zod";

export const CartSchema = z.object({
  productID: z.number(),
  price: z.number(),
});

export const CartDeleteSchema = z.object({
  productID: z.number(),
});

export type Cart = z.infer<typeof CartSchema>;
