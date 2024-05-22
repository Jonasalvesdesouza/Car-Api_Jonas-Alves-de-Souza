import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../erros";

class checkExistenceObject {
  static async execute(req: Request, res: Response, next: NextFunction) {
    const objId = Number(req.params.id);

    try {
      const car = await prisma.car.findFirst({
        where: { id: objId },
      });

      if (!car) {
        throw new AppError(404, "Car not found");
      }
      next();
    } catch (error) {
      next(error);
    }
  }
}

export { checkExistenceObject };
