import e from "express";
import { conectDB } from "./config/db.js";
import autoRoutes from "./routes/autos.routes.js";

const PORT = 3005;

const app = e();
conectDB();

app.use('/api', autoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
