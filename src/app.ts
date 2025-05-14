import express from "express";
import { logger } from "./middleware/logger";
import { errorHandler } from "./middleware/errorHandler";
import bookRoutes from "./routes/bookRoutes";

const app = express();

app.use(logger);
app.use(express.json());
app.use("/api", bookRoutes);
app.use(errorHandler);

export default app;
