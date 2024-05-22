import "reflect-metadata";
import "dotenv/config";
import "express-async-errors";

import express, { json } from "express";
import helmet from "helmet";

import { HandleErrors } from "./middlewares";
import { CarRouter } from "./routers";

export const app = express();

app.use(helmet());
app.use(json());

app.use("/cars", CarRouter);

app.use(HandleErrors.execute);
