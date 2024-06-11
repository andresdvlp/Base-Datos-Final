import { Request, Response, Router } from "express";
import Curso from "../models/Curso";

class CursoRoutes {

    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    public async createCurso(req: Request, res: Response): Promise<void>{
        const { title, observation } = req.body;
        const newCurso = new Curso({title, observation});
        await newCurso.save();
        res.json({status: res.status}); 
    }

    public async readCurso(req: Request, res: Response): Promise<void>{
        const allCurso = await Curso.find();
        res.json({status: 200, misPost: allCurso}); 
    }

    public async readCursoId(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const allPostId = await Curso.findById(id);
        res.json({status: 200, misPost: allPostId}); 
    }


    public async updateCurso(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const titulo = await Curso.findOneAndUpdate(id, req.body);
        res.json({status: 200, misPost: titulo}); 
    }

    public async deleteCurso(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const titulo = await Curso.findOneAndUpdate(id, req.body);
        res.json({status: 200, misPost: titulo}); 
    }

    routes(){
        this.router.post("/", this.createCurso);
        this.router.get("/", this.readCurso);
        this.router.get("/:id", this.readCursoId);
        this.router.put("/:id", this.updateCurso);
        this.router.delete("/:id", this.deleteCurso);
    }

}

const tituloRoutes = new CursoRoutes();
tituloRoutes.routes();

export default tituloRoutes.router;