import express from "express";

// App confi
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello DataArt India");
});

app.listen(port, () => console.log(`Server is running on ${port}`));
