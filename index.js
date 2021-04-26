// back-end server 가 시작되는 곳
const express = require("express");
const app = express();
// local port 설정, 번호는 아무거나 사용 가능
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://hayoungKim:1568978*kim@reactstudy2.tbqza.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
