import express from "express";

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Listening on ${PORT}`));

app.get("/", (req, res) => {
  res.send(`Hello Railway App`);
});

app.get("/bye", (req, res) => {
  res.send(`Goodbye Railway App`);
});
