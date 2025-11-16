import express from "express";
import "dotenv/config";
import connectToMongoDB from "./configs/mongodb.js";

// App confi
const app = express();
const port = process.env.PORT || 5000;
connectToMongoDB()

app.get("/", (req, res) => {
  res.send("Hello India");
});

app.listen(port, () => console.log(`Server is running on ${port}`));
