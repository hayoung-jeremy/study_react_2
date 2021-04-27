// back-end server 가 시작되는 곳
const express = require("express");
const app = express();
// local port 설정, 번호는 아무거나 사용 가능
const port = 5000;

const bodyParser = require("body-parser");

// application/x-www-form-urlencoded 로 생긴 데이터를 가져와서 분석
app.use(bodyParser.urlencoded({ extended: true }));

// application/json 타입으로 된 데이터를 가져와서 분석
app.use(bodyParser, json());

// 회원가입시 가져오게 될 정보 목록들
const { User } = require("./models/User");

const mongoose = require("mongoose");
const { json } = require("body-parser");
mongoose
  .connect(
    "mongodb+srv://hayoungKim:1568978*kim@reactstudy2.tbqza.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      // error 발생을 막아줌
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

// route's endpoint : '/register', (request, response)
app.post("/register", (req, res) => {
  // 회원 가입 시 필요한 정보들을 client 로부터 가져오면,
  // 이를 DB 에 넣어준다.
  const user = new User(req.body);

  // mongoDB method :
  user.save((err, userInfo) => {
    // 저장할 때 err 가 있을 시 클라이언트에 json 형식으로 전달
    if (err) return res.json({ success: false, err });
    // status(200) : 전달 성공을 의미
    return res.status(200).json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
