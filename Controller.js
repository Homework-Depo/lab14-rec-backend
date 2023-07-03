import { Plant, Technician, Machine } from "./Modelos.js";

export const createMachine = async (req, res) => {
  const { plant, number, brand, model, technicians, repairMachine } = req.body;
  const machine = new Machine({ plant, number, brand, model, technicians, repairMachine });
  await machine.save();
  res.json(machine);
}

export const getMachines = async (req, res) => {
  const machines = await Machine.find();
  res.json(machines);
}

export const createPlant = async (req, res) => {
  const { color, surface, processes } = req.body;
  const plant = new Plant({ color, surface, processes });
  await plant.save();
  res.json(plant);
}

export const getPlants = async (req, res) => {
  const plants = await Plant.find();
  res.json(plants);
}

export const createTechnician = async (req, res) => {
  const { dni, name, lastName, dateOfBirth, contactNumbers } = req.body;
  const technician = new Technician({ dni, name, lastName, dateOfBirth, contactNumbers });
  await technician.save();
  res.json(technician);
}

export const getTechnicians = async (req, res) => {
  const technicians = await Technician.find();
  res.json(technicians);
}
