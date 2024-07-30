import twilio from "twilio";
process.loadEnvFile();

export const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const webhook = async (req, res) => {
  const twiml = new twilio.twiml.MessagingResponse();
  const message = req.body.Body;

  if (message === "Hola") {
    twiml.message(`Hola ${req.body.ProfileName}, ¿cómo puedo ayudarte?`);
  }

  console.log(req.body);

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
};
