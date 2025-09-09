const express = require("express");
const app = express();
const port = process.env.PORT || 7700;

app.use(express.json());

// Endpoint GET
app.get("/permen", (req, res) => {
  const { chatId, type } = req.query;
  res.json({
    status: "success",
    chatId,
    type,
    message: `Data diterima untuk chatId ${chatId} dengan type ${type}`
  });
});

app.listen(port, () => {
  console.log(`API jalan di port ${port}`);
});
