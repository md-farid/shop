import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res, next) => {
  res.send(data.products);
});

app.get('/', (req, res, next) => {
  res.send('Server is ready for fight.');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
