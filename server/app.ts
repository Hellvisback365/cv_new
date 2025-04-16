import express from "express";
import { registerRoutes } from "./routes";
import { serveStatic, log } from "./vite";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
  await registerRoutes(app);

  if (app.get("env") !== "development") {
    serveStatic(app);
  }
})();

export default app;
