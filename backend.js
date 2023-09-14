const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 設定靜態資源目錄，用於存儲塗鴉圖片
app.use(bodyParser.json());

app.post('/api/drawings', (req, res) => {
  // 在這裡處理儲存塗鴉的邏輯
  const drawingData = req.body;
  // 做一些儲存塗鴉的操作，例如存入資料庫或檔案系統

  // 返回成功回應
  res.status(200).json({ message: '塗鴉已成功儲存！' });
});

// 啟動伺服器
app.listen(3000, () => {
  console.log('伺服器已啟動，監聽端口 3000');
});
