//importing packages
import express from "express";
import hello from "./routes/hello";
const app = express();
const port = process.env.PORT || 5500;

//middlewares
//our server needs to recognize the incoming request objects as JSON objects
app.use(express.json());

//adding routes
app.use("/hello", hello);
//port
//we need to listen for a connection to know our server is running
app.listen(port, ( console.log(`Listening on Port: ${port}`)));