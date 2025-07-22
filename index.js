const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/health', (req, res) => {
  const { goal, condition } = req.body;

  let response = `Hi Surya! Here's your health guide:\n`;

  if (goal === 'weight_loss') {
    response += '✅ Follow a calorie-deficit diet.\n🍽 Eat high protein, avoid sugar.\n';
  }

  if (condition === 'diabetes') {
    response += '🩸 Choose low-GI foods (oats, legumes), avoid white rice and sweets.\n';
  }

  if (condition === 'bp') {
    response += '🫀 Reduce salt, eat potassium-rich foods (banana, spinach).\n';
  }

  res.send(response);
});

app.listen(port, () => {
  console.log(`Health App backend live at http://localhost:${port}`);
});