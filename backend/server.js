
import express from 'express';
import bodyParser from 'body-parser';
import orderRoute from './routes/order.js';

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use('/order', orderRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
