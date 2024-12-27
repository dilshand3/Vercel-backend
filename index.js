import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config({
    path: "./.env"
});
import testRouter from "./route/test.route.js";

const app = express();
const port = process.env.PORT || 2000
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json());
app.use("/vercel", testRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})