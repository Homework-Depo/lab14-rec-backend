import mongoose from "mongoose";

const machineSchema = new mongoose.Schema({
  plant: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant' },
  number: { type: String, unique: true },
  brand: String,
  model: String,
  technicians: [{
    technician: { type: mongoose.Schema.Types.ObjectId, ref: 'Technician' },
    assignmentStartDate: Date,
    assignmentEndDate: Date,
    shift: String
  }],
  repairMachine: { type: mongoose.Schema.Types.ObjectId, ref: 'Machine' }
});

const technicianSchema = new mongoose.Schema({
  dni: String,
  name: String,
  lastName: String,
  dateOfBirth: Date,
  contactNumbers: [String]
});

const plantSchema = new mongoose.Schema({
  color: String,
  surface: Number,
  processes: [{ name: String, complexity: Number }]
});

const Plant = mongoose.model('Plant', plantSchema);
const Technician = mongoose.model('Technician', technicianSchema);
const Machine = mongoose.model('Machine', machineSchema);

export { Plant, Technician, Machine };