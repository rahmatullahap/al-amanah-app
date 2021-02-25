import bodyParser from 'body-parser';
import express from 'express';

// rest of the code remains same
const app = express();

app.use(bodyParser.json());
app.all('/', (_, res) => {
  res.json({ data: 'hello guys' });
});
app.post('/add', (req, res) => {
  const data = req.body;
  res.json({ data });
});
export default app;
