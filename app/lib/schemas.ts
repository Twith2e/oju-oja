import { z } from "zod";

export const CartSchema = z.object({
  productID: z.string().nonempty(),
  createdAt: z.date(),
});

export type Cart = z.infer<typeof CartSchema>;
