import express, { Application, NextFunction, Request, Response } from "express";
import calculateRouter from "./routes/calculator.routes";

export function createApp(): Application {
  const app = express();

  app.use(express.json());

 

 app.use((req: Request, _res: Response, next: NextFunction) => {
  console.log("DEBUG content-type:", req.headers["content-type"]);
  console.log("DEBUG body:", req.body);
  next();
});

   app.use("/api" , calculateRouter);

  app.get("/health", (_req: Request, res: Response) => {
    res.status(200).json({ status: "ok" });
  });

  // Catch-all for anything that doesn't match a route above.
  app.use((req: Request, res: Response) => {
    res.status(404).json({ error: `Route not found: ${req.method} ${req.path}` });
  });

  return app;
}