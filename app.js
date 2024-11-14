import e from "express";
import { conectDB } from "./config/db.js";
const PORT = 3005;

const app = e();
conectDB();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
