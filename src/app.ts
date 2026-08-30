import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import calculateRouter from "./routes/calculator.routes";
import { AppError } from "./errors/app-error";

export function createApp(): Application {
  const app = express();

  app.use(express.json());

  app.use(cors({ origin: "http://localhost:5173" }));

  app.use("/api" , calculateRouter);

  app.use((_err: unknown , _req: Request, _res: Response, _next:NextFunction) => {
    if(_err instanceof AppError) {
        _res.status(_err.statusCode).json({error : _err.message});
        return;
    }
    console.error(_err);
    _res.status(500).json({ error: "Internal server error" });
  });

  app.get("/health", (_req: Request, res: Response) => {
    res.status(200).json({ status: "ok" });
  });

  return app;
}