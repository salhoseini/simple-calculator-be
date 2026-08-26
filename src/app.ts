import express, { Application, NextFunction, Request, Response } from "express";

export function createApp(): Application {
  const app = express();

  app.use(express.json());

  // Minimal request logger — swap for morgan/pino later if you want.
  app.use((req: Request, _res: Response, next: NextFunction) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
    next();
  });

  app.get("/health", (_req: Request, res: Response) => {
    res.status(200).json({ status: "ok" });
  });

  // Calculator routes will be mounted here in Step 3.

  // Catch-all for anything that doesn't match a route above.
  app.use((req: Request, res: Response) => {
    res.status(404).json({ error: `Route not found: ${req.method} ${req.path}` });
  });

  return app;
}