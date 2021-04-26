// back-end server 가 시작되는 곳
const express = require("express");
const app = express();
// local port 설정, 번호는 아무거나 사용 가능
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
