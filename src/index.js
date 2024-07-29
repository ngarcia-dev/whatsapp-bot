import express from "express";
import twilio from "twilio";

process.loadEnvFile();

const app = express();
app.use(express.urlencoded({ extended: false }));

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

app.post("/webhook", (req, res) => {
  const twiml = new twilio.twiml.MessagingResponse();
  const message = req.body.Body;

  if (message === "Hola") {
    twiml.message(`Hola ${req.body.ProfileName}, ¿cómo puedo ayudarte?`);
  }

  console.log(req.body);

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
