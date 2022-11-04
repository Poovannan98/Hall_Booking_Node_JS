const express = require("express");  // import express
const app = express();  // call express

const PORT = 4000;
app.get("/", function (request, response) {
  response.send("Welcome to HallBoking System");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));