const express = require("express");
const mongoose  = require("./DBConnection/connection.js");
const projectRoute = require("./routes/projects.js")
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");

app.use(cors());
app.use("/project", projectRoute)
//rutas
app.get("/", (req, res) =>{
    res.send("Wellcome");
})

mongoose.DBConection();

app.listen(port, ()=> console.log("PORT YOU'RE USING IS:", port));