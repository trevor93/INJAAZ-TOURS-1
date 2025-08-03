
import express from 'express';
import { sendOrderToWhatsApp } from '../utils/sendWhatsApp.js';

const router = express.Router();

router.post('/submit', async (req, res) => {
  try {
    const orderDetails = req.body;
    const result = await sendOrderToWhatsApp(orderDetails);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error sending message' });
  }
});

export default router;
