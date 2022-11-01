import express from "express";
import { config } from "dotenv";
import { addUser, getAllUser } from "./services/User";
import cors from "cors";

config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("pong!");
});

app.post("/add", async (req, res) => {
    const { name, role } = req.body;

    const result = await addUser({ name, role });

    res.status(200).send(result);
});

app.get("/get/users", async (req, res) => {
    const result = await getAllUser();

    res.status(200).send(result);
});

app.listen(process.env.PORT, () => {
    console.log("server is loaded on " + process.env.PORT);
});
