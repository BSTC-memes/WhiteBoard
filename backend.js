const express = require('express');
const app = express();

// 設定靜態資源目錄，用於存儲塗鴉圖片
app.use(express.static('public'));

// 處理儲存塗鴉的 POST 請求
app.post('/save-doodle', (req, res) => {
  // 在這裡處理儲存塗鴉的邏輯，例如將塗鴉圖片保存到伺服器上的某個目錄

  // 假設塗鴉圖片保存成功
  const savedImagePath = '/path/to/saved/image.jpg';
  res.json({ success: true, imagePath: savedImagePath });
});

// 處理獲取塗鴉圖片的 GET 請求
app.get('/doodle', (req, res) => {
  // 在這裡處理獲取塗鴉圖片的邏輯，例如從伺服器上的某個目錄讀取塗鴉圖片

  // 假設獲取塗鴉圖片成功
  const doodleImagePath = '/path/to/doodle/image.jpg';
  res.sendFile(doodleImagePath);
});

// 啟動伺服器
app.listen(3000, () => {
  console.log('伺服器已啟動，監聽端口 3000');
});
