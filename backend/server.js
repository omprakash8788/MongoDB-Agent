import express from "express";
import "dotenv/config";
import connectToMongoDB from "./configs/mongodb.js";

// App confi
const app = express();
const port = process.env.PORT || 4000;
connectToMongoDB()

app.get("/", (req, res) => {
  res.send("Hello DataArt India");
});

app.listen(port, () => console.log(`Server is running on ${port}`));
