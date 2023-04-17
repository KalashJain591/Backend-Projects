const express = require("express")
const app = express();
  
const studentRouter=require("../src/Routers/student");
require("../db/connect");

const port = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) => {
    console.log("Hello from the home page");
    res.send("karma is a bitch boy");
})


app.use(studentRouter);






app.listen(port, () => {
    console.log(`connection is set up at ${port}`);
})
