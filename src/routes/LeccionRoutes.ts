import { Request, Response, Router } from "express";
import Leccion from "../models/Leccion";


class LeccionRoutes {

    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    public async createLeccion(req: Request, res: Response): Promise<void>{
        try {
            const { title, contenido, postId } = req.body;
            const newLeccion = new Leccion({ title, contenido, postId });
            await newLeccion.save();
            res.json({ status: 200, Leccion: newLeccion });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ status: 500, error: error.message });
            } else {
                res.status(500).json({ status: 500, error: "Unknow error" });
            }
        }
    }

    public async readLeccion(req: Request, res: Response): Promise<void>{
        try {
            const allLeccion = await Leccion.find().populate("cursoId");
            res.json({ status: 200, misPost: allLeccion });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ status: 500, error: error.message });
            } else {
                res.status(500).json({ status: 500, error: "Unknow error" });
            }
        }
    }

    public async readLeccionId(req: Request, res: Response): Promise<void>{
        try {
            const { id } = req.params;
            const jugadorId = await Leccion.findById(id).populate("postId");
            res.json({ status: 200, misPost: jugadorId });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ status: 500, error: error.message });
            } else {
                res.status(500).json({ status: 500, error: "Unknow error" });
            }
        }
    }

    public async updateLeccion(req: Request, res: Response): Promise<void>{
        try {
            const { id } = req.params;
            const post = await Leccion.findByIdAndUpdate(id, req.body, { new: true });
            res.json({ status: 200, misPost: post });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ status: 500, error: error.message });
            } else {
                res.status(500).json({ status: 500, error: "Unknow error" });
            }
        }
    }

    public async deleteLeccion(req: Request, res: Response): Promise<void>{
        try {
            const { id } = req.params;
            const post = await Leccion.findByIdAndRemove(id);
            res.json({ status: 200, misPost: post });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ status: 500, error: error.message });
            } else {
                res.status(500).json({ status: 500, error: "Unknow error" });
            }
        }
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

export default leccionRoutes.router;