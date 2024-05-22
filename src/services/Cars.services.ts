import { prisma } from "../database/prisma";
import { AppError } from "../erros";
import { ICreateCar, IUpdateCar, Icar } from "../interfaces";

class CarsServices {
  async create(body: ICreateCar): Promise<Icar> {
    const newCar = await prisma.car.create({ data: { ...body } });

    return newCar;
  }
  async findMany(): Promise<Icar[]> {
    const data = await prisma.car.findMany();

    return data;
  }
  async findOne(carId: number): Promise<Icar | null> {
    const data = await prisma.car.findFirst({
      where: { id: carId },
    });

    return data as null;
  }
  async upDate(carId: number, body: IUpdateCar): Promise<Icar> {
    const data = await prisma.car.update({
      where: { id: carId },
      data: body,
    });

    return data;
  }
  async delete(carId: number): Promise<void> {
    await prisma.car.delete({ where: { id: carId } });
  }
}

export { CarsServices };
