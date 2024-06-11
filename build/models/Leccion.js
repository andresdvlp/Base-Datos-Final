"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LeccionSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    contenido: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
    cursoId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Curso" }
});
exports.default = (0, mongoose_1.model)('Leccion', LeccionSchema);
