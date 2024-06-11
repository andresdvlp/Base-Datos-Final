import { Schema, model } from "mongoose";

const LeccionSchema = new Schema({
    title: { type: String, required: true },
    contenido: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
    cursoId: { type: Schema.Types.ObjectId, ref: "Curso" }
});

export default model('Leccion', LeccionSchema);
