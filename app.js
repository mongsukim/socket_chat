const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());

// 데이터베이스 연결
mongoose
  .connect(process.env.DB, {})
  .then(() => console.log('connected to database'))
  .catch((err) => console.log('Error connecting to database:', err));

// 기본 경로 라우트 핸들러 추가
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 포트 설정 및 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
