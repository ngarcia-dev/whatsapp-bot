import express from "express";
import twilio from "twilio";

process.loadEnvFile();

const app = express();
app.use(express.urlencoded({ extended: false }));

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Datos de la universidad (puedes usar una base de datos o archivo JSON)
const universityData = {
  carreras: [
    { nombre: "Ingeniería de Sistemas", descripcion: "..." },
    { nombre: "Medicina", descripcion: "..." },
    // ... más carreras
  ],
  becas: [
    { nombre: "Beca Talento", requisitos: "..." },
    // ... más becas
  ],
  // ... más información
};

app.post("/webhook", (req, res) => {
  console.log(req.body.Body);
  if (req.body.Body === "hello") {
    const twiml = new twilio.twiml.MessagingResponse();
    twiml.message("¡Hello, Thanks");

    res.writeHead(200, { "Content-Type": "text/xml" });
    res.end(twiml.toString());
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
