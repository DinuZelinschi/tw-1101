// Importă constantele și modulul express
import { number } from "./constants.js";
import express from "express";

// Creează o aplicație express
const app = express();

// Definește o rută pentru a verifica dacă serverul funcționează
app.get("/", (req, res) => {
  res.send(`Numărul este ${number}`);
});

// Definește portul pe care va rula serverul
const PORT = 3000;

// Pornește serverul
app.listen(PORT, () => {
  console.log(`Serverul rulează pe http://localhost:${PORT}`);
});

// Afișează valoarea constantă importată
console.log(number);
