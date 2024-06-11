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
const Curso_1 = __importDefault(require("../models/Curso"));
class CursoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    createCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, observation } = req.body;
            const newCurso = new Curso_1.default({ title, observation });
            yield newCurso.save();
            res.json({ status: res.status });
        });
    }
    readCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const allCurso = yield Curso_1.default.find();
            res.json({ status: 200, misPost: allCurso });
        });
    }
    readCursoId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const allPostId = yield Curso_1.default.findById(id);
            res.json({ status: 200, misPost: allPostId });
        });
    }
    updateCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const titulo = yield Curso_1.default.findOneAndUpdate(id, req.body);
            res.json({ status: 200, misPost: titulo });
        });
    }
    deleteCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const titulo = yield Curso_1.default.findOneAndUpdate(id, req.body);
            res.json({ status: 200, misPost: titulo });
        });
    }
    routes() {
        this.router.post("/", this.createCurso);
        this.router.get("/", this.readCurso);
        this.router.get("/:id", this.readCursoId);
        this.router.put("/:id", this.updateCurso);
        this.router.delete("/:id", this.deleteCurso);
    }
}
const tituloRoutes = new CursoRoutes();
tituloRoutes.routes();
exports.default = tituloRoutes.router;
