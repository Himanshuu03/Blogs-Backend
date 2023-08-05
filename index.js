const express = require("express");
const app = express();
const createRoute = require("./routes/createRoutes");
const likeRoute = require("./routes/likeRoute");
const commentRoute = require("./routes/commentRoute")
const dbConnect = require("./config/dataBase");



require("dotenv").config();

app.use(express.json());

app.listen(process.env.PORT,()=>{
    console.log("server started");
})

app.use("/posts",createRoute);
app.use("/likes",likeRoute);
app.use("/comments",commentRoute);

dbConnect();

app.get("/",(request,response)=>{
    response.send(`<h1>This is Homepage</h1>`)
})
