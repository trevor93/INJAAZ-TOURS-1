
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const { WHATSAPP_TOKEN, PHONE_NUMBER_ID } = process.env;

export const sendOrderToWhatsApp = async (orderDetails) => {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/v13.0/${PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: 'whatsapp',
        to: process.env.RECIPIENT_PHONE,
        type: 'template',
        template: {
          name: 'order_confirmation',
          language: {
            code: 'en_US',
          },
          components: [
            {
              type: 'body',
              parameters: [
                {
                  type: 'text',
                  text: orderDetails.customerName,
                },
                {
                  type: 'text',
                  text: orderDetails.packageName,
                },
                {
                  type: 'text',
                  text: orderDetails.travelDates,
                },
              ],
            },
          ],
        },
      },
      {
        headers: {
          Authorization: `Bearer ${WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Message sent successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error.response.data);
    throw error;
  }
};
