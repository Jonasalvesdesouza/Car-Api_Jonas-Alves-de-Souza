import { inject, injectable } from "tsyringe";
import { CarsServices } from "../services";
import { Request, Response, response } from "express";

@injectable()
class CarControllers {
  constructor(@inject(CarsServices) private carServices: CarsServices) {}

  async create(req: Request, res: Response): Promise<Response> {
    const body = req.body;

    const response = await this.carServices.create(body);

    return res.status(201).json(response);
  }
  async findMany(req: Request, res: Response): Promise<Response> {
    const response = await this.carServices.findMany();

    return res.status(200).json(response);
  }
  async findOne(req: Request, res: Response): Promise<Response> {
    const carId = Number(req.params.id);

    const response = await this.carServices.findOne(carId);

    return res.status(200).json(response);
  }
  async upDate(req: Request, res: Response): Promise<Response> {
    const carId = Number(req.params.id);
    const body = req.body;

    const response = await this.carServices.upDate(carId, body);

    return res.status(200).json(response);
  }
  async delete(req: Request, res: Response): Promise<Response> {
    const carId = Number(req.params.id);

    await this.carServices.delete(carId);

    return res.status(204).json();
  }
}

export { CarControllers };
