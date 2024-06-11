"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URL = "mongodb+srv://rochaandres9:123456789!*@cluster0.o0z1ahb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose_1.default.set("useFindAndModify", false);
mongoose_1.default.connect(MONGO_URL || process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
