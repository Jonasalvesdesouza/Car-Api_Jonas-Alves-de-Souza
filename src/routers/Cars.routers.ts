import { Router } from "express";
import { container } from "tsyringe";
import { CarsServices } from "../services";
import { CarControllers } from "../controllers";
import { ValidateBody, checkExistenceObject } from "../middlewares";
import { CarBodySchema, CarBodyUpdateSchema } from "../schemas";

const CarRouter = Router();

container.registerSingleton("CarServices", CarsServices);
const controllers = container.resolve(CarControllers);

CarRouter.post("/", ValidateBody.execute(CarBodySchema), (req, res) =>
  controllers.create(req, res)
);
CarRouter.get("/", (req, res) => controllers.findMany(req, res));

CarRouter.get("/:id", checkExistenceObject.execute, (req, res) =>
  controllers.findOne(req, res)
);

CarRouter.patch(
  "/:id",
  checkExistenceObject.execute,
  ValidateBody.execute(CarBodyUpdateSchema),
  (req, res) => controllers.upDate(req, res)
);

CarRouter.delete("/:id", checkExistenceObject.execute, (req, res) =>
  controllers.delete(req, res)
);

export { CarRouter };
