import dotenv from "dotenv";
import express from "express";
dotenv.config({
    path : "./.env"
});
import testRouter from "./route/test.route.js";

const app = express();
const port = process.env.PORT || 2000

app.use(express.json());
app.use(testRouter)

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})