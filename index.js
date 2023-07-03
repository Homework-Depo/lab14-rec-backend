import express from "express";
import db from "./Database.js";
import * as controller from "./Controller.js";

db;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/maquina", controller.createMachine);
app.get("/maquina", controller.getMachines);
app.post("/planta", controller.createPlant);
app.get("/planta", controller.getPlants);
app.post("/tecnico", controller.createTechnician);
app.get("/tecnico", controller.getTechnicians);

app.listen(3000, () => console.log("Servidor ejecutandose en el puerto 3000"));