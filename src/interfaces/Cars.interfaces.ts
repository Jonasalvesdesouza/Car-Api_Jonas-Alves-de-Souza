import { z } from "zod";
import { CarBodySchema, CarSchema } from "../schemas";

type Icar = z.infer<typeof CarSchema>;
type ICreateCar = z.infer<typeof CarBodySchema>;
type IUpdateCar = Partial<ICreateCar>;

export { Icar, ICreateCar, IUpdateCar };
