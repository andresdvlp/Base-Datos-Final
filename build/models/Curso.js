"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CursoSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    Observation: { type: String, required: true },
    createAt: { type: Date, default: Date.now }
});
exports.default = (0, mongoose_1.model)('Curso', CursoSchema);
