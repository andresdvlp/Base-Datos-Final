import mongoose from 'mongoose';

const MONGO_URL = "mongodb+srv://rochaandres9:123456789!*@cluster0.o0z1ahb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("useFindAndModify", false);
mongoose.connect(MONGO_URL || process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});