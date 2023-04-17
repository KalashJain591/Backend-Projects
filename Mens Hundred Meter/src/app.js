const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const MenRanking = require("../src/models/Mens")
require("./db/connect");
const mens=require("./routers/Mens");

app.listen(port, () => {
    console.log(`connected on port ${port}`);
    
})
app.get("/", (req, res) => {
    res.send("Hello from the root ")
})
app.use(mens);

app.use(express.json());
