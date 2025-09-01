import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Info from "./Model/info.js";

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://localhost:27017/register");

app.post("/data", (req, res) => {
    Info.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
});

app.get("/admin", (req, res) => {
    Info.find()
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
});


app.listen(8000, () => {
    console.log("Server is running...");
});


