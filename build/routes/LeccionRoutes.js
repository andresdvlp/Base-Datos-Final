"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Leccion_1 = __importDefault(require("../models/Leccion"));
class LeccionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    createLeccion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, contenido, postId } = req.body;
                const newLeccion = new Leccion_1.default({ title, contenido, postId });
                yield newLeccion.save();
                res.json({ status: 200, Leccion: newLeccion });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ status: 500, error: error.message });
                }
                else {
                    res.status(500).json({ status: 500, error: "Unknow error" });
                }
            }
        });
    }
    readLeccion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allLeccion = yield Leccion_1.default.find().populate("cursoId");
                res.json({ status: 200, misPost: allLeccion });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ status: 500, error: error.message });
                }
                else {
                    res.status(500).json({ status: 500, error: "Unknow error" });
                }
            }
        });
    }
    readLeccionId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const jugadorId = yield Leccion_1.default.findById(id).populate("postId");
                res.json({ status: 200, misPost: jugadorId });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ status: 500, error: error.message });
                }
                else {
                    res.status(500).json({ status: 500, error: "Unknow error" });
                }
            }
        });
    }
    updateLeccion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const post = yield Leccion_1.default.findByIdAndUpdate(id, req.body, { new: true });
                res.json({ status: 200, misPost: post });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ status: 500, error: error.message });
                }
                else {
                    res.status(500).json({ status: 500, error: "Unknow error" });
                }
            }
        });
    }
    deleteLeccion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const post = yield Leccion_1.default.findByIdAndRemove(id);
                res.json({ status: 200, misPost: post });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ status: 500, error: error.message });
                }
                else {
                    res.status(500).json({ status: 500, error: "Unknow error" });
                }
            }
        });
    }
    routes() {
        this.router.post("/create", this.createLeccion);
        this.router.get("/", this.readLeccion);
        this.router.get("/:id", this.readLeccionId);
        this.router.put("/:id", this.updateLeccion);
        this.router.delete("/:id", this.deleteLeccion);
    }
}
const leccionRoutes = new LeccionRoutes();
leccionRoutes.routes();
exports.default = leccionRoutes.router;
