import mongoose from "mongoose";

const autosShema = mongoose.Schema({
  marca: {
    type: String,
    required: true,
    trim: true,
  },
  modelo: {
    type: String,
    required: true,
    trim: true,
  },
  año: {
    type: Number,
    required: true,
    trim: true,
  },
  disponibilidad: {
    type: String,
    required: true,
    enum: ["disponible", "ocupado"],
  },
});

export default mongoose.model("Auto", autosShema);
