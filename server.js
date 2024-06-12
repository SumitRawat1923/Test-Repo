const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({
    message: "Route is working",
  });
});

app.listen(3001, () => {
  console.log("server in live on http://localhost:3001");
});
