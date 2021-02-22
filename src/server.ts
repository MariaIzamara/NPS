import express, { request, response } from 'express';

const app = express();

// http://localhost:3333/...

// 1° parâmetro: rota | 2° parâmetro: request, response

app.get("/", (request, response) => {
  return response.json({ message: "Hello World!" })
});

app.post("/", (request, response) => {
  return response.json({ message: "Os dados foram salvos com sucesso!" })
});

app.listen(3333, () => console.log("Server is running!"));