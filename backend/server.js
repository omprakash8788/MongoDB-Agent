import express from "express";
import "dotenv/config";
import cors from 'cors'
import connectToMongoDB from "./configs/mongodb.js";
import aiRoute from "./routes/aiRoute.js"
// App confi
const app = express();
const port = process.env.PORT || 5000;
connectToMongoDB()

// middlewares
app.use(express.json()); // adds middleware that parses incoming JSON request bodies and makes them available as req.body.
app.use(cors());

app.use("/api/ai", aiRoute);

app.get("/", (req, res) => {
  res.send("Hello India");
});

app.listen(port, () => console.log(`Server is running on ${port}`));
