import { z } from "zod";

const CarSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  description: z.string().min(1),
  brand: z.string().min(1),
  year: z.number().positive(),
  km: z.number().positive(),
});

const CarBodySchema = CarSchema.omit({ id: true });

export { CarSchema, CarBodySchema };
