import express from 'express';


const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello from Node + TypeScript!');
});
app.get('/', (_req, res) => {
  res.send('Hello from Node + TypeScript!');
});
app.get('/health', (_req, res) => {
  res.send('Everything is working perfect! v1');
});

export default app