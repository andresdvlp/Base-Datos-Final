import { Schema, model, Document } from "mongoose";

interface ICurso extends Document {
    title: string;
    Observation: string;
    createAt: Date;
  }

const CursoSchema = new  Schema({
    title: {type: String, required: true},
    Observation: {type: String, required: true},
    createAt: {type: Date, default: Date.now}
});




export default model<ICurso>('Curso', CursoSchema);
